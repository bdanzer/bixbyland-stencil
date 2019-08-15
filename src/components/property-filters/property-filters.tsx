import { Component, h } from '@stencil/core';
import noUiSlider from 'nouislider';

@Component({
  tag: 'property-filters',
  styleUrl: 'property-filters.scss'
})
export class PropertyFilters {
  componentDidLoad() {
    var slider = document.getElementById('double-slider');

    // Give the slider dimensions
    slider.style.maxWidth = '300px';
    slider.style.margin = '0 auto 30px';

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        tooltips: true
    });
  }

  render() {
    return [
      <div class="property-filters">
        <span class="property-count-wrap">
          <div class="result-header">Property Results</div>
          <span class="property-count">25</span> properties match your results
        </span>
        <input type="text" value="" placeholder="Search properties by address or location" class="search"/>
        <select name="cars" class="dropdown">
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
          <img class="navbar-dropdown-carat" src="http://bixbyland.test/app/themes/bixbyland/dist/images/dropdown_caret_3d30fbac.svg"/>
        </select>
        
        <select name="cars" class="dropdown">
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <button class="reset-button">Reset Filters</button>
      </div>,
      <div id="double-slider"></div>
    ];
  }
}
