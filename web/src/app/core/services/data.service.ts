import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TrekPackingItem, TrekFaq, TrekContact, TrekAttendee } from '@app/shared';
import { environment as env } from '@env/environment';
import { ErrorService } from '@app/core/services/error.service';

@Injectable()
export class DataService {
  private baseUrl: string = env.apiUrl;

  constructor(private errorService: ErrorService, private httpClient: HttpClient) {}

  public getPackingItems(): Observable<Array<TrekPackingItem>> {
    const uri = `${this.baseUrl}/api/packingItems`;
    return this.httpClient
      .get<Array<TrekPackingItem>>(uri)
      .pipe(
        catchError(this.errorService.handleHttpError)
      );
  }
  
  public getFaqs(): Observable<Array<TrekFaq>> {
    const uri = `${this.baseUrl}/api/faqs`;
    return this.httpClient
      .get<Array<TrekFaq>>(uri)
      .pipe(
        catchError(this.errorService.handleHttpError)
      );
  }
}
