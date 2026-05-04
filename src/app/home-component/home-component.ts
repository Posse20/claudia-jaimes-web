import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {

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

  @ViewChild('bgVideo', { static: true }) bgVideo!: ElementRef<HTMLVideoElement>;
   @ViewChild('bgVideo1', { static: true }) bgVideo1!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (window.innerWidth < 500) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.bgVideo.nativeElement.play().catch(() => {});
          } else {
            this.bgVideo.nativeElement.pause();
          }
        });
      }, { threshold: 0.2 }); // 50% visible

      observer.observe(this.bgVideo.nativeElement);
    }else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.bgVideo1.nativeElement.play();
          } else {
            this.bgVideo1.nativeElement.pause();
          }
        });
      }, { threshold: 0.2 }); // 50% visible

      observer.observe(this.bgVideo1.nativeElement);
    }
  }


  text = 'Claudia Viviana';
  text2 = 'Jaimes González';
  text1 = 'Cirugía Robótica Mínima Invasión'
  letters: string[] = [];
  letters1: string[] = [];
  letters2: string[] = [];

  
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
    this.letters = this.text.split('');
    this.letters1 = this.text1.split('');
    this.letters2 = this.text2.split('');
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
        window.open('https://marly.com.co/servicios-ambulatorios/', '_blank');
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
