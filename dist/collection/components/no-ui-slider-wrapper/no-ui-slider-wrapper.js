import { h, Host } from "@stencil/core";
import noUiSlider from 'nouislider';
import * as R from 'ramda';
export class NoUiSliderWrapper {
    componentDidLoad() {
        this.createSlider();
    }
    watchStart(newValue, oldValue) {
        if (!R.equals(newValue, oldValue)) {
            this.sliderComponent.updateOptions({
                start: newValue
            });
        }
    }
    createSlider() {
        this.slider = this.el;
        // const { onUpdate, onChange, onSlide, onStart, onEnd, onSet } = props;
        this.sliderComponent = noUiSlider.create(this.slider, {
            start: this.start,
            connect: true,
            range: {
                'min': 0,
                'max': 600
            },
            tooltips: true,
            format: {
                // 'to' the formatted value. Receives a number.
                to: function (value) {
                    return Math.round(value) + 'k';
                },
                // 'from' the formatted value.
                // Receives a string, should return a number.
                from: function (value) {
                    return Number(value.replace(',-', ''));
                }
            }
        });
        if (this.onStart) {
            this.sliderComponent.on("start", this.onStart);
        }
        if (this.onSlide) {
            this.sliderComponent.on("slide", this.onSlide);
        }
        if (this.onUpdate) {
            this.sliderComponent.on("update", (_values, _handle, _unencoded, _tap, _positions) => {
                this.onUpdate(_values, _handle, _unencoded, _tap, _positions);
            });
        }
        if (this.onChange) {
            this.sliderComponent.on("change", (_values, _handle, _unencoded, _tap, _positions) => {
                this.onChange(_values, _handle, _unencoded, _tap, _positions);
            });
        }
        if (this.onSet) {
            this.sliderComponent.on("set", this.onSet);
        }
        if (this.onEnd) {
            this.sliderComponent.on("end", this.onEnd);
        }
    }
    ;
    onChange(_values, _handle, _unencoded, _tap, _positions) {
        this.callback(...arguments);
    }
    onEnd(_values, _handle, _unencoded, _tap, _positions) { }
    onSet(_values, _handle, _unencoded, _tap, _positions) { }
    onSlide(_values, _handle, _unencoded, _tap, _positions) { }
    onStart(_values, _handle, _unencoded, _tap, _positions) { }
    onUpdate(_values, _handle, _unencoded, _tap, _positions) { }
    render() {
        return (h(Host, null,
            h("slot", { name: "title" }),
            h("div", { ref: el => this.el = el, id: "double-slider" })));
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
        },
        "callback": {
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
        "start": {
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
            "attribute": "start",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "start",
            "methodName": "watchStart"
        }]; }
}
