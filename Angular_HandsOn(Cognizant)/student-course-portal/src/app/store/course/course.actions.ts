import { createAction, props } from '@ngrx/store';

import { Course } from '../../models/course.model';


// Load courses from API
export const loadCourses =
  createAction(
    '[Course] Load Courses'
  );


// Courses loaded successfully
export const loadCoursesSuccess =
  createAction(

    '[Course] Load Courses Success',

    props<{
      courses: Course[]
    }>()

  );


// Courses failed to load
export const loadCoursesFailure =
  createAction(

    '[Course] Load Courses Failure',

    props<{
      error: string
    }>()

  );