import { h, Host } from "@stencil/core";
import { configureStore } from "../../store/index";
import { loadPosts, changeFilter, changeView, setBase } from "../../actions/data";
import * as R from 'ramda';
import * as queryString from 'query-string';
export class PortfolioApp {
    constructor() {
        this.filters = 'all';
        this.views = 'map';
        this.acceptedCats = ['all', 'industrial', 'office'];
    }
    componentWillLoad() {
        this.store.setStore(configureStore({}));
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { posts, filters, views } } = state;
            return {
                posts,
                filters,
                views
            };
        });
        this.store.mapDispatchToProps(this, {
            loadPosts,
            changeFilter,
            changeView,
            setBase
        });
        this.setBase(this.baseUrl);
        this.checkUrl();
    }
    watchBaseUrl(_new, _old) {
        if (_new !== _old) {
            this.setBase(_new);
        }
    }
    async checkUrl() {
        let obj = queryString.parseUrl(window.location.href);
        let query = obj.query;
        if (query && query.category) {
            await this.changeCategory(query.category);
        }
    }
    componentDidLoad() {
        this.loadPosts();
    }
    async handleFilter(filter) {
        await this.changeCategory(filter);
        this.loadPosts();
    }
    async changeCategory(filter) {
        if (R.includes(filter, this.acceptedCats)) {
            this.changeFilter({ "category": filter });
            this.loadPosts();
        }
    }
    handleView(view) {
        this.changeView(view);
    }
    render() {
        return (h(Host, { class: "portfolio-app" },
            h("filter-header-bar", { activeFilter: this.filters.category, filter: this.handleFilter.bind(this), view: this.handleView.bind(this) }),
            h("property-info-bar", null),
            h("property-filters", null),
            h("property-listings", { class: this.views, view: this.views, posts: this.posts })));
    }
    static get is() { return "portfolio-app"; }
    static get originalStyleUrls() { return {
        "$": ["portfolio-app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["portfolio-app.css"]
    }; }
    static get properties() { return {
        "googleApiKey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "google-api-key",
            "reflect": false
        },
        "baseUrl": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "base-url",
            "reflect": false
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get states() { return {
        "filters": {},
        "views": {},
        "posts": {}
    }; }
    static get methods() { return {
        "changeCategory": {
            "complexType": {
                "signature": "(filter: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "baseUrl",
            "methodName": "watchBaseUrl"
        }]; }
}
