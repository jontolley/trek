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
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

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
    BtnGroupComponent,
    PhoneMaskDirective,
    PhoneNumberPipe
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorMessageComponent,
    LoadingComponent,
    BtnGroupComponent,
    PhoneMaskDirective,
    PhoneNumberPipe
  ]
})
export class SharedModule {}
