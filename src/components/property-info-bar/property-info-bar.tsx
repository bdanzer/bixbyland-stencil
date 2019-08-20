import { Component, h, Prop, Watch } from '@stencil/core';
import { Store } from "@stencil/redux";
import { formatLargeNumber } from '../../utils/utils';

@Component({
  tag: 'property-info-bar',
  styleUrl: 'property-info-bar.scss'
})
export class PropertyInfoBar {
  @Prop({ context: "store" }) store: Store;
  @Prop() posts: any;

  async count(number) 
  {
    var i = 1;
    while(number + 1 !== i) {
      console.log(i++);
    }
  }

  @Watch('posts')
  watchPosts(_newValue, _oldValue) 
  {
    console.log(...arguments);
  } 

  componentDidLoad() 
  {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { posts }
      } = state;
      return {
        posts
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
    const func = (obj) => (obj.meta.sq_ft[0]) ? parseInt(obj.meta.sq_ft[0]) : 0
    return formatLargeNumber(func, this.posts);
  }

  getPrice() 
  {
    // R.objOf('propertyInfo')
    // var sqFt = 0;
    const func = (obj) => (obj.meta.price[0]) ? parseInt(obj.meta.price[0]) : 0;
    return formatLargeNumber(func, this.posts);
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
