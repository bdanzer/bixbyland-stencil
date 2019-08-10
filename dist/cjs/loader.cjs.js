'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6f159b15.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["portfolio-app.cjs",[[0,"portfolio-app",{"test":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
