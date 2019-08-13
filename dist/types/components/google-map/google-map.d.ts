export declare class GoogleMap {
    posts: any;
    handleMarker: Function;
    activePostId: any;
    map: any;
    markersObj: any;
    componentDidLoad(): void;
    postsWatch(_newData: any, _oldData: any): void;
    activePostIdWatch(newId: any, oldId: any): void;
    addMarkers(): void;
    clearMarkers(): void;
    render(): any;
}
