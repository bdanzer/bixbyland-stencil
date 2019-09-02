import { h } from "@stencil/core";
export class PropertyCard {
    constructor() {
        this.activePostId = false;
    }
    getPostTitle() {
        if (this.postData.meta.post_title_or_address && this.postData.meta.post_title_or_address[0] == '1' || !this.postData.meta.address) {
            return this.postData.post_title;
        }
        else {
            return this.postData.meta.address[0];
        }
    }
    render() {
        const Card = (h("div", { class: `property-card${(this.postData.ID == this.activePostId) ? ' active' : ''}` },
            h("div", { class: "property-card-content-wrap" },
                h("div", { class: "property-image-wrap" },
                    h("img", { src: this.postData.thumbnail })),
                h("div", { class: "property-content" },
                    h("div", { class: "property-content-wrap" },
                        h("span", { class: "property-title" },
                            h("div", { class: "property-address" },
                                this.getPostTitle(),
                                ","),
                            " ",
                            this.postData.meta.city[0],
                            " ",
                            this.postData.meta.state_code[0],
                            " ",
                            this.postData.meta.zip_code[0]),
                        h("p", null,
                            h("span", null, "Region:"),
                            "  ",
                            this.postData.meta.region[0]),
                        h("p", null,
                            h("span", null, "Submarket:"),
                            "  ",
                            this.postData.meta.sub_market[0]),
                        h("p", null,
                            h("span", null, "Project Type:"),
                            "  ",
                            this.postData.categories[0].name),
                        h("p", null,
                            h("span", null, "Total SQ FT:"),
                            "  ",
                            new Intl.NumberFormat().format(this.postData.meta.sq_ft[0])),
                        h("a", { class: "post-link", href: this.postData.link }, "View Details"))))));
        if (this.view == 'grid') {
            return (h("a", { href: this.postData.link }, Card));
        }
        return Card;
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
            "defaultValue": "false"
        },
        "view": {
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
            "attribute": "view",
            "reflect": false
        }
    }; }
}
