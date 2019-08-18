# property-listings



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default     |
| -------------- | ---------------- | ----------- | -------- | ----------- |
| `activePostId` | `active-post-id` |             | `any`    | `null`      |
| `posts`        | `posts`          |             | `any`    | `undefined` |
| `view`         | `view`           |             | `string` | `undefined` |


## Dependencies

### Used by

 - [portfolio-app](../portfolio-app)

### Depends on

- [google-map](../google-map)
- [card-list](../card-list)

### Graph
```mermaid
graph TD;
  property-listings --> google-map
  property-listings --> card-list
  card-list --> property-card
  portfolio-app --> property-listings
  style property-listings fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
