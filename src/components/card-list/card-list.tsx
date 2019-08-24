import { Component, h, Prop, Host, State } from '@stencil/core';
import { Store } from "@stencil/redux";

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss'
})
export class CardList {
  @Prop({ context: "store" }) store: Store;
  @Prop() posts: any;
  @Prop() activePostId: any = false;
  @Prop() handleCard: Function;

  @State() items: any;
  @State() loading: boolean;
  @State() error: any;
  @State() views: any;
  
  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { items, loading, error, posts, views }
      } = state;
      return {
        items,
        loading,
        error,
        posts,
        views
      };
    });

    this.store.mapDispatchToProps(this, {});
  }

  componentDidLoad() {}

  render() 
  {
    return (
      this.posts && <Host>
        {this.posts.map(post => {
          return (
            <property-card
              view={this.views}
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
