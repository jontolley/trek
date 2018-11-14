import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorService, WinAuthInterceptor } from './services';
import { AppStateService } from './services';
import { DataService } from './services';
import { StarterRouteGuard } from './security/starter-route.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
    StarterRouteGuard,
    ErrorService,
    AppStateService,
    DataService
  ]
})
export class CoreModule {}
