import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Article } from '../Details/Articles';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FooterClau } from '../footer-clau/footer-clau';

@Component({
  selector: 'app-articles-component',
  imports: [FormsModule, CommonModule, FooterClau],
  templateUrl: './articles-component.html',
  styleUrl: './articles-component.css'
})
export class ArticlesComponent implements OnInit {

  protected articles: Article[] = [];
  protected filteredArticles: Article[] = [];

  constructor(
    private _articlesService: ArticlesService
  ){}

  ngOnInit(): void {
    this._articlesService.getArticles().subscribe({
      next: data => {
        this.articles = data;
        this.filteredArticles = this.articles;
      }
    })
  }

  protected _onSearch(event: Event){
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredArticles = this.articles.filter(x => x.name.toLowerCase().includes(value));

  }



}
