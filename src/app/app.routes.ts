import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'portfolio', component:PortfolioComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
