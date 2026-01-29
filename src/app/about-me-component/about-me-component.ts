import { Component, inject } from '@angular/core';
import { FooterClau } from '../footer-clau/footer-clau';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-component',
  imports: [FooterClau],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css'
})
export class AboutMeComponent {

  private _router = inject(Router);

  protected openArticles() {
    this._router.navigate(['/articles']);
  }
}
