import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss'
})
export class CardList {
  @Prop() posts: any;

  render() 
  {
    return (
      this.posts && <Host>
        {this.posts.map(post => {
          console.log(post, 'cardList');
          return (
            <property-card postData={post}></property-card>
          );
        })}
      </Host>
    );
  }
}
