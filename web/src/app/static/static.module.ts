import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PageNotFoundComponent, FooterComponent, AboutComponent, HomeComponent],
  exports: [
    FooterComponent
  ]
})
export class StaticModule { }
