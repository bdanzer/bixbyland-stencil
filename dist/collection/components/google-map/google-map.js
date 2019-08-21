import { h } from "@stencil/core";
import * as R from 'ramda';
export class GoogleMap {
    constructor() {
        this.posts = [];
        this.activePostId = false;
        this.markersObj = {};
    }
    componentDidLoad() {
        this.mapObject = new google.maps.Map(this.map, {
            center: (this.posts.length) ? this.findLatitudeAvg() : { lat: 0, lng: 0 },
            zoom: 7,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });
        var centerControlDiv = document.createElement('div');
        this.CenterControl(centerControlDiv, this.mapObject);
        centerControlDiv['index'] = 1;
        this.mapObject.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
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
    CenterControl(controlDiv, _map) {
        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.margin = '0 20px 20px 0';
        controlUI.style.textAlign = 'center';
        controlDiv.appendChild(controlUI);
        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Find Location';
        controlUI.appendChild(controlText);
        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', () => {
            this.getCurrentPosition();
        });
    }
    getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            var currentLatitude = position.coords.latitude;
            var currentLongitude = position.coords.longitude;
            let currentPosition = {
                "lat": currentLatitude,
                "lng": currentLongitude
            };
            this.mapObject.setCenter(currentPosition);
            this.addMarker(currentPosition);
        });
    }
    setCenter() {
        this.mapObject.setCenter(this.findLatitudeAvg());
    }
    findLatitudeAvg() {
        let lat = R.mean(R.map((post) => post.meta.latitude[0], this.posts));
        let lng = R.mean(R.map((post) => post.meta.longitude[0], this.posts));
        return {
            "lat": lat,
            "lng": lng
        };
    }
    addMarker(position) {
        var marker = new google.maps.Marker({
            position: position,
            map: this.mapObject
        });
        marker.setMap(this.mapObject);
    }
    getIconType(post) {
        if (this.activePostId === post.ID) {
            // return this.addImage('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png');
        }
        if (post.categories[0]['slug'] == 'industrial') {
            // return this.addImage('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png');
        }
        //otherwise it's an office image
        return '';
    }
    addImage(url) {
        var image = {
            url: url,
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        return image;
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
                title: 'Hello World!',
                icon: this.getIconType(post)
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
                // markerObj.marker.setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png');
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
