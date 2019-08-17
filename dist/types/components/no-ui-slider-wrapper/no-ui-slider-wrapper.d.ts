export declare class NoUiSliderWrapper {
    title: string;
    slider: Element;
    el: Element;
    callback: Function;
    start: any;
    sliderComponent: any;
    componentDidLoad(): void;
    watchStart(newValue: any, oldValue: any): void;
    createSlider(): void;
    onChange(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    onEnd(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    onSet(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    onSlide(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    onStart(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    onUpdate(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    render(): any[];
}
