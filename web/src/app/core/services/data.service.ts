import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User, TrekItem, TrekShortcut } from '@app/shared';
import { environment as env } from '@env/environment';
import { ErrorService } from '@app/core/services/error.service';

@Injectable()
export class DataService {
  private baseUrl: string = env.apiUrl;

  constructor(private errorService: ErrorService, private httpClient: HttpClient) {}

  public getUser(): Observable<User> {
    const uri = `${this.baseUrl}/user`;
    return this.httpClient.get<User>(uri).pipe(
      catchError(this.errorService.handleHttpError)
    );
  }

  public getShortcuts(): Observable<Array<TrekShortcut>> {
    const uri = `${this.baseUrl}/shortcuts?$orderby=Name`;
    return this.httpClient
      .get<Array<TrekShortcut>>(uri)
      .pipe(
        catchError(this.errorService.handleHttpError)
      );
  }

  public getAllItems(): Observable<TrekItem[]> {
    const products: TrekItem[] = [
      {
        id: 1,
        name: 'MacBook Pro',
        description: 'Cool MacBook Pro'
      },
      {
        id: 2,
        name: 'iPhone X',
        description: 'Cool iPhone X'
      }
    ];

    return of(products);

    // const uri = `/api/items`;
    // return this.httpClient.get(`${this.baseUrl}${uri}`).catch(this.errorService.handleHttpError);
  }
}
