import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppStateService } from '@app/core/services/app-state.service';

@Injectable()
export class StarterRouteGuard implements CanActivate {

  constructor(private router: Router, private appStateService: AppStateService) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const canGo: boolean = this.appStateService.items.length > 0;

    if (!canGo) {
      this.router.navigate(['favorites']);
    }

    return canGo;
  }
}
