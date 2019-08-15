import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'property-listings',
  styleUrl: 'property-listings.scss'
})
export class PropertyListings {
  @Prop() posts: any;
  @Prop() activePostId: any = null;

  handleMarker(_e, markerObj)
  {
    this.activePostId = markerObj.ID;
  }

  handleCard(post)
  {
    console.log('card clicked', post.ID);
    this.activePostId = post.ID;
  }

  render() 
  {
    return (
      <Host>
        <google-map 
          posts={this.posts}
          handleMarker={this.handleMarker.bind(this)}
          activePostId={this.activePostId}>
        </google-map>
        <card-list
          handleCard={this.handleCard.bind(this)}
          activePostId={this.activePostId}
          posts={this.posts}>
        </card-list>
      </Host>
    );
  }
}