import { h, Host } from "@stencil/core";
export class CardList {
    render() {
        return (this.posts && h(Host, null, this.posts.map(post => {
            console.log(post, 'cardList');
            return (h("property-card", { postData: post }));
        })));
    }
    static get is() { return "card-list"; }
    static get originalStyleUrls() { return {
        "$": ["card-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-list.css"]
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
