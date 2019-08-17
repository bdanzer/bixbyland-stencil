import { Component, h, Prop, Watch, State } from '@stencil/core';

declare var google: any;

@Component({
  tag: 'google-map',
  styleUrl: 'google-map.scss'
})
export class GoogleMap {
  @Prop() posts: any = [];
  @Prop() handleMarker: Function;
  @Prop() activePostId: any = false;

  @State() mapObject;

  map: any;
  markersObj: any = {};

  componentDidLoad() 
  {
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

  @Watch('posts')
  postsWatch(_newData, _oldData) {
    this.clearMarkers();
    this.addMarkers();
  }

  @Watch('activePostId')
  activePostIdWatch(newId, oldId) {
    if (newId !== oldId) {
      let markerData = this.markersObj[newId];
      this.mapObject.setCenter(markerData.position);
    }
  }

  addMarkers() 
  {
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

    // setTimeout(() => {
    //   this.clearMarkers();
    // }, 5000);
  }

  clearMarkers()
  {
    for (let markerObj in this.markersObj) {
      this.markersObj[markerObj].marker.setMap(null);
    }

    this.markersObj = {};
  }

  render() 
  {
    return (
      <div id="map" ref={el => this.map = el}></div>
    );
  }
}
