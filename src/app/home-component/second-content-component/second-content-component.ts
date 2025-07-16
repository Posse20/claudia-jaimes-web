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
    'assets/imgs-carrousel/carrousel-3.png',
    'assets/imgs-carrousel/carrousel-4.png',
    'assets/imgs-carrousel/carrousel-5.png'
  ];

  activeIndex = 2;

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  next() {
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
    }
  }
}
