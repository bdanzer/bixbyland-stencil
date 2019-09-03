import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Store, Action } from "@stencil/redux";
import { changeFilter, loadPosts, sortBy } from "../../actions/data";
import * as R from "ramda";
import axios from "axios";
import { sorter } from '../../utils/utils';
import Endpoint from '../../classes/endpoint';

@Component({
  tag: 'property-filters',
  styleUrl: 'property-filters.scss'
})
export class PropertyFilters {
  @Prop({ context: "store" }) store: Store;
  @Prop() search;
  @Prop() filters;

  @Prop() posts: any = [];
  @Prop({mutable: true}) baseUrl: '';

  @State() modal: boolean = false;
  @State() regions: any = [];

  @State() start: any;
  @State() min: any;
  @State() max: any;

  changeFilter: Action;
  loadPosts: Action;
  sortBy: Action;

  sortByInfo = {
    "alpha_asc": "Alphabetical ASC",
    "alpha_dsc": "Alphabetical DSC",
    "sqft_asc" : "Square Feet ASC",
    "sqft_dsc" : "Square Feet DSC"
  };

  @Watch('filters')
  watchFilters(newValue, oldValue) 
  {
    let newCat = newValue.category;
    let oldCat = (oldValue) ? oldValue.category : null;
    
    if (newCat != oldCat) {
      this.getMinMaxSqFt(newCat);
    }
  }

  componentWillLoad() 
  {
    this.getMinMaxSqFt()
  }

  componentDidLoad()
  {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { filters, posts, baseUrl }
      } = state;
      return {
        filters, posts, baseUrl
      };
    });

    this.store.mapDispatchToProps(this, {
      changeFilter,
      loadPosts,
      sortBy
    });

    this.getRegions()
  }

  async getRegions()
  {
    let response = await axios.get(Endpoint.baseUrl + '/wp-json/bixby/v1/properties/regions');
    return this.regions = response.data;
  }

  /**
   * TODO: Could clean this up to be cleaner with how R is used and maybe move to application state
   */
  async getMinMaxSqFt(category = 'all') {
    let response = await axios.get(Endpoint.baseUrl + '/wp-json/bixby/v1/properties/category-info', {
      params: {
        category: category
      }
    });

    let newData = R.map((data) => data.sq_ft, response.data);

    let sortedArray = R.sortBy(
      (data) => parseInt(data),
      newData
    );

    this.min = sortedArray[0];
    this.max = sortedArray[sortedArray.length - 1];

    this.start = [this.min, this.max]

    this.changeFilter({"sqFootage": [sortedArray[0], sortedArray[sortedArray.length - 1]]});
  }

  handleSearch(e)
  {
    let value = (e.target as HTMLInputElement).value;

    this.changeFilter({"search": value});
    this.loadPosts();
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

  getSortBy()
  {
    let options = [];
    for (let key in this.sortByInfo) {
      options.push((<option value={key}>{this.sortByInfo[key]}</option>));
    }

    return options;
  }

  handleSortBy(e)
  {
    let value = (e.target as HTMLInputElement).value;
    this.sortBy({
      'posts': sorter(value, this.posts),
      'sortBy': value
    });
  }

  async handleResetFilters()
  {
    const isEmpty = (x) => R.isEmpty(x) === true
    let result = R.reject(isEmpty, this.filters);

    if (!R.isEmpty(result)) {
      await this.changeFilter({});
      await this.getMinMaxSqFt();
      await this.loadPosts();
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
          <option selected={(this.filters && this.filters.region) ? false : true} disabled>Regions</option>
          {this.regions.map(region => <option value={region.meta_value}>{region.meta_value}</option>)}
        </select>
        {this.start && <no-ui-slider-wrapper
          start={this.start}
          min={this.min}
          max={this.max}
          callback={this.handleSqFeet.bind(this)}>
            <slot name="title">Square Footage</slot>
        </no-ui-slider-wrapper>}
        <select name="sortby" class="dropdown" onChange={(e) => this.handleSortBy(e)}>
          <option selected={(this.filters && this.filters.sortBy) ? false : true} disabled>SortBy</option>
          {this.getSortBy()}
        </select>
        <button onClick={() => {(this.modal) ? this.modal = !this.modal : this.handleResetFilters()}} class="reset-button">{(this.modal) ? 'Apply' : 'Reset Filters'}</button>
        <div class="modal-close-button" onClick={() => {this.modal = !this.modal}}>X</div>
      </div>,
      <div class="modal-button" onClick={() => this.modal = !this.modal}>Filter Results ({this.posts.length})</div>
    ];
  }
}
