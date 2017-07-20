import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ArtAreaComponent } from './art-area/art-area.component';
import { TechAreaComponent } from './tech-area/tech-area.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'art', component: ArtAreaComponent },
    { path: 'tech', component: TechAreaComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);