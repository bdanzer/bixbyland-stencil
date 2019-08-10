import { r as registerInstance, h, H as Host } from './core-bb3fdb2f.js';

const PortfolioApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "portfolio-app" }, this.test));
    }
    static get style() { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,.portfolio-app{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,.portfolio-app{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2,.portfolio-app{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}"; }
};

export { PortfolioApp as portfolio_app };
