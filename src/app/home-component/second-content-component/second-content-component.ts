import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-content-component',
  imports: [CommonModule],
  templateUrl: './second-content-component.html',
  styleUrl: './second-content-component.css'
})
export class SecondContentComponent {
  images = [
    'assets/imgs-carrousel/carrousel-1.png',
    'assets/imgs-carrousel/carrousel-2.png',
    'assets/imgs-carrousel/carrousel-3.png',
    'assets/imgs-carrousel/carrousel-4.png',
    'assets/imgs-carrousel/carrousel-5.png',
    'assets/imgs-carrousel/carrousel-6.png'
  ];

  currentIndex  = 2;

  get visibleImages(): string[] {
    const start = this.currentIndex;
    const end = start + 4;
    return this.images.concat(this.images).slice(start, end);
  }

  next() {
    console.log('next')
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
