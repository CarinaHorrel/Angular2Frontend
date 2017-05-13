import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MoviesComponent, children: [
        // { path: 'adddvd'         ,   component: AdddvdComponent },
        // { path: 'addactor'       ,   component: AddActorComponent },  
        // { path: 'addgenre'       ,   component: AddGenreComponent },
        { path: 'actortoevoegen'         ,   component: ActorToevoegenComponent },
    ] },
    { path: 'music', component: MusicComponent },
    { path: 'books', component: BooksComponent },
    { path: 'contact', component: ContactComponent },

      { path: '**'                   , redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routes: ModuleWithProviders = RouterModule.forRoot(router);