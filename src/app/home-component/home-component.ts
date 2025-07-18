import { Component } from '@angular/core';
import { SecondContentComponent } from './second-content-component/second-content-component';
import { ThirthContentComponent } from './thirth-content-component/thirth-content-component';

@Component({
  selector: 'app-home-component',
  imports: [SecondContentComponent, ThirthContentComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
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
}
