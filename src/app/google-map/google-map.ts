import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.html',
  styleUrl: './google-map.css'
})
export class GoogleMapComponent implements AfterViewInit {

  @ViewChild('map', { static: false }) mapRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    console.log(this.mapRef.nativeElement);

    const map = new google.maps.Map(this.mapRef.nativeElement, {
      center: {
        lat: 4.636849617999522,
        lng: -74.0650520876891
      },
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: {
        lat: 4.636849617999522,
        lng: -74.0650520876891
      },
      map,
      title: 'Consultori Dra. Jaimes',
      icon: {
        url: 'assets/logos/logo-clau/logo-maps.png',
        scaledSize: new google.maps.Size(100, 100),
        anchor: new google.maps.Point(30, 60)
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <strong>Consultorio Dr. Claudia Jaimes</strong><br>
        Clínica de Marly<br>
        Consultorio 604 B
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    });

  }

}
