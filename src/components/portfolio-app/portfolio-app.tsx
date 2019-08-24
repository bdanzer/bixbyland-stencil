import { Component, h, Host, State, Prop, Method, Watch } from '@stencil/core';

import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../../store/index";
import { loadPosts, changeFilter, changeView, setBase } from "../../actions/data";
import * as R from 'ramda';
import * as queryString from 'query-string';

@Component({
  tag: 'portfolio-app',
  styleUrl: 'portfolio-app.scss'
})
export class PortfolioApp {
  @Prop({ context: "store" }) store: Store;

  @Prop() googleApiKey: string;
  @Prop({mutable: true}) baseUrl: string;
  
  @State() filters: any = 'all';
  @State() views: any = 'map';
  @State() posts: any;

  acceptedCats: any = ['all', 'industrial', 'office'];

  loadPosts: Action;
  changeFilter: Action;
  changeView: Action;
  setBase: Action;

  componentWillLoad() {
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { posts, filters, views }
      } = state;
      return {
        posts,
        filters,
        views
      };
    });

    this.store.mapDispatchToProps(this, {
      loadPosts,
      changeFilter,
      changeView,
      setBase
    });

    this.setBase(this.baseUrl);

    this.checkUrl();
  }

  @Watch('baseUrl')
  watchBaseUrl(_new, _old) {
    if (_new !== _old) {
      this.setBase(_new);
    }
  }

  async checkUrl() {
    let obj = queryString.parseUrl(window.location.href);
    let query = obj.query;
    
    if (query && query.category) {
      await this.changeCategory(query.category);
    }
  }

  componentDidLoad() 
  {
    this.loadPosts();
  }

  private async handleFilter(filter) 
  {
    await this.changeCategory(filter);
    this.loadPosts();
  }

  @Method()
  async changeCategory(filter) {
    if (R.includes(filter, this.acceptedCats)) {
      this.changeFilter({"category": filter});
      this.loadPosts();
    }
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
          activeFilter={this.filters.category}
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