import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'property-listings',
  styleUrl: 'property-listings.scss'
})
export class PropertyListings {
  @Prop() posts: any;

  render() 
  {
    return (
      <Host>
        <google-map>
            <map-marker></map-marker>
        </google-map>
        <card-list posts={this.posts}></card-list>
      </Host>
    );
  }
}