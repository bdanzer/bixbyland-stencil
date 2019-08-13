import { r as registerInstance, h, H as Host } from './core-79479660.js';

const CardList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = false;
    }
    render() {
        return (this.posts && h(Host, null, this.posts.map(post => {
            return (h("property-card", { onClick: () => this.handleCard(post), activePostId: this.activePostId, postData: post }));
        })));
    }
    static get style() { return ""; }
};

export { CardList as card_list };
