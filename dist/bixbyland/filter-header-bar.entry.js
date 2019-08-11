import { r as registerInstance, h, H as Host } from './core-62e21f24.js';

const FilterHeaderBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.categories = [
            'industrial',
            'office'
        ];
        this.views = {
            'map': 'Property Map',
            'grid': 'Property Grid'
        };
        this.activeFilter = 'all';
        this.activeView = 'map';
    }
    getViews() {
        var views = [];
        for (let viewType in this.views) {
            let viewName = this.views[viewType];
            views.push(h("div", { class: (this.activeView == viewType) ? 'active' : '', onClick: () => this.handleView(viewType) }, viewName));
        }
        return views;
    }
    handleView(viewType) {
        this.activeView = viewType;
        this.view(viewType);
    }
    handleFilter(category) {
        this.activeFilter = category;
        this.filter(category);
    }
    render() {
        return (h(Host, null, h("div", { class: "filter-wrap" }, h("div", { class: "filters" }, h("span", null, "Filter by:"), h("div", { class: (this.activeFilter == 'all') ? 'active' : '', onClick: () => this.handleFilter('all') }, "All"), this.categories.map((category) => {
            return (h("div", { class: (this.activeFilter == category) ? 'active' : '', onClick: () => this.handleFilter(category) }, category));
        })), h("div", { class: "views" }, h("span", null, "View As:"), this.getViews()))));
    }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\n.danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\nfilter-header-bar .filters,\nfilter-header-bar .views, filter-header-bar .filter-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nfilter-header-bar {\n  font-family: \"Roboto\", sans-serif;\n}\nfilter-header-bar .filter-wrap {\n  padding: 45px 0;\n  max-width: 1200px;\n  margin: auto;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\nfilter-header-bar .filters span, filter-header-bar .filters div,\nfilter-header-bar .views span,\nfilter-header-bar .views div {\n  font-size: 20px;\n}\nfilter-header-bar .filters span,\nfilter-header-bar .views span {\n  margin-right: 28px;\n  color: #7C8388;\n}\nfilter-header-bar .filters div,\nfilter-header-bar .views div {\n  position: relative;\n  color: #B4BFC8;\n  margin-right: 40px;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n}\nfilter-header-bar .filters div.active,\nfilter-header-bar .views div.active {\n  color: #11284A;\n}\nfilter-header-bar .filters div.active:after,\nfilter-header-bar .views div.active:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: black;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  max-width: 40px;\n}"; }
};

export { FilterHeaderBar as filter_header_bar };
