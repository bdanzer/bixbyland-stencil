import { h, Host } from "@stencil/core";
import axios from 'axios';
import { configureStore } from "../../store/index";
export class PortfolioApp {
    constructor() {
        this.urlToFetch = 'http://bixbyland.test/wp-json/bixby/v1/properties';
        this.filter = 'all';
        this.view = 'map';
        this.oldFilter = 'all';
        this.oldView = 'map';
    }
    componentWillLoad() {
        this.store.setStore(configureStore({}));
    }
    componentWillUpdate() {
        if (this.filter != this.oldFilter) {
            this.fetchPosts(this.filter);
            this.oldFilter = this.filter;
        }
        if (this.view != this.oldView) {
            this.oldView = this.view;
        }
    }
    componentDidLoad() {
        console.log('loaded');
        this.fetchPosts('all');
    }
    async fetchPosts(filter) {
        console.log('fetch/filter', filter);
        try {
            let response = await axios.get(`${this.urlToFetch}`, {
                params: {
                    'filter': filter
                }
            });
            if (response.status == 200) {
                console.log(response.data);
                this.posts = response.data;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    handleFilter(filter) {
        console.log('handleFilter', filter);
        this.filter = filter;
    }
    handleView(view) {
        console.log('handleView', view);
        this.view = view;
    }
    render() {
        return (h(Host, { class: "portfolio-app" },
            h("filter-header-bar", { filter: this.handleFilter.bind(this), view: this.handleView.bind(this) }),
            h("property-info-bar", null),
            h("property-filters", null),
            h("property-listings", { posts: this.posts })));
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
        "urlToFetch": {
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
            "attribute": "url-to-fetch",
            "reflect": false,
            "defaultValue": "'http://bixbyland.test/wp-json/bixby/v1/properties'"
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get states() { return {
        "filter": {},
        "view": {},
        "posts": {}
    }; }
}
