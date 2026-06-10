#!/usr/bin/env node

import fs from "node:fs";

const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const GROUP_ID = "111210875";
const GITLAB_API = "https://gitlab.com/api/v4";

if (!GITLAB_TOKEN) {
  console.error("Missing GITLAB_TOKEN environment variable");
  process.exit(1);
}

const FILE_PATH = "migrate-dwp-govuk-package.mjs";
const BRANCH_NAME = "chore/add-migration-script";
const MR_TITLE = "Add DWP migration script";
const MR_DESC = "Adds migrate-dwp-govuk-package.mjs to repo root.";

const FILE_CONTENT = `#!/usr/bin/env node

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
const registry = \`https://gitlab.com/api/v4/projects/\${projectId}/packages/npm/\`;
const tokenConfigKey = \`//gitlab.com/api/v4/projects/\${projectId}/packages/npm/:_authToken\`;
const dependencyValue = \`npm:\${packageName}@\${packageVersion}\`;
const prebuildScript =
  \`npm config set @dwp-govuk:registry \${registry} --location=project \` +
  \`&& npm config set \${tokenConfigKey} $NPM_TOKEN --location=project\`;

if (help) {
  console.log("Usage: node migrate-dwp-govuk-package.mjs [--write]");
  process.exit(0);
}

// (rest of script unchanged)
`;

async function gitlabFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "PRIVATE-TOKEN": GITLAB_TOKEN,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }

  return res.json();
}

// Get all projects in group (handles pagination)
async function getAllProjects() {
  let page = 1;
  let projects = [];

  while (true) {
    const result = await gitlabFetch(
      `${GITLAB_API}/groups/${GROUP_ID}/projects?per_page=100&page=${page}`
    );

    if (result.length === 0) break;

    projects = projects.concat(result);
    page++;
  }

  return projects;
}

async function createBranch(projectId, defaultBranch) {
  try {
    await gitlabFetch(
      `${GITLAB_API}/projects/${projectId}/repository/branches`,
      {
        method: "POST",
        body: JSON.stringify({
          branch: BRANCH_NAME,
          ref: defaultBranch,
        }),
      }
    );
  } catch (err) {
    if (!err.message.includes("already exists")) {
      throw err;
    }
  }
}

async function createCommit(projectId, defaultBranch) {
  await gitlabFetch(
    `${GITLAB_API}/projects/${projectId}/repository/commits`,
    {
      method: "POST",
      body: JSON.stringify({
        branch: BRANCH_NAME,
        commit_message: "Add migration script",
        actions: [
          {
            action: "create",
            file_path: FILE_PATH,
            content: FILE_CONTENT,
          },
        ],
      }),
    }
  );
}

async function createMR(projectId, defaultBranch) {
  try {
    await gitlabFetch(`${GITLAB_API}/projects/${projectId}/merge_requests`, {
      method: "POST",
      body: JSON.stringify({
        source_branch: BRANCH_NAME,
        target_branch: defaultBranch,
        title: MR_TITLE,
        description: MR_DESC,
      }),
    });
  } catch (err) {
    if (!err.message.includes("already exists")) {
      throw err;
    }
  }
}

async function processProject(project) {
  const projectId = project.id;
  const defaultBranch = project.default_branch;

  console.log(`Processing: ${project.path_with_namespace}`);

  try {
    await createBranch(projectId, defaultBranch);
    await createCommit(projectId, defaultBranch);
    await createMR(projectId, defaultBranch);

    console.log(`✅ MR created`);
  } catch (err) {
    console.error(`❌ Failed: ${err.message}`);
  }
}

async function main() {
  const projects = await getAllProjects();

  console.log(`Found ${projects.length} repositories`);

  for (const project of projects) {
    await processProject(project);
  }
}

main();