import { a as patchEsm, b as bootstrapLazy } from './core-bb3fdb2f.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["portfolio-app",[[0,"portfolio-app",{"test":[1]}]]]], options);
  });
};

export { defineCustomElements };
