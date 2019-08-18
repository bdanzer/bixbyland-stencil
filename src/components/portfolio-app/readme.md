# portfolio-app



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default                                               |
| -------------- | ---------------- | ----------- | -------- | ----------------------------------------------------- |
| `googleApiKey` | `google-api-key` |             | `string` | `undefined`                                           |
| `urlToFetch`   | `url-to-fetch`   |             | `string` | `'http://bixbyland.test/wp-json/bixby/v1/properties'` |


## Dependencies

### Depends on

- [filter-header-bar](../filter-header-bar)
- [property-info-bar](../property-info-bar)
- [property-filters](../property-filters)
- [property-listings](../property-listings)

### Graph
```mermaid
graph TD;
  portfolio-app --> filter-header-bar
  portfolio-app --> property-info-bar
  portfolio-app --> property-filters
  portfolio-app --> property-listings
  property-filters --> no-ui-slider-wrapper
  property-listings --> google-map
  property-listings --> card-list
  card-list --> property-card
  style portfolio-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
