import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  ErrorMessageComponent,
  LoadingComponent,
  ShortcutSquareComponent
} from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    ErrorMessageComponent,
    LoadingComponent,
    ShortcutSquareComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ErrorMessageComponent,
    LoadingComponent,
    ShortcutSquareComponent
  ]
})
export class SharedModule {}
