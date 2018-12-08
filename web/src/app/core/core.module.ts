import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService, ErrorService, BackgroundService, PackingResolver, RoutingService, FaqResolver, ContactService } from './services';
import { StarterRouteGuard } from './security/starter-route.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    StarterRouteGuard,
    ErrorService,
    DataService,
    BackgroundService,
    RoutingService,
    ContactService,
    PackingResolver,
    FaqResolver
  ]
})
export class CoreModule {}
