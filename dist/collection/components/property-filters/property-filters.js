import { h } from "@stencil/core";
import { changeFilter, loadPosts } from "../../actions/data";
import * as R from "ramda";
export class PropertyFilters {
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { filters } } = state;
            return {
                filters
            };
        });
        this.store.mapDispatchToProps(this, {
            changeFilter,
            loadPosts
        });
    }
    getRegions() {
    }
    handleSearch(e) {
        let value = e.target.value;
        this.changeFilter({ "search": value });
        if (value.length >= 3) {
            this.loadPosts();
        }
    }
    handleRegion(e) {
        console.log(e.target.value);
    }
    handleSqFeet(_values, _handle, _unencoded, _tap, _positions) {
        console.log(...arguments);
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
        console.log(this.filters, 'filter');
        return (h("div", { class: "property-filters" },
            h("span", { class: "property-count-wrap" },
                h("div", { class: "result-header" }, "Property Results"),
                h("span", { class: "property-count" }, "25"),
                " properties match your results"),
            h("input", { onInput: (e) => this.handleSearch(e), type: "text", value: "", placeholder: "Search properties by address or location", class: "search" }),
            h("select", { name: "cars", class: "dropdown", onChange: (e) => this.handleRegion(e) },
                h("option", { disabled: true }, "Regions"),
                h("option", { value: "saab" }, "Saab 95"),
                h("option", { value: "mercedes" }, "Mercedes SLK"),
                h("option", { value: "audi" }, "Audi TT")),
            h("no-ui-slider-wrapper", { callback: this.handleSqFeet.bind(this) },
                h("slot", { name: "title" }, "Square Footage")),
            h("select", { name: "cars", class: "dropdown", onChange: (e) => this.handleSortBy(e) },
                h("option", { disabled: true }, "SortBy"),
                h("option", { value: "volvo" }, "Volvo XC90"),
                h("option", { value: "saab" }, "Saab 95"),
                h("option", { value: "mercedes" }, "Mercedes SLK"),
                h("option", { value: "audi" }, "Audi TT")),
            h("button", { onClick: () => { this.handleResetFilters(); }, class: "reset-button" }, "Reset Filters")));
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
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
}
