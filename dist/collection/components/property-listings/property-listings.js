import { h, Host } from "@stencil/core";
export class PropertyListings {
    render() {
        return (h(Host, null,
            h("google-map", null,
                h("map-marker", null)),
            h("card-list", { posts: this.posts })));
    }
    static get is() { return "property-listings"; }
    static get originalStyleUrls() { return {
        "$": ["property-listings.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-listings.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        }
    }; }
}
