
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { HeroComponent } from './../hero/hero.component';

const routes: Routes =[
  {
    path: '', redirectTo:'/dashboard', pathMatch: 'full'
  },
  {
    path: 'heroes', component:HeroListComponent
  },
  {
    path: 'detail/:id', component: HeroComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}