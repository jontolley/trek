import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    private router: Router,
    private backgroundService: BackgroundService) {
      this.routing.navCollapse.subscribe((value) => this.isCollapsed = value);
    }

  isPioneerBackgroundOn() {
    return this.backgroundService.pioneerBackground;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    this.errorService.cast.subscribe(error => (this.errorObj = error));
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
