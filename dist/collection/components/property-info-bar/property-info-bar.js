import { h } from "@stencil/core";
import { formatLargeNumber } from '../../utils/utils';
export class PropertyInfoBar {
    async count(number) {
        var i = 1;
        while (number + 1 !== i) {
            console.log(i++);
        }
    }
    watchPosts(_newValue, _oldValue) {
        console.log(...arguments);
    }
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { dataReducer: { posts } } = state;
            return {
                posts
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
        const func = (obj) => (obj.meta.sq_ft[0]) ? parseInt(obj.meta.sq_ft[0]) : 0;
        return formatLargeNumber(func, this.posts);
    }
    getPrice() {
        // R.objOf('propertyInfo')
        // var sqFt = 0;
        const func = (obj) => (obj.meta.price[0]) ? parseInt(obj.meta.price[0]) : 0;
        return formatLargeNumber(func, this.posts);
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
            "reflect": false
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get watchers() { return [{
            "propName": "posts",
            "methodName": "watchPosts"
        }]; }
}
