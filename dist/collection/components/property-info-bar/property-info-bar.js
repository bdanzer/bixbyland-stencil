import { h } from "@stencil/core";
import { formatLargeNumber } from '../../utils/utils';
import axios from 'axios';
import * as R from 'ramda';
export class PropertyInfoBar {
    constructor() {
        this.posts = [];
        this.filters = {
            "category": ""
        };
    }
    watchPosts(_newValue, _oldValue) {
        /**
         * TODO: convert to use baseUrl
         */
        axios.get('https://bixbyland.coreylowe.io/wp-json/bixby/v1/properties/category-info', {
            params: {
                'category': _newValue.category
            }
        }).then(res => {
            this.posts = res.data;
        });
    }
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { filters, baseUrl } } = state;
            return {
                filters, baseUrl
            };
        });
    }
    countPosts() {
        return this.posts.length;
    }
    //TODO: want to turn this into one object will all the data at once
    createInfoObj() {
        // R.objOf('propertyInfo')
        // var sqFt = 0;
        let sqFootSum = R.sum(R.map(postData => postData.sq_ft, this.posts));
        return formatLargeNumber(sqFootSum);
    }
    getPrice() {
        // R.objOf('propertyInfo')
        // var sqFt = 0;
        let priceSum = R.sum(R.map(postData => postData.price, this.posts));
        return formatLargeNumber(priceSum);
    }
    render() {
        return (h("div", { class: "property-info-bar" },
            h("div", { class: "property-info-bar-wrap" },
                h("span", { class: "property-count-wrap" },
                    h("div", { class: "property-info-header" }, "All Properties"),
                    h("span", { class: "property-info-subheader" }, "Completed or Underway")),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, this.countPosts()),
                    "Properties"),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, this.createInfoObj()),
                    "Square Feet"),
                h("div", { class: "property-info-stats" },
                    h("span", { class: "number-wrap" }, this.getPrice()),
                    "Value"))));
    }
    static get is() { return "property-info-bar"; }
    static get originalStyleUrls() { return {
        "$": ["property-info-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["property-info-bar.css"]
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
            "reflect": false,
            "defaultValue": "[]"
        },
        "baseUrl": {
            "type": "any",
            "mutable": true,
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
            "attribute": "base-url",
            "reflect": false
        },
        "filters": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "{ \"category\": string; }",
                "resolved": "{ \"category\": string; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{\n    \"category\": \"\"\n  }"
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get watchers() { return [{
            "propName": "filters",
            "methodName": "watchPosts"
        }]; }
}
