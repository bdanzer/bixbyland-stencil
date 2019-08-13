import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss'
})
export class CardList {
  @Prop() posts: any;
  @Prop() activePostId: any = false;
  @Prop() handleCard: Function;

  render() 
  {
    return (
      this.posts && <Host>
        {this.posts.map(post => {
          return (
            <property-card
              onClick={() => this.handleCard(post)}
              activePostId={this.activePostId}
              postData={post}>
            </property-card>
          );
        })}
      </Host>
    );
  }
}
