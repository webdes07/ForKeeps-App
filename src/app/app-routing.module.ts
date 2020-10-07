import { SelectedAlbumComponent } from './pages/selected-album/selected-album.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BookedAlbumsComponent } from './pages/booked-albums/booked-albums.component';
import { MyAlbumsComponent } from './pages/my-albums/my-albums.component';
import { SearchAlbumsComponent } from './pages/search-albums/search-albums.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: GetStartedComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/album', component: AlbumComponent, 
  children : [  
    { path: 'selected_albums', component: SelectedAlbumComponent},
    { path: 'my_albums', component: MyAlbumsComponent},
    { path: 'search_albums', component: SearchAlbumsComponent},
    { path: 'booked_albums', component: BookedAlbumsComponent}
  ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignUpComponent, LogInComponent, GetStartedComponent, HomeComponent, AlbumComponent, SelectedAlbumComponent, SearchAlbumsComponent, MyAlbumsComponent, BookedAlbumsComponent, PageNotFoundComponent ]