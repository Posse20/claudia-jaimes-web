import { Component, inject } from '@angular/core';
import { SecondContentComponent } from './second-content-component/second-content-component';
import { ThirthContentComponent } from './thirth-content-component/thirth-content-component';
import { ForthComponent } from './forth-component/forth-component';
import { FooterComponent } from './footer-component/footer-component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [SecondContentComponent, ThirthContentComponent, ForthComponent, FooterComponent, RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

  private _router = inject(Router);
  
  images: string[] = [
    'assets/imgs-carrousel/carrousel-1.png',
    'assets/imgs-carrousel/carrousel-3.png',
    'assets/imgs-carrousel/carrousel-4.png',
    'assets/imgs-carrousel/carrousel-5.png'
  ];
  currentIndex = 0;
  selectedImage: string | null = null;

  nextImage() {
    this.selectedImage = null;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.selectedImage = null;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  openImage(imageUrl: string): void {
    console.log(imageUrl);
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
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
      case 'acc':
        window.open('https://www.ascolcirugia.org', '_blank');
        break;
      case 'srs':
        window.open('https://srobotics.org', '_blank');
        break;
      case 'cmc':
        window.open('https://colegiomedicocolombiano.org', '_blank');
        break;
      case 'spt':
        window.open('https://panamtrauma.org', '_blank');
        break;
      case 'trogss':
        window.open('https://trogss.org', '_blank');
        break;
      case 'camec':
        window.open('https://www.camec.co', '_blank');
        break;
      default:
        break;
    }
  }
}
