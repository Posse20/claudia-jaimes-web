import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterClau } from '../footer-clau/footer-clau';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robotic-surgery-component',
  imports: [FooterClau, CommonModule],
  templateUrl: './robotic-surgery-component.html',
  styleUrl: './robotic-surgery-component.css'
})
export class RoboticSurgeryComponent implements AfterViewInit{

  protected showAllBenefits = false;

  protected toggleBenefits() {
    this.showAllBenefits = !this.showAllBenefits;
  }

  @ViewChild('autoVideo', { static: true }) video!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.video.nativeElement.play();
        } else {
          this.video.nativeElement.pause();
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(this.video.nativeElement);
  }

}
