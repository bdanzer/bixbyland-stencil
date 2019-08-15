import { Component, h, Host, State, Prop } from '@stencil/core';

import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../../store/index";
import { loadPosts, changeFilter } from "../../actions/data";

@Component({
  tag: 'portfolio-app',
  styleUrl: 'portfolio-app.scss'
})
export class PortfolioApp {
  @Prop({ context: "store" }) store: Store;

  @Prop() googleApiKey: string;
  @Prop() urlToFetch: string = 'http://bixbyland.test/wp-json/bixby/v1/properties';
  
  @State() filter: any = 'all';
  @State() view: any = 'map';
  @State() posts: any;

  oldFilter: string = 'all';
  oldView: string = 'map';

  loadPosts: Action;
  changeFilter: Action;

  componentWillLoad() {
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { posts, filter }
      } = state;
      return {
        posts,
        filter
      };
    });

    this.store.mapDispatchToProps(this, {
      loadPosts,
      changeFilter
    });
  }

  componentDidLoad() 
  {
    console.log('loaded');
    this.loadPosts();
  }

  private handleFilter(filter) 
  {
    this.changeFilter(filter);
    this.loadPosts();
  }

  private handleView(view) 
  {
    console.log('handleView', view);
    this.view = view;
  }

  render() 
  {
    console.log('posts', this.posts);
    return (
      <Host class="portfolio-app">
        <filter-header-bar
          filter={this.handleFilter.bind(this)}
          view={this.handleView.bind(this)}>
        </filter-header-bar>
        <property-info-bar></property-info-bar>
        <property-filters></property-filters>
        <property-listings
          posts={this.posts}>
        </property-listings>
      </Host>
    );
  }
}