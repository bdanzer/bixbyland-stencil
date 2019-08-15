import { h } from "@stencil/core";
import noUiSlider from 'nouislider';
export class NoUiSliderWrapper {
    componentDidLoad() {
        this.createSlider();
    }
    createSlider() {
        this.slider = this.el;
        // const { onUpdate, onChange, onSlide, onStart, onEnd, onSet } = props;
        const sliderComponent = noUiSlider.create(this.slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            tooltips: true,
        });
        if (this.onStart) {
            sliderComponent.on("start", this.onStart);
        }
        if (this.onSlide) {
            sliderComponent.on("slide", this.onSlide);
        }
        if (this.onUpdate) {
            sliderComponent.on("update", this.onUpdate);
        }
        if (this.onChange) {
            sliderComponent.on("change", this.onChange);
        }
        if (this.onSet) {
            sliderComponent.on("set", this.onSet);
        }
        if (this.onEnd) {
            sliderComponent.on("end", this.onEnd);
        }
    }
    ;
    onChange(_values, _handle, _unencoded, _tap, _positions) {
        console.log(_values, _handle, _unencoded, _tap, _positions);
    }
    onEnd(_values, _handle, _unencoded, _tap, _positions) { }
    onSet(_values, _handle, _unencoded, _tap, _positions) { }
    onSlide(_values, _handle, _unencoded, _tap, _positions) { }
    onStart(_values, _handle, _unencoded, _tap, _positions) { }
    onUpdate(_values, _handle, _unencoded, _tap, _positions) { }
    render() {
        return [
            h("slot", { name: "title" }),
            h("div", { ref: el => this.el = el, id: "double-slider" })
        ];
    }
    static get is() { return "no-ui-slider-wrapper"; }
    static get originalStyleUrls() { return {
        "$": ["no-ui-slider-wrapper.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["no-ui-slider-wrapper.css"]
    }; }
    static get properties() { return {
        "title": {
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
            "attribute": "title",
            "reflect": false
        },
        "slider": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Element",
                "resolved": "Element",
                "references": {
                    "Element": {
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
        "el": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Element",
                "resolved": "Element",
                "references": {
                    "Element": {
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
        }
    }; }
}
