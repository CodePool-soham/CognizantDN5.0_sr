import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';


// Custom synchronous validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {

  if (control.value && control.value.startsWith('XX')) {

    return {
      noCourseCode: true
    };

  }

  return null;

}


// Async validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {


    setTimeout(() => {


      if (control.value && control.value.includes('test@')) {

        resolve({
          emailTaken: true
        });

      }
      else {

        resolve(null);

      }


    }, 800);


  });

}



@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})


export class ReactiveEnrollmentForm implements OnInit {


  enrollForm!: FormGroup;


  constructor(private fb: FormBuilder) {}



  ngOnInit(){


    this.enrollForm = this.fb.group({


      studentName:[
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],



      studentEmail:[

        '',

        [
          Validators.required,
          Validators.email
        ],

        [
          simulateEmailCheck
        ]

      ],



      courseId:[

        '',

        [
          Validators.required,
          noCourseCode
        ]

      ],



      preferredSemester:[

        'Odd',

        Validators.required

      ],



      agreeToTerms:[

        false,

        Validators.requiredTrue

      ],



      additionalCourses:this.fb.array([])


    });


  }



  // Typed getter avoids casting inside HTML
 get additionalCourses(): FormArray<FormControl> {

  return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;

}



  addCourse(){


    this.additionalCourses.push(

      new FormControl('', Validators.required)

    );


  }



  removeCourse(index:number){


    this.additionalCourses.removeAt(index);


  }




  onSubmit(){


    console.log(
      "Form Value:",
      this.enrollForm.value
    );


    console.log(
      "Raw Value:",
      this.enrollForm.getRawValue()
    );


  }


  canDeactivate(): boolean {

    if (this.enrollForm.dirty) {

      return window.confirm(
        'You have unsaved changes. Leave?'
      );

    }

    return true;

  }


}



