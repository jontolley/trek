import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/static/errors/page-not-found/page-not-found.component';
import { HomeComponent, AboutComponent } from './static';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PackingComponent } from './pages/packing/packing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PackingResolver } from '@app/core';

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
    path: 'packing',
    component: PackingComponent,
    resolve: {
      packingItems: PackingResolver
    },
    data: { title: 'Packing List', state: 'packing' }
  },
  {
    path: 'cothing',
    component: ClothingComponent,
    data: { title: 'Pioneer Clothing', state: 'clothing' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'FAQ', state: 'faq' }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { title: 'Registration', state: 'registration' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us', state: 'contact' }
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
