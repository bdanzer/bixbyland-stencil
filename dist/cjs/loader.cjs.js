'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-777f56e4.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["card-list_9.cjs",[[0,"portfolio-app",{"googleApiKey":[1,"google-api-key"],"baseUrl":[1025,"base-url"],"filters":[32],"views":[32],"posts":[32],"changeCategory":[64]}],[0,"property-listings",{"posts":[8],"activePostId":[8,"active-post-id"],"view":[1]}],[4,"property-filters",{"search":[8],"filters":[8],"posts":[8],"baseUrl":[1025,"base-url"],"modal":[32],"regions":[32]}],[0,"filter-header-bar",{"filter":[16],"view":[16],"views":[8],"activeFilter":[1,"active-filter"],"activeView":[1,"active-view"]}],[0,"property-info-bar",{"posts":[8],"baseUrl":[1032,"base-url"],"filters":[1040]}],[0,"card-list",{"posts":[8],"activePostId":[8,"active-post-id"],"handleCard":[16],"items":[32],"loading":[32],"error":[32]}],[0,"google-map",{"posts":[8],"handleMarker":[16],"activePostId":[8,"active-post-id"],"mapObject":[32],"icons":[32]}],[4,"no-ui-slider-wrapper",{"title":[1],"slider":[16],"el":[16],"callback":[16],"start":[8]}],[0,"property-card",{"postData":[8,"post-data"],"activePostId":[8,"active-post-id"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
