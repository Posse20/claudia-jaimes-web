import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private _router = inject(Router);

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  text = 'Claudia Viviana \n Jaimes González';
  text1 = 'Cirugía Robótica Mínima Invasión'
  letters: string[] = [];
  letters1: string[] = [];

  ngOnInit(): void {
    this.letters = this.text.split('');
    this.letters1 = this.text1.split('');
  }

  returnHome() {
    this._router.navigate(['/']);
  }
}
