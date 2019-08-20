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
    'filter': Function;
    'view': Function;
    'views': any;
  }
  interface GoogleMap {
    'activePostId': any;
    'handleMarker': Function;
    'posts': any;
  }
  interface NoUiSliderWrapper {
    'callback': Function;
    'el': Element;
    'slider': Element;
    'start': any;
    'title': string;
  }
  interface PortfolioApp {
    'baseUrl': string;
    'changeCategory': (filter: any) => Promise<void>;
    'googleApiKey': string;
  }
  interface PropertyCard {
    'activePostId': any;
    'postData': any;
  }
  interface PropertyFilters {
    'filters': any;
    'posts': any;
    'search': any;
  }
  interface PropertyInfoBar {
    'posts': any;
  }
  interface PropertyListings {
    'activePostId': any;
    'posts': any;
    'view': string;
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

  interface HTMLNoUiSliderWrapperElement extends Components.NoUiSliderWrapper, HTMLStencilElement {}
  var HTMLNoUiSliderWrapperElement: {
    prototype: HTMLNoUiSliderWrapperElement;
    new (): HTMLNoUiSliderWrapperElement;
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

  interface HTMLPropertyInfoBarElement extends Components.PropertyInfoBar, HTMLStencilElement {}
  var HTMLPropertyInfoBarElement: {
    prototype: HTMLPropertyInfoBarElement;
    new (): HTMLPropertyInfoBarElement;
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
    'no-ui-slider-wrapper': HTMLNoUiSliderWrapperElement;
    'portfolio-app': HTMLPortfolioAppElement;
    'property-card': HTMLPropertyCardElement;
    'property-filters': HTMLPropertyFiltersElement;
    'property-info-bar': HTMLPropertyInfoBarElement;
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
    'filter'?: Function;
    'view'?: Function;
    'views'?: any;
  }
  interface GoogleMap extends JSXBase.HTMLAttributes<HTMLGoogleMapElement> {
    'activePostId'?: any;
    'handleMarker'?: Function;
    'posts'?: any;
  }
  interface NoUiSliderWrapper extends JSXBase.HTMLAttributes<HTMLNoUiSliderWrapperElement> {
    'callback'?: Function;
    'el'?: Element;
    'slider'?: Element;
    'start'?: any;
    'title'?: string;
  }
  interface PortfolioApp extends JSXBase.HTMLAttributes<HTMLPortfolioAppElement> {
    'baseUrl'?: string;
    'googleApiKey'?: string;
  }
  interface PropertyCard extends JSXBase.HTMLAttributes<HTMLPropertyCardElement> {
    'activePostId'?: any;
    'postData'?: any;
  }
  interface PropertyFilters extends JSXBase.HTMLAttributes<HTMLPropertyFiltersElement> {
    'filters'?: any;
    'posts'?: any;
    'search'?: any;
  }
  interface PropertyInfoBar extends JSXBase.HTMLAttributes<HTMLPropertyInfoBarElement> {
    'posts'?: any;
  }
  interface PropertyListings extends JSXBase.HTMLAttributes<HTMLPropertyListingsElement> {
    'activePostId'?: any;
    'posts'?: any;
    'view'?: string;
  }

  interface IntrinsicElements {
    'card-list': CardList;
    'filter-header-bar': FilterHeaderBar;
    'google-map': GoogleMap;
    'no-ui-slider-wrapper': NoUiSliderWrapper;
    'portfolio-app': PortfolioApp;
    'property-card': PropertyCard;
    'property-filters': PropertyFilters;
    'property-info-bar': PropertyInfoBar;
    'property-listings': PropertyListings;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


