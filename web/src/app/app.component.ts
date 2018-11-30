import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { routerTransition, ErrorService } from '@app/core';
import { TrekError } from '@app/shared';

@Component({
  selector: 'trek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
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

  public constructor(private errorService: ErrorService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isCollapsed = true;
        errorService.clearError();
      }
    });
  }

  ngOnInit(): void {
    this.errorService.cast.subscribe(error => (this.errorObj = error));
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
