import { Component, h, Prop, Watch } from '@stencil/core';

declare var google: any;

@Component({
  tag: 'google-map',
  styleUrl: 'google-map.scss'
})
export class GoogleMap {
  @Prop() posts: any = [];
  @Prop() handleMarker: Function;
  @Prop() activePostId: any = false;

  map: any;
  markersObj: any = {};

  componentDidLoad() 
  {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        'lat': 0,
        'lng': 0
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
      this.map.setCenter(markerData.position);
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
        map: this.map,
        title: 'Hello World!'
      });

      let markerObj = {
        ID: post.ID,
        marker: marker,
        position: position
      }

      this.markersObj[post.ID] = markerObj;

      marker.setMap(this.map);

      marker.addListener('click', (e) => {
        this.handleMarker(e, markerObj, this.map);
        this.map.setCenter({
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
      <div id="map"></div>
    );
  }
}
