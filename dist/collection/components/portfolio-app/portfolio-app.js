import { h, Host } from "@stencil/core";
import { configureStore } from "../../store/index";
import { loadPosts, changeFilter, changeView } from "../../actions/data";
export class PortfolioApp {
    constructor() {
        this.urlToFetch = 'http://bixbyland.test/wp-json/bixby/v1/properties';
        this.filter = 'all';
        this.views = 'map';
    }
    componentWillLoad() {
        this.store.setStore(configureStore({}));
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { posts, filter, views } } = state;
            return {
                posts,
                filter,
                views
            };
        });
        this.store.mapDispatchToProps(this, {
            loadPosts,
            changeFilter,
            changeView
        });
    }
    componentDidLoad() {
        this.loadPosts();
    }
    handleFilter(filter) {
        this.changeFilter({ "category": filter });
        this.loadPosts();
    }
    handleView(view) {
        console.log(view);
        this.changeView(view);
    }
    render() {
        return (h(Host, { class: "portfolio-app" },
            h("filter-header-bar", { filter: this.handleFilter.bind(this), view: this.handleView.bind(this) }),
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
        "views": {},
        "posts": {}
    }; }
}
