import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '../google-map/google-map';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule, CommonModule, GoogleMapComponent],
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
      default:
        break;
    }
  }
}
