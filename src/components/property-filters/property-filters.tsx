import { Component, h, Prop, State } from '@stencil/core';
import { Store, Action } from "@stencil/redux";
import { changeFilter, loadPosts } from "../../actions/data";
import * as R from "ramda";
import axios from "axios";

@Component({
  tag: 'property-filters',
  styleUrl: 'property-filters.scss'
})
export class PropertyFilters {
  @Prop({ context: "store" }) store: Store;
  @Prop() search;
  @Prop() filters;
  @Prop() posts: any = [];

  @State() modal: boolean = false;
  @State() regions: any = [];

  changeFilter: Action;
  loadPosts: Action;

  componentDidLoad() 
  {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { filters, posts }
      } = state;
      return {
        filters, posts
      };
    });

    this.store.mapDispatchToProps(this, {
      changeFilter,
      loadPosts
    });

    this.getRegions()
  }

  async getRegions() 
  {
    let response = await axios.get('https://bixbyland.coreylowe.io/wp-json/bixby/v1/properties/regions');
    return this.regions = response.data;
  }

  handleSearch(e) 
  {
    let value = (e.target as HTMLInputElement).value;
    this.changeFilter({"search": value});

    // if (value.length >= 3) {
      this.loadPosts();
    // }
  }

  handleRegion(e) 
  {
    this.changeFilter({"region": (e.target as HTMLInputElement).value})
    this.loadPosts();
  }

  handleSqFeet(_values, _handle, _unencoded, _tap, _positions) 
  {
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
    return [
      <div class={`property-filters${(this.modal) ? ' modal-state' : ''}`}>
        <span class="property-count-wrap">
          <div class="result-header">Property Results</div>
          <span class="property-count">{this.posts.length}</span> properties match your results
        </span>
        {(this.modal) && (
          <span class="filter-title">Filter</span>
        )} 
        <input onChange={(e) => this.handleSearch(e)} type="text" value={(this.filters && this.filters.search) ? this.filters.search : ''} placeholder="Search properties by address" class="search"/>
        <select name="regions" class="dropdown" onChange={(e) => this.handleRegion(e)}>
          <option selected={(this.filters.region) ? false : true} disabled>Regions</option>
          {this.regions.map(region => <option value={region.meta_value}>{region.meta_value}</option>)}
        </select>
        <no-ui-slider-wrapper
          start={(this.filters && this.filters.sqFootage) ? this.filters.sqFootage : [0, 100]}
          callback={this.handleSqFeet.bind(this)}>
            <slot name="title">Square Footage</slot>
        </no-ui-slider-wrapper>
        <select name="sortby" class="dropdown" onChange={(e) => this.handleSortBy(e)}>
          <option selected disabled>SortBy</option>
        </select>
        <button onClick={() => {(this.modal) ? this.modal = !this.modal : this.handleResetFilters()}} class="reset-button">{(this.modal) ? 'Apply' : 'Reset Filters'}</button>
        <div class="modal-close-button" onClick={() => {this.modal = !this.modal}}>X</div>
      </div>,
      <div class="modal-button" onClick={() => this.modal = !this.modal}>Filter Results ({this.posts.length})</div>
    ];
  }
}
