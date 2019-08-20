import { h } from "@stencil/core";
import { changeFilter, loadPosts } from "../../actions/data";
import * as R from "ramda";
import axios from "axios";
export class PropertyFilters {
    constructor() {
        this.posts = [];
        this.modal = false;
        this.regions = [];
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
        const isEmpty = (x) => R.isEmpty(x) === true;
        let result = R.reject(isEmpty, this.filters);
        if (!R.isEmpty(result)) {
            this.changeFilter({});
            this.loadPosts();
        }
    }
    render() {
        return [
            h("div", { class: `property-filters${(this.modal) ? ' modal-state' : ''}` },
                h("span", { class: "property-count-wrap" },
                    h("div", { class: "result-header" }, "Property Results"),
                    h("span", { class: "property-count" }, this.posts.length),
                    " properties match your results"),
                (this.modal) && (h("span", { class: "filter-title" }, "Filter")),
                h("input", { onChange: (e) => this.handleSearch(e), type: "text", value: (this.filters && this.filters.search) ? this.filters.search : '', placeholder: "Search properties by address", class: "search" }),
                h("select", { name: "regions", class: "dropdown", onChange: (e) => this.handleRegion(e) },
                    h("option", { selected: (this.filters.region) ? false : true, disabled: true }, "Regions"),
                    this.regions.map(region => h("option", { value: region.meta_value }, region.meta_value))),
                h("no-ui-slider-wrapper", { start: (this.filters && this.filters.sqFootage) ? this.filters.sqFootage : [0, 100], callback: this.handleSqFeet.bind(this) },
                    h("slot", { name: "title" }, "Square Footage")),
                h("select", { name: "sortby", class: "dropdown", onChange: (e) => this.handleSortBy(e) },
                    h("option", { selected: true, disabled: true }, "SortBy")),
                h("button", { onClick: () => { (this.modal) ? this.modal = !this.modal : this.handleResetFilters(); }, class: "reset-button" }, (this.modal) ? 'Apply' : 'Reset Filters'),
                h("div", { class: "modal-close-button", onClick: () => { this.modal = !this.modal; } }, "X")),
            h("div", { class: "modal-button", onClick: () => this.modal = !this.modal },
                "Filter Results (",
                this.posts.length,
                ")")
        ];
    }
    static get is() { return "property-filters"; }
    static get originalStyleUrls() { return {
        "$": ["property-filters.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-filters.css"]
    }; }
    static get properties() { return {
        "search": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "search",
            "reflect": false
        },
        "filters": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "filters",
            "reflect": false
        },
        "posts": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "posts",
            "reflect": false,
            "defaultValue": "[]"
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get states() { return {
        "modal": {},
        "regions": {}
    }; }
}
