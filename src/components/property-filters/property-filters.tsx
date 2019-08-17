import { Component, h, Prop } from '@stencil/core';

import { Store, Action } from "@stencil/redux";
import { changeFilter, loadPosts } from "../../actions/data";
import * as R from "ramda";

@Component({
  tag: 'property-filters',
  styleUrl: 'property-filters.scss'
})
export class PropertyFilters {
  @Prop({ context: "store" }) store: Store;
  @Prop() search;

  @Prop() filters;

  changeFilter: Action;
  loadPosts: Action;

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

    this.store.mapDispatchToProps(this, {
      changeFilter,
      loadPosts
    });
  }

  getRegions() 
  {

  }

  handleSearch(e) 
  {
    let value = (e.target as HTMLInputElement).value;
    this.changeFilter({"search": value});

    if (value.length >= 3) {
      this.loadPosts();
    }
  }

  handleRegion(e) 
  {
    console.log((e.target as HTMLInputElement).value)
  }

  handleSqFeet(_values, _handle, _unencoded, _tap, _positions) 
  {
    console.log(...arguments);
    let roundNumbers = _unencoded.map(number => Math.round(number));

    this.changeFilter({"sqFootage": roundNumbers});
    this.loadPosts();
  }

  handleSortBy(_e) 
  {

  }

  handleResetFilters() 
  {
    const isEmpty = (x) => R.isEmpty(x) === true
    let result = R.reject(isEmpty, this.filters);
  
    if (!R.isEmpty(result)) {
      this.changeFilter({});
      this.loadPosts();
    }
  }

  render() {
    console.log(this.filters, 'filter');
    return (
      <div class="property-filters">
        <span class="property-count-wrap">
          <div class="result-header">Property Results</div>
          <span class="property-count">25</span> properties match your results
        </span>
        <input onInput={(e) => this.handleSearch(e)} type="text" value="" placeholder="Search properties by address or location" class="search"/>
        <select name="cars" class="dropdown" onChange={(e) => this.handleRegion(e)}>
          <option disabled>Regions</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <no-ui-slider-wrapper
          callback={this.handleSqFeet.bind(this)}>
          <slot name="title">Square Footage</slot>
        </no-ui-slider-wrapper>
        <select name="cars" class="dropdown" onChange={(e) => this.handleSortBy(e)}>
          <option disabled>SortBy</option>
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <button onClick={() => {this.handleResetFilters()}} class="reset-button">Reset Filters</button>
      </div>
    );
  }
}
