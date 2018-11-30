import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService, ErrorService } from './services';
import { StarterRouteGuard } from './security/starter-route.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    StarterRouteGuard,
    ErrorService,
    DataService
  ]
})
export class CoreModule {}
