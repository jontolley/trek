import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { TrekContact } from '@app/shared';
import { ContactService } from '@app/core';

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

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.initializeVariables();
  }

  onSubmit() {
    
    if (this.contactForm.invalid) {
      this.submitFailed = true;
      return;
    }

    this.submiting = true;

    this.contactService.sendContactMessage(this.model)
    .subscribe(
      data => { },
      error => {
        this.submiting = false;
        this.errorMessage = error;
        console.log(error);
      },
      () => {
        this.submitted = true;
        this.submiting = false;
      }
    );
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
