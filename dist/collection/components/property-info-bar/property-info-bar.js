import { h } from "@stencil/core";
export class PropertyInfoBar {
    async count(number) {
        var i = 1;
        while (number + 1 !== i) {
            console.log(i++);
        }
    }
    render() {
        return (h("div", { class: "property-info-bar" },
            h("div", { class: "property-info-bar-wrap" },
                h("span", { class: "property-count-wrap" },
                    h("div", { class: "property-info-header" }, "All Properties"),
                    h("span", { class: "property-info-subheader" }, "Completed or Underway")),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, "50"),
                    "Properties"),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, "600M"),
                    "Square Feet"),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, "$10B"),
                    "Value"))));
    }
    static get is() { return "property-info-bar"; }
    static get originalStyleUrls() { return {
        "$": ["property-info-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-info-bar.css"]
    }; }
}
