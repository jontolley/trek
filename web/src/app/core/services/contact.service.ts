import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService } from './data.service';
import { TrekContact } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class ContactService {  

  constructor(private dataService: DataService) { }

  public sendContactMessage(contact: TrekContact): Observable<TrekContact> {
    return new Observable<TrekContact>(observer => {
      this.dataService.sendContactRequest(contact)
        .pipe(take(1))
        .subscribe(
          data => {
            observer.next(data);
          },
          error => {
            observer.error(error);
          },
          () => {
            observer.complete();
          }
        )
    });
  }
}
