import { r as registerInstance, h } from './core-365f7bf1.js';

const PropertyCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = false;
    }
    render() {
        return (h("div", { class: `property-card${(this.postData.ID == this.activePostId) ? ' active' : ''}` }, h("div", { class: "property-card-content-wrap" }, h("div", { class: "property-image-wrap" }, h("img", { src: this.postData.thumbnail })), h("div", { class: "property-content" }, h("div", { class: "property-content-wrap" }, h("span", { class: "property-title" }, this.postData.post_title, ", ", this.postData.meta.city[0], " ", this.postData.meta.state_code[0], " ", this.postData.meta.zip_code[0]), h("p", null, h("span", null, "Region:"), " ", this.postData.meta.region[0]), h("p", null, h("span", null, "Submarket:"), " ", this.postData.meta.sub_market[0]), h("p", null, h("span", null, "Total SQ FT:"), " ", this.postData.meta.sq_ft[0]))))));
    }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 1024px) {\n  property-card .property-card .property-card-content-wrap .property-content, property-card .property-card .property-card-content-wrap .property-image-wrap {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\nproperty-card .property-card .property-card-content-wrap .property-content, property-card .property-card .property-card-content-wrap .property-image-wrap, .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2, card-list.grid .property-card .property-card-content-wrap .property-content, card-list.grid .property-card .property-card-content-wrap .property-image-wrap, property-card, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\ncard-list.grid .property-card .property-card-content-wrap .property-content, card-list.grid .property-card .property-card-content-wrap .property-image-wrap, property-card, .danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\nproperty-card .property-card .property-card-content-wrap .property-image-wrap {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\nproperty-card .property-card .property-card-content-wrap .property-content {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\nproperty-card .property-card .property-card-content-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n/*--------------------------------------------------------------\n##Position Overrides\n--------------------------------------------------------------*/\ncard-list.grid .property-card .property-card-content-wrap .property-content, card-list.grid .property-card .property-card-content-wrap .property-image-wrap, property-card .property-card .property-card-content-wrap .property-content, property-card .property-card .property-card-content-wrap .property-image-wrap, property-card {\n  padding: 0px;\n  margin: 0px;\n}\n\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nproperty-card .property-card.active .property-card-content-wrap {\n  background: #B4BFC8;\n}\nproperty-card .property-card .property-card-content-wrap {\n  padding: 15px;\n}\nproperty-card .property-card .property-card-content-wrap .property-content, property-card .property-card .property-card-content-wrap .property-image-wrap {\n  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n}\nproperty-card .property-card .property-card-content-wrap .property-image-wrap img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\nproperty-card .property-card .property-card-content-wrap .property-content .property-content-wrap {\n  background: white;\n  padding: 20px;\n}\nproperty-card .property-card .property-card-content-wrap .property-content .property-content-wrap .property-title {\n  font-size: 23px;\n  font-family: \"Roboto\", sans-serif;\n  color: #11284A;\n  margin-bottom: 6px;\n  display: block;\n}\nproperty-card .property-card .property-card-content-wrap .property-content .property-content-wrap span {\n  color: #11284A;\n  font-size: 16px;\n  font-weight: 700;\n  font-style: italic;\n}\nproperty-card .property-card .property-card-content-wrap .property-content .property-content-wrap p {\n  margin-bottom: 7px;\n  color: #7C8388;\n}\n\ncard-list.grid .property-card .property-card-content-wrap .property-image-wrap {\n  max-height: 360px;\n  min-height: 360px;\n}"; }
};

export { PropertyCard as property_card };
