import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { environment as env } from '@env/environment';
import { Title } from '@angular/platform-browser';

import { ErrorService } from './error.service';
import { BackgroundService } from './background.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private appTitle = env.appName;

  navCollapse = new BehaviorSubject(true);

  navigationLinks = [
    { link: 'packing', label: 'Packing List' },
    { link: 'cothing', label: 'Pioneer Clothing' },
    { link: 'music', label: 'Music' },
    { link: 'faq', label: 'FAQ' },
    { link: 'registration', label: 'Registration' },
    { link: 'contact', label: 'Contact' }
  ];

  constructor(
    private errorService: ErrorService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private backgroundService: BackgroundService) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.navCollapse.next(true);
          this.errorService.clearError();
        }
  
        if (event instanceof NavigationEnd) {
          const currentRouteTitle = this.route.root.firstChild.snapshot.data.title;
          const currentPageTitle = currentRouteTitle ? `${currentRouteTitle} | ${this.appTitle}` : `${this.appTitle}`
          this.titleService.setTitle(currentPageTitle);
  
          if (event.url === '/') {
            this.backgroundService.pioneerBackground = true;
          } else { 
            this.backgroundService.pioneerBackground = false;
          }
        }
      });
    }
}
