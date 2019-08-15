import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-365f7bf1.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["property-filters",[[4,"property-filters",{"search":[8]}]]],["filter-header-bar",[[0,"filter-header-bar",{"filter":[16],"view":[16],"categories":[8],"views":[8],"activeFilter":[1,"active-filter"],"activeView":[1,"active-view"]}]]],["card-list",[[0,"card-list",{"posts":[8],"activePostId":[8,"active-post-id"],"handleCard":[16],"items":[32],"loading":[32],"error":[32]}]]],["google-map",[[0,"google-map",{"posts":[8],"handleMarker":[16],"activePostId":[8,"active-post-id"]}]]],["property-listings",[[0,"property-listings",{"posts":[8],"activePostId":[8,"active-post-id"]}]]],["no-ui-slider-wrapper",[[4,"no-ui-slider-wrapper",{"title":[1],"slider":[16],"el":[16]}]]],["property-card",[[0,"property-card",{"postData":[8,"post-data"],"activePostId":[8,"active-post-id"]}]]],["portfolio-app",[[0,"portfolio-app",{"googleApiKey":[1,"google-api-key"],"urlToFetch":[1,"url-to-fetch"],"filter":[32],"view":[32],"posts":[32]}]]]], options);
});
