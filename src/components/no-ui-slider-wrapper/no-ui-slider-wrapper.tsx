import { Component, h, Prop, Host, Watch } from '@stencil/core';
import noUiSlider from 'nouislider';
import { formatLargeNumber } from '../../utils/utils';
//import * as R from 'ramda';

/**
 * TODO: Need to figure out a better way to set min/mix and start
 */
@Component({
  tag: 'no-ui-slider-wrapper',
  styleUrl: 'no-ui-slider-wrapper.scss'
})
export class NoUiSliderWrapper {
  @Prop() title: string;
  @Prop() slider: Element;
  @Prop() el: Element;
  @Prop() callback: Function;

  @Prop() start: any;
  @Prop() min: any;
  @Prop() max: any;

  sliderComponent: any;

  componentDidLoad() {
    this.createSlider();
  }

  @Watch('start')
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
  };

  onChange(_values, _handle, _unencoded, _tap, _positions) {
    this.callback(...arguments);
  }

  onEnd(_values, _handle, _unencoded, _tap, _positions) {}

  onSet(_values, _handle, _unencoded, _tap, _positions) {}

  onSlide(_values, _handle, _unencoded, _tap, _positions) {}

  onStart(_values, _handle, _unencoded, _tap, _positions) {}

  onUpdate(_values, _handle, _unencoded, _tap, _positions) {}

  render() {
    return (
      <Host>
        <slot name="title"/>
        <div class="bixby-slider-row">
          <span class="handle-number">{formatLargeNumber(this.min)}</span>
          <div ref={el => this.el = el} id="double-slider"></div>
          <span class="handle-number">{formatLargeNumber(this.max)}</span>
        </div>
      </Host>
    );
  }
}
