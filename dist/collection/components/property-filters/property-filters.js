import { h } from "@stencil/core";
export class PropertyFilters {
    componentDidLoad() { }
    render() {
        return (h("div", { class: "property-filters" },
            h("span", { class: "property-count-wrap" },
                h("div", { class: "result-header" }, "Property Results"),
                h("span", { class: "property-count" }, "25"),
                " properties match your results"),
            h("input", { onInput: (e) => console.log(e.target.value), type: "text", value: "", placeholder: "Search properties by address or location", class: "search" }),
            h("select", { name: "cars", class: "dropdown", onChange: (e) => console.log(e.target.value) },
                h("option", { value: "volvo" }, "Volvo XC90"),
                h("option", { value: "saab" }, "Saab 95"),
                h("option", { value: "mercedes" }, "Mercedes SLK"),
                h("option", { value: "audi" }, "Audi TT")),
            h("no-ui-slider-wrapper", null,
                h("slot", { name: "title" }, "Square Footage")),
            h("select", { name: "cars", class: "dropdown" },
                h("option", { value: "volvo" }, "Volvo XC90"),
                h("option", { value: "saab" }, "Saab 95"),
                h("option", { value: "mercedes" }, "Mercedes SLK"),
                h("option", { value: "audi" }, "Audi TT")),
            h("button", { class: "reset-button" }, "Reset Filters")));
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
        }
    }; }
}
