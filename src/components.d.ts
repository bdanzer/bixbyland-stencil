/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CardList {
    'activePostId': any;
    'handleCard': Function;
    'posts': any;
  }
  interface FilterHeaderBar {
    'activeFilter': string;
    'activeView': string;
    'categories': any;
    'filter': Function;
    'view': Function;
    'views': any;
  }
  interface GoogleMap {
    'activePostId': any;
    'handleMarker': Function;
    'posts': any;
  }
  interface PortfolioApp {
    'googleApiKey': string;
    'urlToFetch': string;
  }
  interface PropertyCard {
    'activePostId': any;
    'postData': any;
  }
  interface PropertyFilters {}
  interface PropertyListings {
    'activePostId': any;
    'posts': any;
  }
}

declare global {


  interface HTMLCardListElement extends Components.CardList, HTMLStencilElement {}
  var HTMLCardListElement: {
    prototype: HTMLCardListElement;
    new (): HTMLCardListElement;
  };

  interface HTMLFilterHeaderBarElement extends Components.FilterHeaderBar, HTMLStencilElement {}
  var HTMLFilterHeaderBarElement: {
    prototype: HTMLFilterHeaderBarElement;
    new (): HTMLFilterHeaderBarElement;
  };

  interface HTMLGoogleMapElement extends Components.GoogleMap, HTMLStencilElement {}
  var HTMLGoogleMapElement: {
    prototype: HTMLGoogleMapElement;
    new (): HTMLGoogleMapElement;
  };

  interface HTMLPortfolioAppElement extends Components.PortfolioApp, HTMLStencilElement {}
  var HTMLPortfolioAppElement: {
    prototype: HTMLPortfolioAppElement;
    new (): HTMLPortfolioAppElement;
  };

  interface HTMLPropertyCardElement extends Components.PropertyCard, HTMLStencilElement {}
  var HTMLPropertyCardElement: {
    prototype: HTMLPropertyCardElement;
    new (): HTMLPropertyCardElement;
  };

  interface HTMLPropertyFiltersElement extends Components.PropertyFilters, HTMLStencilElement {}
  var HTMLPropertyFiltersElement: {
    prototype: HTMLPropertyFiltersElement;
    new (): HTMLPropertyFiltersElement;
  };

  interface HTMLPropertyListingsElement extends Components.PropertyListings, HTMLStencilElement {}
  var HTMLPropertyListingsElement: {
    prototype: HTMLPropertyListingsElement;
    new (): HTMLPropertyListingsElement;
  };
  interface HTMLElementTagNameMap {
    'card-list': HTMLCardListElement;
    'filter-header-bar': HTMLFilterHeaderBarElement;
    'google-map': HTMLGoogleMapElement;
    'portfolio-app': HTMLPortfolioAppElement;
    'property-card': HTMLPropertyCardElement;
    'property-filters': HTMLPropertyFiltersElement;
    'property-listings': HTMLPropertyListingsElement;
  }
}

declare namespace LocalJSX {
  interface CardList extends JSXBase.HTMLAttributes<HTMLCardListElement> {
    'activePostId'?: any;
    'handleCard'?: Function;
    'posts'?: any;
  }
  interface FilterHeaderBar extends JSXBase.HTMLAttributes<HTMLFilterHeaderBarElement> {
    'activeFilter'?: string;
    'activeView'?: string;
    'categories'?: any;
    'filter'?: Function;
    'view'?: Function;
    'views'?: any;
  }
  interface GoogleMap extends JSXBase.HTMLAttributes<HTMLGoogleMapElement> {
    'activePostId'?: any;
    'handleMarker'?: Function;
    'posts'?: any;
  }
  interface PortfolioApp extends JSXBase.HTMLAttributes<HTMLPortfolioAppElement> {
    'googleApiKey'?: string;
    'urlToFetch'?: string;
  }
  interface PropertyCard extends JSXBase.HTMLAttributes<HTMLPropertyCardElement> {
    'activePostId'?: any;
    'postData'?: any;
  }
  interface PropertyFilters extends JSXBase.HTMLAttributes<HTMLPropertyFiltersElement> {}
  interface PropertyListings extends JSXBase.HTMLAttributes<HTMLPropertyListingsElement> {
    'activePostId'?: any;
    'posts'?: any;
  }

  interface IntrinsicElements {
    'card-list': CardList;
    'filter-header-bar': FilterHeaderBar;
    'google-map': GoogleMap;
    'portfolio-app': PortfolioApp;
    'property-card': PropertyCard;
    'property-filters': PropertyFilters;
    'property-listings': PropertyListings;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


