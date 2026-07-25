import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {


  @Input() course!: Course;


  isExpanded = false;


  enrolledIds$: Observable<string[]>;


  constructor(

    private store: Store,

    private router: Router

  ) {

    this.enrolledIds$ =

      this.store.select(

        selectEnrolledIds

      );

  }


  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }


  get cardClasses() {

    return {

      'card--full':
        this.course.credits >= 4,

      'expanded':
        this.isExpanded

    };

  }


toggleEnrollment(): void {

  console.log(
    'ENROLL BUTTON CLICKED:',
    this.course.id
  );


  this.enrolledIds$
    .pipe(take(1))
    .subscribe(enrolledIds => {


      console.log(
        'CURRENT ENROLLED IDS:',
        enrolledIds
      );


      if (enrolledIds.includes(this.course.id)) {


        console.log(
          'DISPATCHING UNENROLL'
        );


        this.store.dispatch(

          unenrollFromCourse({

            courseId: this.course.id

          })

        );


      } else {


        console.log(
          'DISPATCHING ENROLL'
        );


        this.store.dispatch(

          enrollInCourse({

            courseId: this.course.id

          })

        );


      }

    });

}


  openCourse(): void {


    this.router.navigate(

      [

        'courses',

        this.course.id

      ]

    );

  }

}