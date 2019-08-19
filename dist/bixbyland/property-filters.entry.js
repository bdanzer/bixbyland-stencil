import { r as registerInstance, c as getContext, h } from './core-365f7bf1.js';
import { c as changeFilter, l as loadPosts, b as axios } from './data-8ddb321b.js';
import { i as isEmpty, r as reject } from './index-12578cb2.js';

const PropertyFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.posts = [];
        this.modal = false;
        this.regions = [];
        this.store = getContext(this, "store");
    }
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { filters, posts } } = state;
            return {
                filters, posts
            };
        });
        this.store.mapDispatchToProps(this, {
            changeFilter,
            loadPosts
        });
        this.getRegions();
    }
    async getRegions() {
        let response = await axios.get('https://bixbyland.coreylowe.io/wp-json/bixby/v1/properties/regions');
        return this.regions = response.data;
    }
    handleSearch(e) {
        let value = e.target.value;
        this.changeFilter({ "search": value });
        // if (value.length >= 3) {
        this.loadPosts();
        // }
    }
    handleRegion(e) {
        this.changeFilter({ "region": e.target.value });
        this.loadPosts();
    }
    handleSqFeet(_values, _handle, _unencoded, _tap, _positions) {
        let roundNumbers = _unencoded.map(number => Math.round(number));
        this.changeFilter({ "sqFootage": roundNumbers });
        this.loadPosts();
    }
    handleSortBy(_e) {
    }
    handleResetFilters() {
        const isEmpty$1 = (x) => isEmpty(x) === true;
        let result = reject(isEmpty$1, this.filters);
        if (!isEmpty(result)) {
            this.changeFilter({});
            this.loadPosts();
        }
    }
    render() {
        return [
            h("div", { class: `property-filters${(this.modal) ? ' modal-state' : ''}` }, h("span", { class: "property-count-wrap" }, h("div", { class: "result-header" }, "Property Results"), h("span", { class: "property-count" }, this.posts.length), " properties match your results"), (this.modal) && (h("span", { class: "filter-title" }, "Filter")), h("input", { onChange: (e) => this.handleSearch(e), type: "text", value: (this.filters && this.filters.search) ? this.filters.search : '', placeholder: "Search properties by address or location", class: "search" }), h("select", { name: "regions", class: "dropdown", onChange: (e) => this.handleRegion(e) }, h("option", { selected: true, disabled: true }, "Regions"), this.regions.map(region => h("option", { value: region.meta_value }, region.meta_value))), h("no-ui-slider-wrapper", { start: (this.filters && this.filters.sqFootage) ? this.filters.sqFootage : [0, 100], callback: this.handleSqFeet.bind(this) }, h("slot", { name: "title" }, "Square Footage")), h("select", { name: "sortby", class: "dropdown", onChange: (e) => this.handleSortBy(e) }, h("option", { selected: true, disabled: true }, "SortBy")), h("button", { onClick: () => { (this.modal) ? this.modal = !this.modal : this.handleResetFilters(); }, class: "reset-button" }, (this.modal) ? 'Apply' : 'Reset Filters'), h("div", { class: "modal-close-button", onClick: () => { this.modal = !this.modal; } }, "X")),
            h("div", { class: "modal-button", onClick: () => this.modal = !this.modal }, "Filter Results (", this.posts.length, ")")
        ];
    }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\n.danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n/*--------------------------------------------------------------\n##Position Overrides\n--------------------------------------------------------------*/\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n.property-filters {\n  font-family: \"Roboto\", sans-serif;\n  padding: 45px 0;\n  max-width: 1300px;\n  margin: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.property-filters .modal-close-button {\n  display: none;\n}\n.property-filters.modal-state {\n  background: #00264B;\n  top: 0;\n  opacity: 1;\n}\n.property-filters.modal-state .modal-close-button {\n  display: block;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  cursor: pointer;\n}\n.property-filters .result-header {\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.6px;\n  color: #00264B;\n}\n.property-filters .property-count-wrap {\n  color: #7C8388;\n  font-size: 20px;\n  letter-spacing: 1.2px;\n  max-width: 225px;\n}\n.property-filters .search {\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n.property-filters input, .property-filters select, .property-filters no-ui-slider-wrapper, .property-filters reset-button {\n  margin: 0 10px;\n  min-height: 59px;\n}\n.property-filters input,\n.property-filters select {\n  padding: 19px 16px;\n  border: none;\n  /*Removes border*/\n  -webkit-appearance: none;\n  /*Removes default chrome and safari style*/\n  -moz-appearance: none;\n  /*Removes default style Firefox*/\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  border-radius: 5px;\n  opacity: 1;\n  font: Regular 15px/20px Roboto;\n  letter-spacing: 0.9px;\n  color: #11284A;\n}\n.property-filters .dropdown {\n  min-width: 150px;\n  background-image: url(data:image/svg;base64,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);\n  background-position: right center;\n  background-repeat: no-repeat;\n}\n.property-filters .reset-button {\n  padding: 19px 17px;\n  font: Regular 15px/20px Roboto;\n  letter-spacing: 0.9px;\n  color: #FFFFFF;\n  opacity: 1;\n  background: #11284A 0% 0% no-repeat padding-box;\n  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  border-radius: 5px;\n  opacity: 1;\n  border: none;\n}\n.property-filters .double-slider {\n  -ms-flex: 1;\n  flex: 1;\n}\n\@media screen and (max-width: 1024px) {\n  .property-filters {\n    -ms-flex-direction: column;\n    flex-direction: column;\n    max-width: 100%;\n    opacity: 0;\n    top: -100vh;\n    position: fixed;\n    width: 100vw;\n    left: 50%;\n    right: 50%;\n    margin-left: -50vw;\n    margin-right: -50vw;\n    height: 100vh;\n    z-index: 999;\n    display: block;\n    padding: 69px 30px;\n  }\n  .property-filters .property-count-wrap {\n    display: none;\n  }\n  .property-filters slot-fb[name=title],\n.property-filters .filter-title {\n    font: 600 20px/30px Roboto;\n    letter-spacing: 1.2px;\n    color: #B4BFC8;\n    opacity: 1;\n    text-transform: uppercase;\n  }\n  .property-filters .filter-title {\n    margin-bottom: 50px;\n    display: block;\n  }\n  .property-filters slot-fb[name=title] {\n    margin: 50px 0 30px 0;\n  }\n  .property-filters input, .property-filters select, .property-filters no-ui-slider-wrapper {\n    background: transparent;\n    color: white;\n    font: 500 16px/20px Roboto;\n    letter-spacing: 1.92px;\n    color: #B4BFC8;\n    opacity: 1;\n    width: 100%;\n    margin: 0 0 20px 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    padding-left: 0px;\n  }\n  .property-filters no-ui-slider-wrapper #double-slider.noUi-horizontal {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    background: #3D4D64;\n    margin: 0px;\n    width: 100%;\n    max-width: 100%;\n  }\n  .property-filters no-ui-slider-wrapper #double-slider.noUi-horizontal .noUi-tooltip {\n    background: #3D4D64;\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .property-filters .noUi-horizontal .noUi-handle {\n    top: 1px;\n  }\n  .property-filters no-ui-slider-wrapper #double-slider .noUi-connect {\n    background: white;\n  }\n  .property-filters input, .property-filters select {\n    border-bottom: 0.25px solid #FFFFFF;\n    border-radius: 0px;\n  }\n  .property-filters .reset-button {\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    border: 1px solid #707070;\n    border-radius: 5px;\n    opacity: 1;\n    display: block;\n    width: 100%;\n    font: 500 16px/20px Roboto;\n    letter-spacing: 1.92px;\n    color: #000000;\n    opacity: 1;\n    text-transform: uppercase;\n  }\n}\n\n.modal-button {\n  display: none;\n}\n\n\@media screen and (max-width: 1024px) {\n  .modal-button {\n    display: block;\n    text-align: left;\n    font: 500 12px/20px Roboto;\n    letter-spacing: 1.44px;\n    color: #11284A;\n    opacity: 1;\n    text-transform: uppercase;\n    margin: 35px 15px;\n    cursor: pointer;\n  }\n}"; }
};

export { PropertyFilters as property_filters };
