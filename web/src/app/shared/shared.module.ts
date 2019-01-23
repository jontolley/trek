import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  ErrorMessageComponent,
  LoadingComponent,
  BtnGroupComponent
} from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ErrorMessageComponent,
    LoadingComponent,
    BtnGroupComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorMessageComponent,
    LoadingComponent,
    BtnGroupComponent
  ]
})
export class SharedModule {}
