import { Component, h } from '@stencil/core';

@Component({
  tag: 'property-info-bar',
  styleUrl: 'property-info-bar.scss'
})
export class PropertyInfoBar {
  async count(number) 
  {
    var i = 1;
    while(number + 1 !== i) {
      console.log(i++);
    }
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
            <span class="number-wrap">50</span>
            Properties
          </div>

          <div class="property-info-stats">
            <span class="number-wrap">600M</span>
            Square Feet
          </div>

          <div class="property-info-stats">
            <span class="number-wrap">$10B</span>
            Value
          </div>
        </div>
      </div>
    );
  }
}
