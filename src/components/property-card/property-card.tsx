import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'property-card',
  styleUrl: 'property-card.scss'
})
export class PropertyCard {
  @Prop() postData: any;
  @Prop() activePostId: any = false;
  @Prop() view: any;

  getPostTitle()
  {
    if (this.postData.meta.post_title_or_address && this.postData.meta.post_title_or_address[0] == '1' || !this.postData.meta.address) {
      return this.postData.post_title;
    } else {
      return this.postData.meta.address[0];
    }
  }

  render()
  {
    const Card = (
      <div class={`property-card${(this.postData.ID == this.activePostId) ? ' active' : ''}`}>
        <div class="property-card-content-wrap">
          <div class="property-image-wrap">
            <img src={this.postData.thumbnail}/>
          </div>
          <div class="property-content">
            <div class="property-content-wrap">
              <span class="property-title"><div class="property-address">{this.getPostTitle()},</div> {this.postData.meta.city[0]} {this.postData.meta.state_code[0]} {this.postData.meta.zip_code[0]}</span>
              <p><span>Region:</span>  {this.postData.meta.region[0]}</p>
              <p><span>Submarket:</span>  {this.postData.meta.sub_market[0]}</p>
              <p><span>Project Type:</span>  {this.postData.categories[0].name}</p>
              <p><span>Total SQ FT:</span>  {new Intl.NumberFormat().format(this.postData.meta.sq_ft[0])}</p>
              <a class="post-link" href={this.postData.link}>View Details</a>
            </div>
          </div>
        </div>
      </div>
    );

    if (this.view == 'grid') {
      return (
        <a href={this.postData.link}>
          {Card}
        </a>
      )
    }

    return Card;
  }
}
