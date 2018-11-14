import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/static/errors/page-not-found/page-not-found.component';
import { StarterRouteGuard } from '@app/core';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent, AboutComponent } from './static';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home', state: 'home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', state: 'home' }
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    data: { title: 'Favorites', state: 'favorites' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About', state: 'about' }
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
