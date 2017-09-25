import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeroService } from './hero-service/hero-service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DashboardComponent,
    HeroListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
