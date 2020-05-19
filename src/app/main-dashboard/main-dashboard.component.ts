import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/services/covid-api.service';
import { TwitterApiService } from 'src/services/twitter-api';
import { MouseEvent } from "@agm/core";
import { map } from 'rxjs/operators';
import { } from 'googlemaps';



@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  numberCases: any
  numberDeaths: any
  showChat: boolean = false
  feeling: any
  tweets: any

  map: google.maps.Map = null
  heatmap: google.maps.visualization.HeatmapLayer
  // myLatLng = new google.maps.LatLng({ lat: -23.618237, lng: -46.635197 });

  // here are the map variables with their initial values
  clickedButton: boolean = false
  zoom: number = 9.5

  // initial center position for the map
  lat: number = -23.618237
  lng: number = -46.635197
  markers: marker[] = []

  // here we start variables that will get the latitude and longitude values ​​of the map event click
  latitude_atual: number
  longitude_atual: number
  myParentVar = null;

  constructor(private covidApi: CovidApiService, private twitterApi: TwitterApiService) { }

  ngOnInit() {
    this.covidApi.dataCovid().subscribe((response: any) => {
      this.numberCases = response.Casos
      this.numberDeaths = response.Mortes
    })

    this.twitterApi.dataTwitter().subscribe((response: any) => {
    })
  }

  toggleChat() {
    this.showChat = !this.showChat
  }

  onMapReady(mapInstance) {

    mapInstance.setOptions({
      draggable: false, scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      maxZoom: 0,
      minZoom: 0,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#0FBFE8' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#0FBFE8' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ]
    })

    this.map = mapInstance;

    // const coords = new google.maps.LatLng({ lat: -23.618237, lng: -46.635197 });
    const coords = [
      { location: new google.maps.LatLng(-23.557387, -46.639968), weight: 3.5 },
      { location: new google.maps.LatLng(-22.912494, -47.065229), weight: 0.9 },
      { location: new google.maps.LatLng(-23.956584, -46.328731), weight: 0.5 }
    ]
    const gradient = ['rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)']

    console.log("oi")

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: coords,
      radius: 100,
      gradient,
      // opacity: 0.4,
      dissipating: true,
      maxIntensity: 5
    });
  }



  // mapClicked($event: MouseEvent) {

  //   this.markers = []
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: false
  //   });

  //   this.markers.map(element => {
  //     this.latitude_atual = element.lat
  //     this.longitude_atual = element.lng
  //   })

  //   this.myParentVar = this.latitude_atual + ',' + this.longitude_atual
  // }

}

interface marker {
  lat: number
  lng: number
  draggable: boolean
}

