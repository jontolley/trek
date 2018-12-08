import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TrekFaq } from '@app/shared';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FaqResolver implements Resolve<Array<TrekFaq>> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TrekFaq>> {
    return this.dataService.getFaqs().pipe(take(1));
  }
}
