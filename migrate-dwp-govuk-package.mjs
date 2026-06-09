#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const DEFAULT_PACKAGE = "@dwp-govuk/govuk-prototype-kit";
const DEFAULT_VERSION = "13.20.2";
const DEFAULT_PROJECT_ID = "82735932";

const args = new Set(process.argv.slice(2));
const write = args.has("--write");
const help = args.has("--help") || args.has("-h");

const cwd = process.cwd();
const packageName = process.env.DWP_GOVUK_PACKAGE_NAME || DEFAULT_PACKAGE;
const packageVersion = process.env.DWP_GOVUK_PACKAGE_VERSION || DEFAULT_VERSION;
const projectId = process.env.DWP_GOVUK_PACKAGE_PROJECT_ID || DEFAULT_PROJECT_ID;
const registry = `https://gitlab.com/api/v4/projects/${projectId}/packages/npm/`;
const tokenConfigKey = `//gitlab.com/api/v4/projects/${projectId}/packages/npm/:_authToken`;
const dependencyValue = `npm:${packageName}@${packageVersion}`;
const prebuildScript =
  `npm config set @dwp-govuk:registry ${registry} --location=project ` +
  `&& npm config set ${tokenConfigKey} $NPM_TOKEN --location=project`;

if (help) {
  console.log(`
Migrate a GOV.UK prototype repo to the DWP GOV.UK Prototype Kit package.

Usage:
  node migrate-dwp-govuk-package.mjs          # dry run
  node migrate-dwp-govuk-package.mjs --write  # update files

Optional environment variables:
  DWP_GOVUK_PACKAGE_VERSION       default: ${DEFAULT_VERSION}
  DWP_GOVUK_PACKAGE_PROJECT_ID    default: ${DEFAULT_PROJECT_ID}
  DWP_GOVUK_PACKAGE_NAME          default: ${DEFAULT_PACKAGE}

Run this from the root of one prototype repository.
`);
  process.exit(0);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function fileExists(fileName) {
  return fs.existsSync(path.join(cwd, fileName));
}

function updateNpmrc() {
  const npmrcPath = path.join(cwd, ".npmrc");
  const existing = fs.existsSync(npmrcPath) ? fs.readFileSync(npmrcPath, "utf8") : "";
  const lines = existing.split(/\r?\n/).filter((line) => {
    return !(
      line.startsWith("@dwp-govuk:registry=") ||
      line.startsWith(`${tokenConfigKey}=`)
    );
  });

  const nextLines = [
    ...lines.filter((line, index, array) => !(line === "" && array[index - 1] === "")),
    "@dwp-govuk:registry=" + registry,
    `${tokenConfigKey}=\${NPM_TOKEN}`
  ];

  return `${nextLines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

function updatePackageJson(pkg) {
  const changes = [];
  const previousName = pkg.name;

  pkg.name = pkg.name && pkg.name !== "govuk-prototype-kit" ? pkg.name : path.basename(cwd);
  if (pkg.name !== previousName) {
    changes.push(`set root package name to "${pkg.name}"`);
  }

  pkg.scripts ||= {};
  if (pkg.scripts["heroku-prebuild"] !== prebuildScript) {
    pkg.scripts["heroku-prebuild"] = prebuildScript;
    changes.push("set Heroku prebuild npm registry config");
  }

  pkg.dependencies ||= {};
  const current = pkg.dependencies["govuk-prototype-kit"];
  if (current !== dependencyValue) {
    pkg.dependencies["govuk-prototype-kit"] = dependencyValue;
    changes.push(`set govuk-prototype-kit dependency to ${dependencyValue}`);
  }

  return changes;
}

function updatePackageLock(lock, rootName) {
  const changes = [];
  const root = lock.packages?.[""];

  if (lock.name === "govuk-prototype-kit" || lock.name !== rootName) {
    lock.name = rootName;
    changes.push("set package-lock root name");
  }

  if (root) {
    if (root.name === "govuk-prototype-kit" || root.name !== rootName) {
      root.name = rootName;
      changes.push("set package-lock packages root name");
    }

    root.dependencies ||= {};
    if (root.dependencies["govuk-prototype-kit"] !== dependencyValue) {
      root.dependencies["govuk-prototype-kit"] = dependencyValue;
      changes.push("set package-lock root dependency");
    }
  }

  return changes;
}

const packageJsonPath = path.join(cwd, "package.json");
if (!fileExists("package.json")) {
  console.error("No package.json found. Run this from the root of a prototype repository.");
  process.exit(1);
}

const pkg = readJson(packageJsonPath);
const changes = updatePackageJson(pkg);

let lock = null;
let lockChanges = [];
if (fileExists("package-lock.json")) {
  lock = readJson(path.join(cwd, "package-lock.json"));
  lockChanges = updatePackageLock(lock, pkg.name);
} else {
  lockChanges.push("package-lock.json not found; run npm install after writing changes");
}

const nextNpmrc = updateNpmrc();
const npmrcPath = path.join(cwd, ".npmrc");
const currentNpmrc = fs.existsSync(npmrcPath) ? fs.readFileSync(npmrcPath, "utf8") : "";
const npmrcChanged = currentNpmrc !== nextNpmrc;

const allChanges = [
  ...changes.map((change) => `package.json: ${change}`),
  ...lockChanges.map((change) => `package-lock.json: ${change}`),
  ...(npmrcChanged ? [".npmrc: set @dwp-govuk registry and token placeholder"] : [])
];

if (allChanges.length === 0) {
  console.log("No changes needed.");
  process.exit(0);
}

console.log(write ? "Applying changes:" : "Dry run. Would apply:");
for (const change of allChanges) {
  console.log(`- ${change}`);
}

if (!write) {
  console.log("\nNo files changed. Re-run with --write to update this repository.");
  process.exit(0);
}

writeJson(packageJsonPath, pkg);
if (lock) {
  writeJson(path.join(cwd, "package-lock.json"), lock);
}
fs.writeFileSync(npmrcPath, nextNpmrc);

console.log("\nDone. Suggested checks:");
console.log("- npm install --package-lock-only");
console.log("- npm config get @dwp-govuk:registry --location=project");
console.log("- git diff");