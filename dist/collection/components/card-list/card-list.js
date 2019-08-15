import { h, Host } from "@stencil/core";
import { loadDataBegin } from "../../actions/data";
export class CardList {
    constructor() {
        this.activePostId = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { items, loading, error, posts } } = state;
            return {
                items,
                loading,
                error,
                posts
            };
        });
        this.store.mapDispatchToProps(this, {
            loadDataBegin
        });
    }
    componentDidLoad() {
        this.loadDataBegin('hi');
    }
    render() {
        console.log('posts CardList', this.posts);
        console.log('items', this.items);
        return (this.posts && h(Host, null, this.posts.map(post => {
            return (h("property-card", { onClick: () => this.handleCard(post), activePostId: this.activePostId, postData: post }));
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
        "handleCard": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get states() { return {
        "items": {},
        "loading": {},
        "error": {}
    }; }
}
