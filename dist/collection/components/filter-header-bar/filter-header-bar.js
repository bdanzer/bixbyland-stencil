import { h, Host } from "@stencil/core";
export class FilterHeaderBar {
    constructor() {
        this.categories = [
            'industrial',
            'office'
        ];
        this.views = {
            'map': 'Property Map',
            'grid': 'Property Grid'
        };
        this.activeFilter = 'all';
        this.activeView = 'map';
    }
    getViews() {
        var views = [];
        for (let viewType in this.views) {
            let viewName = this.views[viewType];
            views.push(h("div", { class: (this.activeView == viewType) ? 'active' : '', onClick: () => this.handleView(viewType) }, viewName));
        }
        return views;
    }
    handleView(viewType) {
        this.activeView = viewType;
        this.view(viewType);
    }
    handleFilter(category) {
        this.activeFilter = category;
        this.filter(category);
    }
    render() {
        return (h(Host, null,
            h("div", { class: "filter-wrap" },
                h("div", { class: "filters" },
                    h("span", null, "Filter by:"),
                    h("div", { class: (this.activeFilter == 'all') ? 'active' : '', onClick: () => this.handleFilter('all') }, "All"),
                    this.categories.map((category) => {
                        return (h("div", { class: (this.activeFilter == category) ? 'active' : '', onClick: () => this.handleFilter(category) }, category));
                    })),
                h("div", { class: "views" },
                    h("span", null, "View As:"),
                    this.getViews()))));
    }
    static get is() { return "filter-header-bar"; }
    static get originalStyleUrls() { return {
        "$": ["filter-header-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["filter-header-bar.css"]
    }; }
    static get properties() { return {
        "filter": {
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
        },
        "view": {
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
        },
        "categories": {
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
            "attribute": "categories",
            "reflect": false,
            "defaultValue": "[\n    'industrial',\n    'office'\n  ]"
        },
        "views": {
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
            "attribute": "views",
            "reflect": false,
            "defaultValue": "{\n    'map': 'Property Map',\n    'grid': 'Property Grid'\n  }"
        },
        "activeFilter": {
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
            "attribute": "active-filter",
            "reflect": false,
            "defaultValue": "'all'"
        },
        "activeView": {
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
            "attribute": "active-view",
            "reflect": false,
            "defaultValue": "'map'"
        }
    }; }
}