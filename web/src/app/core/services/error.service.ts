import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';

import { TrekError } from '@app/shared';

@Injectable()
export class ErrorService {
  cast = new Subject<TrekError>();

  constructor() {}

  handleError(error) {
    console.error(error);
  }

  handleHttpError(error: HttpErrorResponse) {
    const errorObj: TrekError = {
      code: error.status,
      codeText: error.statusText,
      message: error.message
    };
    return throwError(errorObj);
  }

  broadcastError(error) {
    this.cast.next(error);
  }

  clearError() {
    this.cast.next();
  }
}
