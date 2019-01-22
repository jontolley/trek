import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BtnGroupOptions } from '../../shared/components/btn-group/btn-group-option';

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
  post: any;
  name = '';

  registrationTypes: BtnGroupOptions;
  genderTypes: BtnGroupOptions;

  wards = ['Belle Terre', 'Bowdish', 'Dishman Mica', 'Evergeen', 'Painted Hills', 'Pines', 'Ponderosa', '4th Branch', 'Terrace View'];

  constructor(private fb: FormBuilder) {
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
      'dob': [null, Validators.required],
      'parentName': [null, Validators.required],
      'parentPhone': [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      'parentEmail': [null, Validators.email],
      'emergencyContactName': [null, Validators.required],
      'emergencyContactPhone': [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]]
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
          this.dob.setValidators([Validators.required]);   
          this.parentName.setValidators([Validators.required]);   
          this.parentPhone.setValidators([Validators.required, Validators.minLength(14), Validators.maxLength(14)]);              
        }

        this.dob.updateValueAndValidity();
        this.parentName.updateValueAndValidity();
        this.parentPhone.updateValueAndValidity();
      });
  }

  addPost() {
    if (this.rForm.invalid) {
      this.submitFailed = true;
      console.log('invalid', this.rForm.value);
      return;
    }

    console.log('is valid', this.rForm.value);
    this.submiting = true;
    this.submitted = true;
    this.name = `${this.nameFirst.value} ${this.nameLast.value}`;
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
