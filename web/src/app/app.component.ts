import { Component, OnInit } from '@angular/core';

import { routerTransition, ErrorService, BackgroundService, RoutingService } from '@app/core';
import { TrekError } from '@app/shared';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
  host: {
    "[class.pioneer-background]":"isPioneerBackgroundOn()" 
  }, 
})
export class AppComponent implements OnInit {
  logo = require('../assets/logo.png');
  isCollapsed = true;

  errorObj: TrekError;

  navigationLinks = this.routing.navigationLinks;

  public constructor(
    private errorService: ErrorService,
    private routing: RoutingService,
    private backgroundService: BackgroundService) {
      this.routing.navCollapse.subscribe((value) => this.isCollapsed = value);
    }

  isPioneerBackgroundOn() {
    return this.backgroundService.pioneerBackground;
  }

  ngOnInit(): void {
    this.errorService.cast.subscribe(error => (this.errorObj = error));
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
