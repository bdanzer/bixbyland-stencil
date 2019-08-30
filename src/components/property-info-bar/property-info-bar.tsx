import {Component, h, Prop, Watch} from '@stencil/core';
import {Store} from "@stencil/redux";
import {formatLargeNumber} from '../../utils/utils';
import axios from 'axios';
import * as R from 'ramda';

@Component({
  tag: 'property-info-bar',
  styleUrl: 'property-info-bar.scss'
})
export class PropertyInfoBar {
  @Prop({context: "store"}) store: Store;
  @Prop() posts: any = [];
  @Prop({mutable: true}) baseUrl;
  @Prop({mutable: true}) filters = {
    "category": ""
  };
  @Prop({mutable: true}) category;

  @Watch('filters')
  watchPosts(_newValue, _oldValue) {
    this.category = _newValue.category;
    axios.get(this.baseUrl + '/wp-json/bixby/v1/properties/category-info', {
      params: {
        'category': _newValue.category
      }
    }).then(res => {
      this.posts = res.data;
    });
  }

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: {baseUrl, filters}
      } = state;
      return {
        baseUrl, filters
      };
    });
  }

  countPosts() {
    return this.posts.length
  }

  getSQFT() {
    let sqFootSum = R.sum(R.map(postData => postData.sq_ft, this.posts));
    return formatLargeNumber(sqFootSum);
  }

  getPrice() {
    let priceSum = R.sum(R.map(postData => postData.price, this.posts));
    return formatLargeNumber(priceSum);
  }

  render() {
    return (
      <div class="property-info-bar">
        <div class="property-info-bar-wrap">
          <span class="property-count-wrap">
            <div class="property-info-header">{this.category} Properties</div>
            <span class="property-info-subheader">Completed or Underway</span>
          </span>

          {this.countPosts() != 0 ?
          <div class="property-info-stats">
            <span class="number-wrap">{this.countPosts()}</span>
            Properties
          </div> : ''}

          {this.getSQFT() != 0 ?
          <div class="property-info-stats">
            <span class="number-wrap">{this.getSQFT()}</span>
            Square Feet
          </div> : ''}

          {this.getPrice() != 0 ?
            <div class="property-info-stats">
              <span class="number-wrap">{this.getPrice()}</span>
              Value
            </div> : ''}
        </div>
      </div>
    );
  }
}
