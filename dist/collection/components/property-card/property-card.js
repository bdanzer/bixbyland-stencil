import { h } from "@stencil/core";
export class PropertyCard {
    render() {
        return (h("div", { class: "property-card" },
            h("div", { class: "property-image-wrap" },
                h("img", { src: this.postData.thumbnail })),
            h("div", { class: "property-content-wrap" },
                h("span", { class: "property-title" },
                    this.postData.post_title,
                    ", ",
                    this.postData.meta.city[0],
                    " ",
                    this.postData.meta.state_code[0],
                    " ",
                    this.postData.meta.zip_code[0]),
                h("p", null,
                    h("span", null, "Region:"),
                    " ",
                    this.postData.meta.region[0]),
                h("p", null,
                    h("span", null, "Submarket:"),
                    " ",
                    this.postData.meta.sub_market[0]),
                h("p", null,
                    h("span", null, "Total SQ FT:"),
                    " ",
                    this.postData.meta.sq_ft[0]))));
    }
    static get is() { return "property-card"; }
    static get originalStyleUrls() { return {
        "$": ["property-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-card.css"]
    }; }
    static get properties() { return {
        "postData": {
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
            "attribute": "post-data",
            "reflect": false
        }
    }; }
}
