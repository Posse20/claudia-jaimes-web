import { Component } from '@angular/core';

@Component({
  selector: 'app-thirth-content-component',
  imports: [],
  templateUrl: './thirth-content-component.html',
  styleUrl: './thirth-content-component.css'
})
export class ThirthContentComponent {
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
      case 'marly':
        window.open('https://clinicademarlyjorgecaveliergaviria.com.co', '_blank');
        break;
      case 'shaio':
        window.open('https://www.shaio.org', '_blank');
        break;
      default:
        break;
    }
  }
}
