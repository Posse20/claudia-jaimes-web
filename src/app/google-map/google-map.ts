import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.html',
  styleUrl: './google-map.css'
})
export class GoogleMapComponent implements AfterViewInit {

  /**
   * Default lat and lng is Bogotá 
   */
  @Input() lat: number = 4.7110;
  @Input() lng: number = -74.0721;
  @Input() isUrl: boolean = true;
  @Input() title: string = '';
  @Input() content: string = '';

  @ViewChild('map', { static: false }) mapRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    console.log(this.mapRef.nativeElement);

    const map = new google.maps.Map(this.mapRef.nativeElement, {
      center: {
        lat: this.lat,
        lng: this.lng
      },
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: {
        lat: this.lat,
        lng: this.lng
      },
      map,
      title: this.title,
        icon: this.isUrl
        ? {
            url: 'assets/logos/logo-clau/logo-maps.png',
            scaledSize: new google.maps.Size(100, 100),
            anchor: new google.maps.Point(30, 60),
          }
        : {
            path: 'M12 2 C8.13 2 5 5.13 5 9 c0 5.25 7 13 7 13 s7-7.75 7-13 c0-3.87-3.13-7-7-7 z M12 6.5 a2.5 2.5 0 1 1 0 5 a2.5 2.5 0 1 1 0-5',
            fillColor: '#173759',     // 🔵 AZUL
            fillOpacity: 1,
            strokeColor: '#112034',  // borde azul oscuro
            strokeWeight: 2,
            scale: 1.5,
            anchor: new google.maps.Point(12, 24),
          }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: this.content
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    });

  }

}
