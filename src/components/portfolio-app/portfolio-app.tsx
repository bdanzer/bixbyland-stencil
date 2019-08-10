import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'portfolio-app',
  styleUrl: 'portfolio-app.scss'
})
export class PortfolioApp {
  @Prop() test: string;

  render() {
    return (
      <Host class="portfolio-app">
        {this.test}
      </Host>
    );
  }
}