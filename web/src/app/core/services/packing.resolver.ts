import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TrekPackingItem } from '@app/shared';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PackingResolver implements Resolve<Array<TrekPackingItem>> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TrekPackingItem>> {
    return this.dataService.getPackingItems().pipe(take(1));
  }
}
