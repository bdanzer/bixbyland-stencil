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
    CenterControl(controlDiv: any, _map: any): void;
    getCurrentPosition(): void;
    setCenter(): void;
    findLatitudeAvg(): {
        "lat": any;
        "lng": any;
    };
    addMarker(position: any): void;
    getIconType(post: any): string;
    addImage(url: any): {
        url: any;
        size: any;
        origin: any;
        anchor: any;
    };
    addMarkers(): void;
    clearMarkers(): void;
    render(): any;
}
