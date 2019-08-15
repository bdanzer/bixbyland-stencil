import { r as registerInstance, c as getContext, h, H as Host } from './core-365f7bf1.js';
import { a as loadDataBegin } from './data-ad099704.js';

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
        console.log('posts CardList', this.posts);
        console.log('items', this.items);
        return (this.posts && h(Host, null, this.posts.map(post => {
            return (h("property-card", { onClick: () => this.handleCard(post), activePostId: this.activePostId, postData: post }));
        })));
    }
    static get style() { return ""; }
};

export { CardList as card_list };
