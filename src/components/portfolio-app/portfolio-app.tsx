import { Component, h, Host, State, Prop } from '@stencil/core';
import axios from 'axios';

import '@stencil/redux';
import { Store } from "@stencil/redux";
import { configureStore } from "../../store/index";

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

  componentWillLoad() {
    this.store.setStore(configureStore({}));
  }

  componentWillUpdate() 
  {
    if (this.filter != this.oldFilter) {
      this.fetchPosts(this.filter);
      this.oldFilter = this.filter;
    }

    if (this.view != this.oldView) {
      this.oldView = this.view;
    }
  }

  componentDidLoad() 
  {
    console.log('loaded');
    this.fetchPosts('all');
  }

  private async fetchPosts(filter) 
  {
    console.log('fetch/filter', filter);

    try {
      let response = await axios.get(`${this.urlToFetch}`, {
        params: {
          'filter': filter
        }
      });

      if (response.status == 200) {
        console.log(response.data);
        this.posts = response.data;
      }
    } catch(e) {
      console.log(e);
    }
  }

  private handleFilter(filter) 
  {
    console.log('handleFilter', filter);
    this.filter = filter;
  }

  private handleView(view) 
  {
    console.log('handleView', view);
    this.view = view;
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
          posts={this.posts}>
        </property-listings>
      </Host>
    );
  }
}