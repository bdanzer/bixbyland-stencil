import { h, Host } from "@stencil/core";
export class PropertyListings {
    constructor() {
        this.activePostId = null;
    }
    handleMarker(_e, markerObj) {
        this.activePostId = markerObj.ID;
    }
    handleCard(post) {
        console.log('card clicked', post.ID);
        this.activePostId = post.ID;
    }
    render() {
        return (h(Host, null,
            h("google-map", { posts: this.posts, handleMarker: this.handleMarker.bind(this), activePostId: this.activePostId }),
            h("card-list", { handleCard: this.handleCard.bind(this), activePostId: this.activePostId, posts: this.posts })));
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
        },
        "activePostId": {
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
            "attribute": "active-post-id",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
}
