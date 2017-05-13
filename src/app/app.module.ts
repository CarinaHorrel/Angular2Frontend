import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }             from './app.routing.module';
// import { AlertModule }                  from 'ng2-bootstrap';

// import { RouterModule } from '@angular/router';
// import { routes } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorToevoegenComponent } from './movies/actortoevoegen.component';
// import { AddDvdComponent } from './movies/adddvd.component';
// import { AddActorComponent } from './movies/addactor.component';
// import { AddGenreComponent } from './movies/addgenre.component';
import { MusicComponent } from './music/music.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { AppGlobalService }             from './app.global.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    ActorToevoegenComponent,
    // AddDvdComponent,
    // AddActorComponent,
    // AddGenreComponent,
    // MusicComponent,
    BooksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppGlobalService,
    // RouterModule,
    // routes
  ],
  providers: [AppGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
