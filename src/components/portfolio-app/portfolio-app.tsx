import { Component, h, Host, State, Prop } from '@stencil/core';

import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../../store/index";
import { loadPosts, changeFilter, changeView } from "../../actions/data";

@Component({
  tag: 'portfolio-app',
  styleUrl: 'portfolio-app.scss'
})
export class PortfolioApp {
  @Prop({ context: "store" }) store: Store;

  @Prop() googleApiKey: string;
  @Prop() urlToFetch: string = 'http://bixbyland.test/wp-json/bixby/v1/properties';
  
  @State() filter: any = 'all';
  @State() views: any = 'map';
  @State() posts: any;

  loadPosts: Action;
  changeFilter: Action;
  changeView: Action;

  componentWillLoad() {
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { posts, filter, views }
      } = state;
      return {
        posts,
        filter,
        views
      };
    });

    this.store.mapDispatchToProps(this, {
      loadPosts,
      changeFilter,
      changeView
    });
  }

  componentDidLoad() 
  {
    this.loadPosts();
  }

  private handleFilter(filter) 
  {
    this.changeFilter({"category": filter});
    this.loadPosts();
  }

  private handleView(view) 
  {
    this.changeView(view);
  }

  render() 
  {
    return (
      <Host class="portfolio-app">
        <filter-header-bar
          filter={this.handleFilter.bind(this)}
          view={this.handleView.bind(this)}>
        </filter-header-bar>
        <property-info-bar></property-info-bar>
        <property-filters></property-filters>
        <property-listings
          class={this.views}
          view={this.views}
          posts={this.posts}>
        </property-listings>
      </Host>
    );
  }
}