import { Component, h, Prop, Host, State } from '@stencil/core';
import { Store, Action } from "@stencil/redux";
import { loadDataBegin } from "../../actions/data";

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

  loadDataBegin: Action;
  
  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { items, loading, error, posts }
      } = state;
      return {
        items,
        loading,
        error,
        posts
      };
    });

    this.store.mapDispatchToProps(this, {
      loadDataBegin
    });
  }

  componentDidLoad() {
    this.loadDataBegin('hi')
  }

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
