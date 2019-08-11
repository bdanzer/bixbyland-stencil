import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-62e21f24.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["filter-header-bar",[[0,"filter-header-bar",{"filter":[16],"view":[16],"categories":[8],"views":[8],"activeFilter":[1,"active-filter"],"activeView":[1,"active-view"]}]]],["property-card",[[0,"property-card",{"postData":[8,"post-data"]}]]],["card-list",[[0,"card-list",{"posts":[8]}]]],["property-listings",[[0,"property-listings",{"posts":[8]}]]],["portfolio-app",[[0,"portfolio-app",{"googleApiKey":[1,"google-api-key"],"urlToFetch":[1,"url-to-fetch"],"filter":[32],"view":[32],"posts":[32]}]]]], options);
});
