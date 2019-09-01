import { Component, h, Prop, Watch, Host } from '@stencil/core';
import noUiSlider from 'nouislider';
import * as R from 'ramda';

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

  sliderComponent: any;

  componentDidLoad() {
    this.createSlider();
  }

  @Watch('start')
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
        <div class="row">
          <span class="handle-number">1</span>
          <div ref={el => this.el = el} id="double-slider"></div>
          <span class="handle-number">600k</span>
        </div>
      </Host>
    );
  }
}
