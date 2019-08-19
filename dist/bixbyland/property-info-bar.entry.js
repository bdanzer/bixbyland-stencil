import { r as registerInstance, c as getContext, h } from './core-365f7bf1.js';
import { m as map, s as sum } from './index-12578cb2.js';

const PropertyInfoBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.store = getContext(this, "store");
    }
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
    createInfoObj() {
        // R.objOf('propertyInfo')
        // var sqFt = 0;
        const func = (obj) => (obj.meta.sq_ft[0]) ? parseInt(obj.meta.sq_ft[0]) : 0;
        console.log(map(func, this.posts));
        let number = sum(map(func, this.posts));
        let numberString = number.toString();
        let numberLength = number.toString().length;
        switch (numberLength) {
            //35000
            case 5:
            case 6:
                return `${this.getSubString(numberString, 3)}K`;
            // return numberString.replace('000', 'K');
            //3300000
            case 7:
            case 8:
            case 9:
                // str.substring(0, str.length - 1);
                return `${this.getSubString(numberString, 6)}M`;
        }
        return numberString;
    }
    getSubString(numberString, removeNumber) {
        return numberString.substring(0, numberString.length - removeNumber);
    }
    getPrice() {
        // R.objOf('propertyInfo')
        // var sqFt = 0;
        const func = (obj) => (obj.meta.price[0]) ? parseInt(obj.meta.price[0]) : 0;
        console.log(map(func, this.posts));
        let number = sum(map(func, this.posts));
        let numberString = number.toString();
        let numberLength = number.toString().length;
        switch (numberLength) {
            //35000
            case 5:
            case 6:
                return `${this.getSubString(numberString, 3)}K`;
            // return numberString.replace('000', 'K');
            //3300000
            case 7:
            case 8:
            case 9:
                // str.substring(0, str.length - 1);
                return `${this.getSubString(numberString, 6)}M`;
            case 10:
            case 11:
            case 12:
                return `${this.getSubString(numberString, 9)}B`;
        }
        return numberString;
    }
    render() {
        return (h("div", { class: "property-info-bar" }, h("div", { class: "property-info-bar-wrap" }, h("span", { class: "property-count-wrap" }, h("div", { class: "property-info-header" }, "All Properties"), h("span", { class: "property-info-subheader" }, "Completed or Underway")), h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.countPosts()), "Properties"), h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.createInfoObj()), "Square Feet"), h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.getPrice()), "Value"))));
    }
    static get watchers() { return {
        "posts": ["watchPosts"]
    }; }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.danzerpress-col-5, .danzerpress-col-4, .danzerpress-col-3, .danzerpress-col-2, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\n.danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n/*--------------------------------------------------------------\n##Position Overrides\n--------------------------------------------------------------*/\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n.property-info-bar-wrap {\n  max-width: 1300px;\n  margin: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.property-info-bar {\n  padding: 41px 80px;\n  background: #11284A 0% 0% no-repeat padding-box;\n  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);\n}\n\@media screen and (max-width: 950px) {\n  .property-info-bar {\n    padding: 30px 40px;\n  }\n}\n\@media screen and (max-width: 1300px) {\n  .property-info-bar .property-count-wrap {\n    display: none;\n  }\n}\n.property-info-bar .property-info-stats {\n  font: 600 Italic 24px/32px Roboto;\n  letter-spacing: 1.44px;\n  color: #B4BFC8;\n  opacity: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\@media screen and (max-width: 950px) {\n  .property-info-bar .property-info-stats {\n    -ms-flex-direction: column;\n    flex-direction: column;\n    letter-spacing: 1.44px;\n    font: 700 Italic 12px/16px Roboto;\n    letter-spacing: 0.72px;\n  }\n}\n.property-info-bar .property-info-header {\n  text-align: left;\n  font: Bold Italic 24px/32px Roboto;\n  letter-spacing: 1.44px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n.property-info-bar .property-info-subheader {\n  text-align: left;\n  font: 400 20px/26px Roboto;\n  letter-spacing: 1.2px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n.property-info-bar .number-wrap {\n  font: 400 74px/90px Roboto;\n  letter-spacing: 4.44px;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-right: 10px;\n}\n\@media screen and (max-width: 950px) {\n  .property-info-bar .number-wrap {\n    font: 500 24px/90px Roboto;\n    margin: 0px;\n    max-height: 65px;\n    line-height: 1;\n  }\n}"; }
};

export { PropertyInfoBar as property_info_bar };