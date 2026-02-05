import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '../google-map/google-map';
import { FooterClau } from '../footer-clau/footer-clau';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule, CommonModule, GoogleMapComponent, FooterClau],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);

    if (params.get('success') === 'true') {
      this.showToast = true;

      // opcional: limpiar la URL
      setTimeout(() => {
        this.showToast = false;
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 4000);
    }
  }


  
  private _router = inject(Router);

  protected showToast = false;
  
  images: string[] = [
    'assets/imgs-carrousel/carrousel-1.png',
    'assets/imgs-carrousel/carrousel-13.jpg',
    'assets/imgs-carrousel/carrousel-10.jpg',
    'assets/imgs-carrousel/carrousel-3.png',
    'assets/imgs-carrousel/carrousel-7.jpg',
    'assets/imgs-carrousel/carrousel-8.jpg',
    'assets/imgs-carrousel/carrousel-4.png',
    'assets/imgs-carrousel/carrousel-11.jpg',
    'assets/imgs-carrousel/carrousel-12.jpg',
    'assets/imgs-carrousel/carrousel-5.png',
    'assets/imgs-carrousel/carrousel-14.jpg',
    'assets/imgs-carrousel/carrousel-15.jpg',
    'assets/imgs-carrousel/carrousel-6.png',
    'assets/imgs-carrousel/carrousel-9.png',
    'assets/imgs-carrousel/carrousel-16.jpg',
    'assets/imgs-carrousel/carrousel-17.png',
    'assets/imgs-carrousel/carrousel-18.png',
    'assets/imgs-carrousel/carrousel-19.png',
    'assets/imgs-carrousel/carrousel-20.jpg'
  ];
  currentIndex = 2;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  get visibleImages(): string[] {
    const start = this.currentIndex;
    const end = start + 4;
    return this.images.concat(this.images).slice(start, end);
  }

  goHome(){
    this._router.navigate(['/']);
  }

  aboutMe(){
    this._router.navigate(['/about-me']);
  }

  roboticSurgery(){
    this._router.navigate(['/robotic-surgery']);
  }

  navigateToAssociations(key: string){
    switch (key) {
      case 'shaio':
        window.open('https://www.shaio.org/', '_blank');
        break;
      case 'country':
        window.open('https://www.clinicadelcountry.com/', '_blank');
        break;
      case 'marly-maps':
        window.open('https://maps.app.goo.gl/riWW6pgFVEfALJEy9', '_blank');
        break;
      case 'marly':
        window.open('https://marly.com.co/', '_blank');
        break;
      case 'wa':
        window.open('https://wa.me/573025305555', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/claudia-viviana-jaimes-gonzalez-a3121230b/', '_blank');
        break;
      case 'insta':
        window.open('https://www.instagram.com/claudiacx.jaimes/', '_blank');
        break;
      case 'acc':
        window.open('https://www.ascolcirugia.org', '_blank');
        break;
      case 'srs':
        window.open('https://srobotics.org', '_blank');
        break;
      case 'cmc':
        window.open('https://colegiomedicocolombiano.org', '_blank');
        break;
      case 'trogss':
        window.open('https://trogss.org', '_blank');
        break;
      case 'camec':
        window.open('https://www.camec.co', '_blank');
        break;
      case 'scopah':
        window.open('https://scopah.com/', '_blank');
        break;
      case 'colsanitas':
        window.open('https://www.colsanitas.com/', '_blank');
        break;
      case 'medisani':
        window.open('https://www.colsanitas.com/nosotros-medisanitas', '_blank');
        break;
      case 'medplus':
        window.open('https://medplus.com.co/', '_blank');
        break;
      case 'unimarly':
        window.open('https://clinicademarlyjorgecaveliergaviria.com.co/unidad-de-servicios-ambulatorios-unimarly/', '_blank');
        break;
      case 'coomeva':
        window.open('https://medicinaprepagada.coomeva.com.co/', '_blank');
        break;
      default:
        break;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault(); // evita recarga
  this.showToast = true

  }
}
