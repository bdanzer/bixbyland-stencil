import { a as patchEsm, b as bootstrapLazy } from './core-790bee4a.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["card-list_9",[[0,"portfolio-app",{"googleApiKey":[1,"google-api-key"],"urlToFetch":[1,"url-to-fetch"],"filter":[32],"views":[32],"posts":[32]}],[0,"property-listings",{"posts":[8],"activePostId":[8,"active-post-id"],"view":[1]}],[4,"property-filters",{"search":[8],"filters":[8]}],[0,"filter-header-bar",{"filter":[16],"view":[16],"categories":[8],"views":[8],"activeFilter":[1,"active-filter"],"activeView":[1,"active-view"]}],[0,"property-info-bar",{"posts":[8]}],[0,"card-list",{"posts":[8],"activePostId":[8,"active-post-id"],"handleCard":[16],"items":[32],"loading":[32],"error":[32]}],[0,"google-map",{"posts":[8],"handleMarker":[16],"activePostId":[8,"active-post-id"],"mapObject":[32]}],[4,"no-ui-slider-wrapper",{"title":[1],"slider":[16],"el":[16],"callback":[16],"start":[8]}],[0,"property-card",{"postData":[8,"post-data"],"activePostId":[8,"active-post-id"]}]]]], options);
  });
};

export { defineCustomElements };
