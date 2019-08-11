import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'property-card',
  styleUrl: 'property-card.scss'
})
export class PropertyCard {
  @Prop() postData: any;

  render() 
  {
    return (
      <div class="property-card">
        <div class="property-image-wrap">
          <img src={this.postData.thumbnail}/>
        </div>
        <div class="property-content-wrap">
          <span class="property-title">{this.postData.post_title}, {this.postData.meta.city[0]} {this.postData.meta.state_code[0]} {this.postData.meta.zip_code[0]}</span>
          <p><span>Region:</span> {this.postData.meta.region[0]}</p>
          <p><span>Submarket:</span> {this.postData.meta.sub_market[0]}</p>
          <p><span>Total SQ FT:</span> {this.postData.meta.sq_ft[0]}</p>
        </div>
      </div>
    );
  }
}
