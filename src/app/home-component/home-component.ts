import { Component, inject } from '@angular/core';
import { SecondContentComponent } from './second-content-component/second-content-component';
import { ThirthContentComponent } from './thirth-content-component/thirth-content-component';
import { ForthComponent } from './forth-component/forth-component';
import { FooterComponent } from './footer-component/footer-component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule, CommonModule],
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
