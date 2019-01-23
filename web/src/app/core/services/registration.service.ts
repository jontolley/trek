import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService } from './data.service';
import { TrekAttendee } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private dataService: DataService) { }

  public sendRegistration(attendee: TrekAttendee): Observable<TrekAttendee> {
    return new Observable<TrekAttendee>(observer => {
      this.dataService.sendRegistration(attendee)
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
