import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { BtnGroupOptions } from '../../shared/components/btn-group/btn-group-option';
import { CustomValidator, TrekAttendee } from '@app/shared';
import { RegistrationService } from '@app/core';

@Component({
  selector: 'trek-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  errorMessage: string;

  rForm: FormGroup;
  submiting = false;
  submitted = false;
  submitFailed = false;

  registrationTypes: BtnGroupOptions;
  genderTypes: BtnGroupOptions;

  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  dateMask = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  wards = ['Belle Terre', 'Bowdish', 'Dishman Mica', 'Evergeen', 'Painted Hills', 'Pines', 'Ponderosa', '4th Branch', 'Terrace View'];

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registrationTypes = { multiselect: false, options: [] };
    this.registrationTypes.options.push({label: 'Youth', value: false});
    this.registrationTypes.options.push({label: 'Adult', value: true});
    
    this.genderTypes = { multiselect: false, options: [] };
    this.genderTypes.options.push({label: 'Female', value: 'female'});
    this.genderTypes.options.push({label: 'Male', value: 'male'});

    this.rForm = fb.group({
      'isAdult': [null, Validators.required],
      'nameFirst': [null, Validators.required],
      'nameLast': [null, Validators.required],
      'gender': [null, Validators.required],
      'ward': ['', Validators.required],
      'peanutAllergy': [false, Validators.required],
      'glutenAllergy': [false, Validators.required],
      'dob': [null, { validators: [Validators.required, CustomValidator.dateValidator], updateOn: 'blur' }],
      'parentName': [null, Validators.required],
      'parentPhone': [null, { validators: [Validators.required, CustomValidator.phoneValidator], updateOn: 'blur' }],
      'parentEmail': [null, { validators: [Validators.email], updateOn: 'blur' }],
      'emergencyContactName': [null, Validators.required],
      'emergencyContactPhone': [null, { validators: [Validators.required, CustomValidator.phoneValidator], updateOn: 'blur' }]
    });
  }

  get isAdult() { return this.rForm.get('isAdult'); }
  get nameFirst() { return this.rForm.get('nameFirst'); }
  get nameLast() { return this.rForm.get('nameLast'); }
  get gender() { return this.rForm.get('gender'); }
  get ward() { return this.rForm.get('ward'); }
  get peanutAllergy() { return this.rForm.get('peanutAllergy'); }
  get glutenAllergy() { return this.rForm.get('glutenAllergy'); }
  get dob() { return this.rForm.get('dob'); }
  get parentName() { return this.rForm.get('parentName'); }
  get parentPhone() { return this.rForm.get('parentPhone'); }
  get parentEmail() { return this.rForm.get('parentEmail'); }
  get emergencyContactName() { return this.rForm.get('emergencyContactName'); }
  get emergencyContactPhone() { return this.rForm.get('emergencyContactPhone'); }

  get thisIsAnAdult() {
    return this.isAdult.value;
  }

  ngOnInit() {
    this.initializeVariables();
    this.rForm.get('isAdult').valueChanges.subscribe(
      (isAdult) => {
        if (this.thisIsAnAdult) {
          this.dob.setValidators(null);
          this.parentName.setValidators(null);
          this.parentPhone.setValidators(null);
          
          this.dob.setValue(null);
          this.parentName.setValue(null);
          this.parentEmail.setValue(null);
          this.parentPhone.setValue('');

          this.parentPhone.reset();

        } else {
          this.dob.setValidators([Validators.required, CustomValidator.dateValidator]);   
          this.parentName.setValidators([Validators.required]);   
          this.parentPhone.setValidators([Validators.required, CustomValidator.phoneValidator]);              
        }

        this.dob.updateValueAndValidity();
        this.parentName.updateValueAndValidity();
        this.parentPhone.updateValueAndValidity();
      });
  }

  onSubmit() {
    if (this.rForm.invalid) {
      this.submitFailed = true;
      return;
    }

    this.submiting = true;

    let tempAttendee = {
      'isAdult': this.isAdult.value,
      'firstName': this.nameFirst.value,
      'lastName': this.nameLast.value,
      'ward': this.ward.value,
      'gender': this.gender.value,
      'peanutAllergy': this.peanutAllergy.value,
      'glutenAllergy': this.glutenAllergy.value,
      'dateOfBirth': this.dob.value ? moment(this.dob.value).toDate() : null,
      'parentName': this.parentName.value,
      'parentEmail': this.parentEmail.value,
      'parentPhone': this.parentPhone.value,
      'emergencyName': this.emergencyContactName.value,
      'emergencyPhone': this.emergencyContactPhone.value
    }
    let attendee = new TrekAttendee(tempAttendee);

    this.registrationService.sendRegistration(attendee)
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
    console.log('initialize variables');

    this.submitted = false;
    this.submitFailed = false;
    this.submiting = false;

    this.rForm.reset({
      'peanutAllergy': false,
      'glutenAllergy': false
    });
  }

  reset() {
    console.log('resetting form');

    this.errorMessage = undefined;
    this.initializeVariables();
  }

}
