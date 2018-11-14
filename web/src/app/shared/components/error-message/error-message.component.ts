import { Component, OnInit, Input } from '@angular/core';
import { TrekError } from './../../models/error';

@Component({
  selector: 'trek-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input()
  error: TrekError;

  constructor() {}

  ngOnInit() {}
}
