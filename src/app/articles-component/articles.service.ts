import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Article } from "../Details/Articles";

@Injectable({providedIn: 'root'})
export class ArticlesService {

    private readonly CVS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOXTV7enMWER9_LMNqnFuErIZ0tWlHy5kQg2v4s7K3j4qI8vjlH1b_DIi-nj4K2IffPuF2QnqclJtH/pub?gid=0&single=true&output=csv'

    constructor(
        private http: HttpClient
    ){

    }

    getArticles(): Observable<Article[]> {
        return this.http.get(this.CVS_URL, {responseType: 'text'}).pipe(map(cvs => this._parseCvs(cvs)));
    }

    private _parseCvs(cvs: string): Article[] {
        const lines = cvs.split('\n');

        return lines.slice(1).map(line => {
            const [name, link] = line.split(',');
            if(!name || !link){
                return null;
            }

            return {
                name: name.trim(),
                link: link.trim()
            }
        }).filter(Boolean) as Article[];
    }
}