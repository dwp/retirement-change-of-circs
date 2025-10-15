'use strict';
const path = require('path');

module.exports = function redirectInternal(options = {}) {
  const { basePrefix = '/', defaultFallback = '/start' } = options;

  return function (req, res, next) {
    res.redirectInternal = function (target, fallback = defaultFallback, status = 303) {
      if (typeof target !== 'string') return res.redirect(status, fallback);

      const clean = target.trim();

      // Only allow internal paths like "/page-name"
      const isAbsolutePath = clean.startsWith('/');
      const isExternal = clean.startsWith('//') || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(clean);

      if (!isAbsolutePath || isExternal) {
        return res.redirect(status, fallback);
      }

      const normalised = path.posix.normalize(clean);

      if (basePrefix && !normalised.startsWith(basePrefix)) {
        return res.redirect(status, fallback);
      }

      return res.redirect(status, normalised);
    };
    next();
  };
};