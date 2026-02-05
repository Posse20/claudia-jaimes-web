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

  private _router = inject(Router);

  protected openArticles() {
    this._router.navigate(['/articles']);
  }
}
