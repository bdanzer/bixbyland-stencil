import { p as patchBrowser, b as bootstrapLazy } from './core-bb3fdb2f.js';

patchBrowser().then(options => {
  return bootstrapLazy([["portfolio-app",[[0,"portfolio-app",{"test":[1]}]]]], options);
});
