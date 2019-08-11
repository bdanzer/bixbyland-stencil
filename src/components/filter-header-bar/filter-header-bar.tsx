import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'filter-header-bar',
  styleUrl: 'filter-header-bar.scss'
})
export class FilterHeaderBar {
  @Prop() filter:Function;
  @Prop() view:Function;

  @Prop() categories: any = [
    'industrial',
    'office'
  ];

  @Prop() views: any = {
    'map': 'Property Map',
    'grid': 'Property Grid'
  };

  @Prop() activeFilter: string = 'all';
  @Prop() activeView: string = 'map';

  private getViews() 
  {
    var views = [];

    for (let viewType in this.views) {
      let viewName = this.views[viewType];

      views.push(
        <div class={(this.activeView == viewType) ? 'active' : ''} onClick={() => this.handleView(viewType)}>{viewName}</div>
      );
    }

    return views;
  }

  private handleView(viewType) 
  {
    this.activeView = viewType;
    this.view(viewType)
  }

  private handleFilter(category) 
  {
    this.activeFilter = category;
    this.filter(category)
  }
  
  render() 
  {
    return (
      <Host>
        <div class="filter-wrap">
          <div class="filters">
            <span>Filter by:</span>
            <div class={(this.activeFilter == 'all') ? 'active' : ''} onClick={() => this.handleFilter('all')}>All</div>
            {this.categories.map((category) => {
              return (
                <div class={(this.activeFilter == category) ? 'active' : ''} onClick={() => this.handleFilter(category)}>{category}</div>
              );
            })}
          </div>
          <div class="views">
            <span>View As:</span>
            {this.getViews()}
          </div>
        </div>
      </Host>
    );
  }
}
