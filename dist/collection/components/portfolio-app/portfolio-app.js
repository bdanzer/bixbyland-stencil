import { h, Host } from "@stencil/core";
export class PortfolioApp {
    render() {
        return (h(Host, { class: "portfolio-app" }, this.test));
    }
    static get is() { return "portfolio-app"; }
    static get originalStyleUrls() { return {
        "$": ["portfolio-app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["portfolio-app.css"]
    }; }
    static get properties() { return {
        "test": {
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
            "attribute": "test",
            "reflect": false
        }
    }; }
}
