import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SignPadService {

  private signatureCapturedSource = new Subject<string>();
  signatureCaptured$ = this.signatureCapturedSource.asObservable();

  constructor() { }

  capturedSignature(signature: string) {
    this.signatureCapturedSource.next(signature);
  }

}
