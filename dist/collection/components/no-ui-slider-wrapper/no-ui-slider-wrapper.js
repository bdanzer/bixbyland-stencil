import { h, Host } from "@stencil/core";
import noUiSlider from 'nouislider';
import { formatLargeNumber } from '../../utils/utils';
//import * as R from 'ramda';
/**
 * TODO: Need to figure out a better way to set min/mix and start
 */
export class NoUiSliderWrapper {
    componentDidLoad() {
        this.createSlider();
    }
    watchStart(newValue, _oldValue) {
        this.sliderComponent.updateOptions({
            start: newValue,
            range: {
                min: parseInt(newValue[0]),
                max: parseInt(newValue[1])
            }
        });
    }
    createSlider() {
        this.slider = this.el;
        // const { onUpdate, onChange, onSlide, onStart, onEnd, onSet } = props;
        this.sliderComponent = noUiSlider.create(this.slider, {
            start: this.start,
            connect: true,
            range: {
                'min': parseInt(this.min),
                'max': parseInt(this.max)
            },
            tooltips: true,
            format: {
                // 'to' the formatted value. Receives a number.
                to: function (value) {
                    return formatLargeNumber(Math.floor(value));
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
            h("div", { class: "bixby-slider-row" },
                h("span", { class: "handle-number" }, formatLargeNumber(this.min)),
                h("div", { ref: el => this.el = el, id: "double-slider" }),
                h("span", { class: "handle-number" }, formatLargeNumber(this.max)))));
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
        },
        "min": {
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
            "attribute": "min",
            "reflect": false
        },
        "max": {
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
            "attribute": "max",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "start",
            "methodName": "watchStart"
        }]; }
}
