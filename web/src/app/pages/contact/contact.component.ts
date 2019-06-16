import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { TrekContact } from '@app/shared';

@Component({
  selector: 'trek-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  @ViewChild('contactForm') public contactForm: NgForm;

  errorMessage:string;

  submitted: boolean;
  submitFailed: boolean;
  submiting: boolean;
  model: TrekContact;

  constructor() { }

  ngOnInit() {
    this.initializeVariables();
  }

  initializeVariables() {
    this.submitted = false;
    this.submitFailed = false;
    this.submiting = false;
    this.model = new TrekContact();
  }

  reset() {
    this.errorMessage = undefined;
    this.contactForm.reset();
    this.initializeVariables();
  }

}
