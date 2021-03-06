import {Component, h, Prop, Watch, State} from '@stencil/core';
import * as R from 'ramda';
import axios from 'axios';
import {Store} from "@stencil/redux";

declare var google: any;

@Component({
  tag: 'google-map',
  styleUrl: 'google-map.scss'
})
export class GoogleMap {
  @Prop({context: "store"}) store: Store;
  @Prop() posts: any = [];
  @Prop() handleMarker: Function;
  @Prop() activePostId: any = false;
  @Prop({mutable: true}) baseUrl;

  @State() mapObject;
  @State() icons: any;

  map: any;
  markersObj: any = {};

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: {baseUrl}
      } = state;
      return {
        baseUrl
      };
    });

    this.mapObject = new google.maps.Map(this.map, {
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      }
    });

    (async () => {
      await this.getIcons();

      var centerControlDiv = document.createElement('div');
      this.CenterControl(centerControlDiv, this.mapObject);

      centerControlDiv['index'] = 1;
      this.mapObject.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
    })();
  }

  @Watch('posts')
  postsWatch(_newData, _oldData) {
    this.clearMarkers();
    this.getIcons();
    this.setCenter();
  }

  @Watch('activePostId')
  activePostIdWatch(newId, oldId) {
    if (newId !== oldId) {
      let markerData = this.markersObj[newId];
      this.clearMarkers();
      this.getIcons();
      this.mapObject.setCenter(markerData.position);
      this.mapObject.setZoom(9);
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
    controlText.style.padding = '10px';
    controlText.style.lineHeight = '0';
    controlText.innerHTML = `<img style="max-width: 25px" src="${this.icons.google_map_current_location}">`;
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
    if (this.posts.length == 1) {
      this.mapObject.setCenter(new google.maps.LatLng(this.posts[0].meta.latitude[0], this.posts[0].meta.longitude[0]));
      this.mapObject.setZoom(9);
    } else if (this.posts.length > 1) {
      let latLongs = new google.maps.LatLngBounds();
      this.posts.forEach(function (post) {
        latLongs.extend(new google.maps.LatLng(post.meta.latitude[0], post.meta.longitude[0]));
      });
      this.mapObject.fitBounds(latLongs);
    } else {
      this.mapObject.setCenter(39.8097343, -98.5556199);
      this.mapObject.setZoom(4);
    }
  }

  addMarker(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: this.mapObject
    });

    marker.setMap(this.mapObject);
  }

  async getIcons() {
    if (!this.icons) {
      let res = await axios.get(this.baseUrl + '/wp-json/bixby/v1/theme-settings');
      let icons = R.map((themeOptions) => {
        return this.baseUrl + themeOptions.url
      }, res.data);

      this.icons = icons;
    }

    this.addMarkers();
  }

  /**
   * TODO: clean up for a better solution
   */
  getIconType(post) {
    if (this.activePostId === post.ID && post.categories[0]['slug'] == 'office') {
      return (this.icons && this.icons.google_map_office_active_icon) ? this.icons.google_map_office_active_icon : '';
    }

    if (this.activePostId === post.ID && post.categories[0]['slug'] == 'industrial') {
      return (this.icons && this.icons.google_map_property_active_icon) ? this.icons.google_map_property_active_icon : '';
    }

    if (post.categories[0]['slug'] == 'industrial') {
      return (this.icons && this.icons.google_map_property_icon) ? this.icons.google_map_property_icon : '';
    }

    //otherwise it's an office image
    return (this.icons && this.icons.google_map_office_icon) ? this.icons.google_map_office_icon : '';
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
        lat: parseFloat(post.meta.latitude[0]),
        lng: parseFloat(post.meta.longitude[0])
      };

      var marker = new google.maps.Marker({
        position: position,
        map: this.mapObject,
        icon: this.getIconType(post)
      });

      let markerObj = {
        ID: post.ID,
        categories: post.categories,
        marker: marker,
        position: position,
        post: post
      }

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
  }

  clearMarkers() {
    for (let markerObj in this.markersObj) {
      this.markersObj[markerObj].marker.setMap(null);
    }

    this.markersObj = {};
  }

  render() {
    return (
      <div id="map" ref={el => this.map = el}></div>
    );
  }
}
