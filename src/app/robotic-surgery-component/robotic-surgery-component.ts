import { Component } from '@angular/core';
import { FooterClau } from '../footer-clau/footer-clau';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robotic-surgery-component',
  imports: [FooterClau, CommonModule],
  templateUrl: './robotic-surgery-component.html',
  styleUrl: './robotic-surgery-component.css'
})
export class RoboticSurgeryComponent {

  protected showAllBenefits = false;

  protected toggleBenefits() {
    this.showAllBenefits = !this.showAllBenefits;
  }

}
