import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PageNotFoundComponent, FooterComponent, HomeComponent],
  exports: [
    FooterComponent
  ]
})
export class StaticModule { }
