import { Component, h, Prop } from '@stencil/core';
import noUiSlider from 'nouislider';

@Component({
  tag: 'no-ui-slider-wrapper',
  styleUrl: 'no-ui-slider-wrapper.scss'
})
export class NoUiSliderWrapper {
  @Prop() title: string;
  @Prop() slider: Element;
  @Prop() el: Element;

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
  };

  onChange(_values, _handle, _unencoded, _tap, _positions) {
    console.log(_values, _handle, _unencoded, _tap, _positions);
  }

  onEnd(_values, _handle, _unencoded, _tap, _positions) {}

  onSet(_values, _handle, _unencoded, _tap, _positions) {}

  onSlide(_values, _handle, _unencoded, _tap, _positions) {}

  onStart(_values, _handle, _unencoded, _tap, _positions) {}

  onUpdate(_values, _handle, _unencoded, _tap, _positions) {}

  render() {
    return [
      <slot name="title"/>,
      <div ref={el => this.el = el} id="double-slider"></div>
    ];
  }
}
