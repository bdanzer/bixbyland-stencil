import { r as registerInstance, h, H as Host } from './core-bba4ca79.js';

const FilterHeaderBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.views = {
            'map': 'Property Map',
            'grid': 'Property Grid'
        };
        this.activeFilter = 'all';
        this.activeView = 'map';
        this.categories = [
            'industrial',
            'office'
        ];
    }
    getViews() {
        var views = [];
        for (let viewType in this.views) {
            let viewName = this.views[viewType];
            views.push(h("span", { class: `filter-label-icon ${viewType} ${(this.activeView == viewType) ? 'active' : ''}` }), h("div", { class: `filter-label-type ${viewType} ${(this.activeView == viewType) ? 'active' : ''}`, onClick: () => this.handleView(viewType) }, viewName));
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
        return (h(Host, null, h("div", { class: "filter-wrap" }, h("div", { class: "filters" }, h("span", { class: "filter-label" }, "Filter by:"), h("div", { class: (this.activeFilter == 'all') ? 'active' : '', onClick: () => this.handleFilter('all') }, "All"), this.categories.map((category) => {
            return (h("div", { class: (this.activeFilter == category) ? 'active' : '', onClick: () => this.handleFilter(category) }, category));
        })), h("div", { class: "views" }, h("span", { class: "filter-label" }, "View As:"), this.getViews()))));
    }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\n.danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\nfilter-header-bar .filters,\nfilter-header-bar .views, filter-header-bar .filter-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n/*--------------------------------------------------------------\n##Position Overrides\n--------------------------------------------------------------*/\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nfilter-header-bar {\n  font-family: \"Roboto\", sans-serif;\n}\nfilter-header-bar .filter-wrap {\n  padding: 45px 0;\n  max-width: 1300px;\n  margin: auto;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\@media screen and (max-width: 1024px) {\n  filter-header-bar .filter-wrap {\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0;\n  }\n  filter-header-bar .filter-wrap .filter-label {\n    display: none;\n  }\n  filter-header-bar .filter-wrap .active:after {\n    display: none;\n  }\n  filter-header-bar .filter-wrap .views {\n    -ms-flex-order: -1;\n    order: -1;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n  }\n  filter-header-bar .filter-wrap .views div {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n    margin: 0;\n    text-align: center;\n    border-top: 0.25px solid #8390A2;\n    padding: 15px 0;\n  }\n  filter-header-bar .filter-wrap .filters {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    -webkit-box-shadow: 0px 3px 6px #000000;\n    box-shadow: 0px 3px 6px #000000;\n  }\n  filter-header-bar .filter-wrap .filters div {\n    -ms-flex: 0 0 33.3333%;\n    flex: 0 0 33.3333%;\n    margin: 0;\n    text-align: center;\n    padding: 12px 0;\n  }\n  filter-header-bar .filter-wrap .filters div:after {\n    height: 100%;\n    content: \"\";\n    width: 1px;\n    background: #8390A2;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    max-height: 50%;\n    -webkit-transform: translate(0%, -50%);\n    transform: translate(0%, -50%);\n  }\n}\nfilter-header-bar .filters span, filter-header-bar .filters div,\nfilter-header-bar .views span,\nfilter-header-bar .views div {\n  font-size: 20px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\nfilter-header-bar .filters span,\nfilter-header-bar .views span {\n  margin-right: 28px;\n  color: #7C8388;\n}\nfilter-header-bar .filters div,\nfilter-header-bar .views div {\n  position: relative;\n  color: #B4BFC8;\n  margin-right: 40px;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n}\nfilter-header-bar .filters div.active,\nfilter-header-bar .views div.active {\n  color: #11284A;\n}\nfilter-header-bar .filters div.active:after,\nfilter-header-bar .views div.active:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: black;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  max-width: 40px;\n}\nfilter-header-bar .filters .filter-label-icon,\nfilter-header-bar .views .filter-label-icon {\n  margin-right: 16px;\n  opacity: 0.4;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\nfilter-header-bar .filters .filter-label-icon.active,\nfilter-header-bar .views .filter-label-icon.active {\n  opacity: 1;\n}\nfilter-header-bar .filters .filter-label-icon.map:before, filter-header-bar .filters .filter-label-icon.grid:before,\nfilter-header-bar .views .filter-label-icon.map:before,\nfilter-header-bar .views .filter-label-icon.grid:before {\n  content: \"\";\n  height: 26px;\n  display: block;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nfilter-header-bar .filters .filter-label-icon.map:before,\nfilter-header-bar .views .filter-label-icon.map:before {\n  width: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'23.824\' height=\'32.622\' viewBox=\'0 0 23.824 32.622\'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;stroke:%23233853;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.433px;%7D%3C/style%3E%3C/defs%3E%3Cg transform=\'translate(-137.284 -133.946)\'%3E%3Cpath class=\'a\' d=\'M149.2,135.163a10.7,10.7,0,0,1,10.7,10.7,11.237,11.237,0,0,1-1.725,5.826c-2.376,3.933-8.97,13.666-8.97,13.666s-6.6-9.733-8.973-13.666a11.236,11.236,0,0,1-1.724-5.826,10.7,10.7,0,0,1,10.7-10.7\'/%3E%3Ccircle class=\'a\' cx=\'4.795\' cy=\'4.795\' r=\'4.795\' transform=\'translate(144.402 141.037)\'/%3E%3C/g%3E%3C/svg%3E\");\n}\nfilter-header-bar .filters .filter-label-icon.grid:before,\nfilter-header-bar .views .filter-label-icon.grid:before {\n  width: 28px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'36.943\' height=\'32.438\' viewBox=\'0 0 36.943 32.438\'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;stroke:%23233853;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.433px;%7D%3C/style%3E%3C/defs%3E%3Cg transform=\'translate(-498.442 -912.43)\'%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 937.974)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 937.974)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 937.974)\'/%3E%3C/g%3E%3C/svg%3E\");\n}"; }
};

export { FilterHeaderBar as filter_header_bar };