import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/static/errors/page-not-found/page-not-found.component';
import { HomeComponent } from './static';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PackingComponent } from './pages/packing/packing.component';
import { PackingResolver, FaqResolver } from '@app/core';
import { InformationComponent } from './pages/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
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
    path: 'music',
    component: InformationComponent,
    data: { title: 'Music', state: 'music' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    resolve: {
      faqItems: FaqResolver
    },
    data: { title: 'FAQ', state: 'faq' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us', state: 'contact' }
  },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule',
    data: { title: 'Registration', state: 'registration' }
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
