import { a as patchEsm, b as bootstrapLazy } from './core-bb3fdb2f.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["portfolio-app", [[0, "portfolio-app", { "test": [1] }]]]], options);
    });
};
export { defineCustomElements };
