import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'property-filters',
  styleUrl: 'property-filters.scss'
})
export class PropertyFilters {
  @Prop() search;

  componentDidLoad() {}

  render() {
    return (
      <div class="property-filters">
        <span class="property-count-wrap">
          <div class="result-header">Property Results</div>
          <span class="property-count">25</span> properties match your results
        </span>
        <input onInput={(e) => console.log((e.target as HTMLInputElement).value)} type="text" value="" placeholder="Search properties by address or location" class="search"/>
        <select name="cars" class="dropdown" onChange={(e) => console.log((e.target as HTMLInputElement).value)}>
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <no-ui-slider-wrapper>
          <slot name="title">Square Footage</slot>
        </no-ui-slider-wrapper>
        <select name="cars" class="dropdown">
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <button class="reset-button">Reset Filters</button>
      </div>
    );
  }
}
