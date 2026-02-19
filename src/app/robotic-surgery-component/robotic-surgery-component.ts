import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterClau } from '../footer-clau/footer-clau';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '../google-map/google-map';

@Component({
  selector: 'app-robotic-surgery-component',
  imports: [FooterClau, CommonModule, GoogleMapComponent],
  templateUrl: './robotic-surgery-component.html',
  styleUrl: './robotic-surgery-component.css'
})
export class RoboticSurgeryComponent implements AfterViewInit{

  protected showAllBenefits = false;

  protected _contentMarly = `<strong>Consultorio Clínica de Marly</strong>`

  protected _contentShaio = `<strong>Consultorio Clínica Shaio</strong>`

  protected _contentCountry = `<strong>Consultorio Clínica Country</strong>`

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
