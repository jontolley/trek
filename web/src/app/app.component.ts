import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { routerTransition, ErrorService, BackgroundService } from '@app/core';
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

  navigationLinks = [
    { link: 'packing', label: 'Packing List' },
    { link: 'cothing', label: 'Pioneer Clothing' },
    { link: 'faq', label: 'FAQ' },
    { link: 'registration', label: 'Registration' },
    { link: 'contact', label: 'Contact' },
    { link: 'about', label: 'About' }
  ];

  public constructor(
    private errorService: ErrorService,
    private router: Router,
    private backgroundService: BackgroundService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isCollapsed = true;
        this.backgroundService.pioneerBackground = false;
        errorService.clearError();
      }
    });
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
