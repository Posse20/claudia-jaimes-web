import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FooterClau } from '../footer-clau/footer-clau';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-component',
  imports: [FooterClau],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css'
})
export class AboutMeComponent implements AfterViewInit {

  @ViewChild('autoVideo', { static: true }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('autoVideo1', { static: true }) video1!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {

    if (window.innerWidth < 500) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.video1.nativeElement.play().catch(() => {});
          } else {
            this.video1.nativeElement.pause();
          }
        });
      }, { threshold: 0.2 }); // 50% visible

      observer.observe(this.video1.nativeElement);
    }else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.video.nativeElement.play();
          } else {
            this.video.nativeElement.pause();
          }
        });
      }, { threshold: 0.2 }); // 50% visible

      observer.observe(this.video.nativeElement);
    }

  }

  private _router = inject(Router);

  protected openArticles() {
    this._router.navigate(['/articles']);
  }
}
