import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: 'HomePage'}},
    { path: 'portfolio', component:PortfolioComponent, data: { animation: 'PortfolioPage'}},
    { path: 'contact', component: ContactComponent , data: { animation: 'ContactPage'}},
    { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage'}},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
