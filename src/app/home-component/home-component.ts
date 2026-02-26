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

    images: string[] = [
    'assets/imgs-carrousel/carrousel-1.webp',
    'assets/imgs-carrousel/carrousel-13.webp',
    'assets/imgs-carrousel/carrousel-10.webp',
    'assets/imgs-carrousel/carrousel-3.webp',
    'assets/imgs-carrousel/carrousel-7.webp',
    'assets/imgs-carrousel/carrousel-8.webp',
    'assets/imgs-carrousel/carrousel-11.webp',
    'assets/imgs-carrousel/carrousel-12.webp',
    'assets/imgs-carrousel/carrousel-5.webp',
    'assets/imgs-carrousel/carrousel-14.webp',
    'assets/imgs-carrousel/carrousel-15.webp',
    'assets/imgs-carrousel/carrousel-6.webp',
    'assets/imgs-carrousel/carrousel-9.webp',
    'assets/imgs-carrousel/carrousel-16.webp',
    'assets/imgs-carrousel/carrousel-17.webp',
    'assets/imgs-carrousel/carrousel-18.webp',
    'assets/imgs-carrousel/carrousel-19.webp',
    'assets/imgs-carrousel/carrousel-20.webp'
  ];

  
  protected _content = `
        <strong>Consultorio Dr. Claudia Jaimes</strong><br>
        Clínica de Marly<br>
        Consultorio 604 B
      `

  private _router = inject(Router);

  protected showToast = false;

  protected showAllBenefits = false;
  
  currentIndex = 1;
  currentIndexMob = 1;

  disableTransition = false;
  extendedImages: string[] = [];

  // swipe variables
  startX = 0;
  currentX = 0;
  isDragging = false;

  
  onTouchStart(event: TouchEvent) {
    if (window.innerWidth > 450) return; // solo mobile

    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.nextImage(); // izquierda
      } else {
        this.prevImage(); // derecha
      }
    }

    this.isDragging = false;
  }
  
  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      this.showToast = true;
    }
  }

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

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
        window.open('https://wa.me/573169318999', '_blank');
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
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        this.showToast = true;
        form.reset();

        // ocultar toast después de 3s
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      })
      .catch(() => {
        alert("Error al enviar el formulario");
      });

  }

  toggleConven() {
    this.showAllBenefits = !this.showAllBenefits;
  }

}
