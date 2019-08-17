import { Component, h, Prop, Watch } from '@stencil/core';
import { Store } from "@stencil/redux";
import * as R from 'ramda';

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
  watchPosts(_newValue, _oldValue) {
    console.log(...arguments);
  } 

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { posts }
      } = state;
      return {
        posts
      };
    });
  }

  countPosts() {
    return this.posts.length
  }

  createInfoObj() {
    // R.objOf('propertyInfo')
    // var sqFt = 0;
    const func = (obj) => (obj.meta.sq_ft[0]) ? parseInt(obj.meta.sq_ft[0]) : 0
    
    console.log(R.map(func, this.posts));

    let number = R.sum(R.map(func, this.posts));
    let numberString = number.toString();
    let numberLength = number.toString().length;

    switch (numberLength) {
      //35000
      case 5:
      case 6:
        return `${this.getSubString(numberString, 3)}K`;
        // return numberString.replace('000', 'K');
      //3300000
      case 7:
      case 8:
      case 9:
        // str.substring(0, str.length - 1);
        return `${this.getSubString(numberString, 6)}M`;
    }

    return numberString;
  }

  getSubString(numberString, removeNumber) 
  {
    return numberString.substring(0, numberString.length - removeNumber)
  }

  getPrice() 
  {
    // R.objOf('propertyInfo')
    // var sqFt = 0;
    const func = (obj) => (obj.meta.price[0]) ? parseInt(obj.meta.price[0]) : 0
    
    console.log(R.map(func, this.posts));

    let number = R.sum(R.map(func, this.posts));
    let numberString = number.toString();
    let numberLength = number.toString().length;

    switch (numberLength) {
      //35000
      case 5:
      case 6:
        return `${this.getSubString(numberString, 3)}K`;
        // return numberString.replace('000', 'K');
      //3300000
      case 7:
      case 8:
      case 9:
        // str.substring(0, str.length - 1);
        return `${this.getSubString(numberString, 6)}M`;
      
      case 10:
      case 11:
      case 12:
        return `${this.getSubString(numberString, 9)}B`;
    }

    return numberString;
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
