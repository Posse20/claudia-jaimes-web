import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutMeComponent } from './about-me-component/about-me-component';
import { RoboticSurgeryComponent } from './robotic-surgery-component/robotic-surgery-component';
import { AppoimentFormComponent } from './appoiment-form-component/appoiment-form-component';
import { ArticlesComponent } from './articles-component/articles-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'robotic-surgery', component: RoboticSurgeryComponent},
    {path: 'appoiment-form', component: AppoimentFormComponent},
    {path: 'articles', component: ArticlesComponent}
];
