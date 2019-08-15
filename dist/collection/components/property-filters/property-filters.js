import { h } from "@stencil/core";
import noUiSlider from 'nouislider';
export class PropertyFilters {
    componentDidLoad() {
        var slider = document.getElementById('double-slider');
        // Give the slider dimensions
        slider.style.maxWidth = '300px';
        slider.style.margin = '0 auto 30px';
        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            tooltips: true
        });
    }
    render() {
        return [
            h("div", { class: "property-filters" },
                h("span", { class: "property-count-wrap" },
                    h("div", { class: "result-header" }, "Property Results"),
                    h("span", { class: "property-count" }, "25"),
                    " properties match your results"),
                h("input", { type: "text", value: "", placeholder: "Search properties by address or location", class: "search" }),
                h("select", { name: "cars", class: "dropdown" },
                    h("option", { value: "volvo" }, "Volvo XC90"),
                    h("option", { value: "saab" }, "Saab 95"),
                    h("option", { value: "mercedes" }, "Mercedes SLK"),
                    h("option", { value: "audi" }, "Audi TT"),
                    h("img", { class: "navbar-dropdown-carat", src: "http://bixbyland.test/app/themes/bixbyland/dist/images/dropdown_caret_3d30fbac.svg" })),
                h("select", { name: "cars", class: "dropdown" },
                    h("option", { value: "volvo" }, "Volvo XC90"),
                    h("option", { value: "saab" }, "Saab 95"),
                    h("option", { value: "mercedes" }, "Mercedes SLK"),
                    h("option", { value: "audi" }, "Audi TT")),
                h("button", { class: "reset-button" }, "Reset Filters")),
            h("div", { id: "double-slider" })
        ];
    }
    static get is() { return "property-filters"; }
    static get originalStyleUrls() { return {
        "$": ["property-filters.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-filters.css"]
    }; }
}
