import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'property-listings',
  styleUrl: 'property-listings.scss'
})
export class PropertyListings {
  @Prop() posts: any;
  @Prop() activePostId: any = null;
  @Prop() view: string;

  handleMarker(_e, markerObj)
  {
    this.activePostId = markerObj.ID;
  }

  handleCard(post)
  {
    this.activePostId = post.ID;
  }

  render() 
  {
    return (
      <Host>
        {this.view === 'map' && (
          <google-map 
            posts={this.posts}
            handleMarker={this.handleMarker.bind(this)}
            activePostId={this.activePostId}>
          </google-map>
        )}
        <card-list
          class={this.view}
          handleCard={this.handleCard.bind(this)}
          activePostId={this.activePostId}
          posts={this.posts}>
        </card-list>
      </Host>
    );
  }
}