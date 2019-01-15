import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'trek-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description = '';
  name = '';
  titleAlert = 'This field is required';

  wards = ['Bowdish', 'Ponderosa', 'Dishman Mica'];
  heightFeet = [4, 5, 6, 7];
  heightInches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'isAdult': [false, Validators.required],
      'name': [null, Validators.required],
      'gender': [null, Validators.required],
      'ward': [null, Validators.required],
      'peanutAllergy': [false, Validators.required],
      'glutenAllergy': [false, Validators.required],
      'dob': [null],
      'feet': [null],
      'inches': [null],
      'weight': [null],
      'policyNumber': [null],
      'groupNumber': [null],
      'parentName': [null],
      'parentPhone': [null],
      'parentEmail': [null],
      'emergencyContactName': [null, Validators.required],
      'emergencyContactEmail': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.rForm.get('isAdult').valueChanges.subscribe(

      (isAdult) => {

          if (isAdult === '1') {
              this.rForm.get('dob').setValidators([Validators.required]);
              // this.titleAlert = 'You need to specify a date of birth';
          } else {
              this.rForm.get('dob').setValidators(null);
          }
          this.rForm.get('dob').updateValueAndValidity();

      });
  }

  addPost(post: any) {
    console.log(post);

    this.description = post.description;
    this.name = post.name;
  }

}
