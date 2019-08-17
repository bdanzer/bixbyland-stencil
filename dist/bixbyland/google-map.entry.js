import { r as registerInstance, h } from './core-365f7bf1.js';

const GoogleMap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.posts = [];
        this.activePostId = false;
        this.markersObj = {};
    }
    componentDidLoad() {
        this.mapObject = new google.maps.Map(this.map, {
            center: {
                'lat': 34.052437,
                'lng': -118.263159
            },
            zoom: 7,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });
    }
    postsWatch(_newData, _oldData) {
        this.clearMarkers();
        this.addMarkers();
    }
    activePostIdWatch(newId, oldId) {
        if (newId !== oldId) {
            let markerData = this.markersObj[newId];
            this.mapObject.setCenter(markerData.position);
        }
    }
    addMarkers() {
        this.posts.forEach(post => {
            let position = {
                lat: parseInt(post.meta.latitude[0]),
                lng: parseInt(post.meta.longitude[0])
            };
            var marker = new google.maps.Marker({
                position: position,
                map: this.mapObject,
                title: 'Hello World!'
            });
            let markerObj = {
                ID: post.ID,
                marker: marker,
                position: position
            };
            this.markersObj[post.ID] = markerObj;
            marker.setMap(this.mapObject);
            marker.addListener('click', (e) => {
                this.handleMarker(e, markerObj, this.mapObject);
                this.mapObject.setCenter({
                    'lat': e.latLng.lat(),
                    'lng': e.latLng.lng()
                });
            });
        });
        // setTimeout(() => {
        //   this.clearMarkers();
        // }, 5000);
    }
    clearMarkers() {
        for (let markerObj in this.markersObj) {
            this.markersObj[markerObj].marker.setMap(null);
        }
        this.markersObj = {};
    }
    render() {
        return (h("div", { id: "map", ref: el => this.map = el }));
    }
    static get watchers() { return {
        "posts": ["postsWatch"],
        "activePostId": ["activePostIdWatch"]
    }; }
    static get style() { return ""; }
};

export { GoogleMap as google_map };
