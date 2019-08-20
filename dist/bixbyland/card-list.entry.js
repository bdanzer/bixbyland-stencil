import { r as registerInstance, c as getContext, h, H as Host } from './core-bba4ca79.js';
import { d as loadDataBegin } from './data-7ef5027b.js';

const CardList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = false;
        this.store = getContext(this, "store");
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
        return (this.posts && h(Host, null, this.posts.map(post => {
            return (h("property-card", { onClick: () => this.handleCard(post), activePostId: this.activePostId, postData: post }));
        })));
    }
    static get style() { return "p {\n  margin: 0 0 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: grey;\n}\np:last-child {\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  letter-spacing: 3.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n\nh2 {\n  font-size: 32px;\n  line-height: 1;\n  margin-bottom: 5px;\n  margin-top: 20px;\n}\n\nh3,\nh4 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 0px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-size: 22px;\n}\n\n.danzerpress-button-left {\n  margin-right: 15px;\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, card-list.grid property-card, .danzerpress-col-3, .danzerpress-col-2 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n\@media screen and (max-width: 767px) {\n  .danzerpress-col-5, .danzerpress-col-4, card-list.grid property-card, .danzerpress-col-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.danzerpress-col-5, .danzerpress-col-4, card-list.grid property-card, .danzerpress-col-3, .danzerpress-col-2, .danzerpress-col-1 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 15px;\n}\n\n.danzerpress-col-1 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.danzerpress-col-2 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\ncard-list.grid property-card, .danzerpress-col-3 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.danzerpress-col-4 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.danzerpress-col-5 {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n/*--------------------------------------------------------------\n##Position Overrides\n--------------------------------------------------------------*/\np,\nli,\na,\nul,\ninput,\ntextarea {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  color: #333333;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\nhtml .main-content {\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\ncard-list.grid {\n  display: -ms-flexbox;\n  display: flex;\n}\n\@media screen and (max-width: 1024px) {\n  card-list.grid property-card {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\@media screen and (max-width: 900px) {\n  card-list.grid property-card {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}"; }
};

export { CardList as card_list };