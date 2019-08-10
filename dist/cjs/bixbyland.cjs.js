'use strict';

const core = require('./core-6f159b15.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["portfolio-app.cjs",[[0,"portfolio-app",{"test":[1]}]]]], options);
});
