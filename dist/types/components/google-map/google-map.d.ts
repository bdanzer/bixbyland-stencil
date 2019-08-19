export declare class GoogleMap {
    posts: any;
    handleMarker: Function;
    activePostId: any;
    mapObject: any;
    map: any;
    markersObj: any;
    componentDidLoad(): void;
    postsWatch(_newData: any, _oldData: any): void;
    activePostIdWatch(newId: any, oldId: any): void;
    setCenter(): void;
    findLatitudeAvg(): {
        "lat": any;
        "lng": any;
    };
    addMarkers(): void;
    clearMarkers(): void;
    render(): any;
}
