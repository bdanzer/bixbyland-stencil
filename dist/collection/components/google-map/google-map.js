import { h } from "@stencil/core";
import * as R from 'ramda';
export class GoogleMap {
    constructor() {
        this.posts = [];
        this.activePostId = false;
        this.markersObj = {};
    }
    componentDidLoad() {
        console.log(this.posts, 'google map');
        this.mapObject = new google.maps.Map(this.map, {
            center: this.findLatitudeAvg(),
            zoom: 7,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });
        this.addMarkers();
    }
    postsWatch(_newData, _oldData) {
        this.clearMarkers();
        this.addMarkers();
        this.setCenter();
    }
    activePostIdWatch(newId, oldId) {
        if (newId !== oldId) {
            let markerData = this.markersObj[newId];
            this.mapObject.setCenter(markerData.position);
        }
    }
    setCenter() {
        this.mapObject.setCenter(this.findLatitudeAvg());
    }
    findLatitudeAvg() {
        let lat = R.mean(R.map((post) => post.meta.latitude[0], this.posts));
        let long = R.mean(R.map((post) => post.meta.longitude[0], this.posts));
        return {
            "lat": lat,
            "lng": long
        };
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
    static get is() { return "google-map"; }
    static get originalStyleUrls() { return {
        "$": ["google-map.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["google-map.css"]
    }; }
    static get properties() { return {
        "posts": {
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
            "attribute": "posts",
            "reflect": false,
            "defaultValue": "[]"
        },
        "handleMarker": {
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
        "activePostId": {
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
            "attribute": "active-post-id",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "mapObject": {}
    }; }
    static get watchers() { return [{
            "propName": "posts",
            "methodName": "postsWatch"
        }, {
            "propName": "activePostId",
            "methodName": "activePostIdWatch"
        }]; }
}
