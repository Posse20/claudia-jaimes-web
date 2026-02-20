import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Article } from "../Details/Articles";
import * as Papa from 'papaparse';

@Injectable({providedIn: 'root'})
export class ArticlesService {

    private readonly CVS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOXTV7enMWER9_LMNqnFuErIZ0tWlHy5kQg2v4s7K3j4qI8vjlH1b_DIi-nj4K2IffPuF2QnqclJtH/pub?output=csv'

    constructor(
        private http: HttpClient
    ){

    }

    getArticles(): Observable<Article[]> {
        return this.http.get(this.CVS_URL, { responseType: 'text' }).pipe(
        map(csv => {
            const parsed = Papa.parse(csv, {
            header: true,       // Usa la primera fila como headers
            skipEmptyLines: true
            });

            return parsed.data.map((row: any) => ({
            name: row['name'],  // asegúrate que tu columna se llame así
            link: row['link']
            }));
        })
        );
    }
}