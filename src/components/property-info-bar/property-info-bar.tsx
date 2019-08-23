import { Component, h, Prop, Watch } from '@stencil/core';
import { Store } from "@stencil/redux";
import { formatLargeNumber } from '../../utils/utils';
import axios from 'axios';
import * as R from 'ramda';

@Component({
  tag: 'property-info-bar',
  styleUrl: 'property-info-bar.scss'
})
export class PropertyInfoBar {
  @Prop({ context: "store" }) store: Store;
  @Prop() posts: any = [];
  @Prop({mutable: true}) filters = {
    "category": ""
  };

  async count(number) 
  {
    var i = 1;
    while(number + 1 !== i) {
      console.log(i++);
    }
  }

  @Watch('filters')
  watchPosts(_newValue, _oldValue) 
  {
    axios.get('http://bixbyland.test/wp-json/bixby/v1/properties/category-info', {
      params: {
        'category': _newValue.category
      }
    }).then(res => {
      this.posts = res.data;
      
    });
  }

  componentDidLoad() 
  {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { filters }
      } = state;
      return {
        filters
      };
    });
  }

  countPosts() 
  {
    return this.posts.length
  }

  //TODO: want to turn this into one object will all the data at once
  createInfoObj() 
  {
    // R.objOf('propertyInfo')
    // var sqFt = 0;
    let sqFootSum = R.sum(R.map(postData => postData.sq_ft, this.posts));
    return formatLargeNumber(sqFootSum);
  }

  getPrice() 
  {
    // R.objOf('propertyInfo')
    // var sqFt = 0;
  
    let priceSum = R.sum(R.map(postData => postData.price ,this.posts));
    return formatLargeNumber(priceSum);
  }

  render() 
  {
    return (
      <div class="property-info-bar">
        <div class="property-info-bar-wrap">
          <span class="property-count-wrap">
            <div class="property-info-header">All Properties</div>
            <span class="property-info-subheader">Completed or Underway</span>
          </span>

          <div class="property-info-stats">
            <span class="number-wrap">{this.countPosts()}</span>
            Properties
          </div>

          <div class="property-info-stats">
            <span class="number-wrap">{this.createInfoObj()}</span>
            Square Feet
          </div>

          <div class="property-info-stats">
            <span class="number-wrap">{this.getPrice()}</span>
            Value
          </div>
        </div>
      </div>
    );
  }
}
