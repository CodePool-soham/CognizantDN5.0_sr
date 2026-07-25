import { createReducer, on } from '@ngrx/store';

import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure
} from './course.actions';

import { Course } from '../../models/course.model';


// Course State
export interface CourseState {

  courses: Course[];

  loading: boolean;

  error: string | null;

}


// Initial State
export const initialCourseState: CourseState = {

  courses: [],

  loading: false,

  error: null

};


// Reducer
export const courseReducer = createReducer(

  initialCourseState,


  // When loading starts
  on(
    loadCourses,

    (state) => ({

      ...state,

      loading: true,

      error: null

    })

  ),


  // When courses load successfully
  on(

    loadCoursesSuccess,

    (state, { courses }) => ({

      ...state,

      courses,

      loading: false,

      error: null

    })

  ),


  // When loading fails
  on(

    loadCoursesFailure,

    (state, { error }) => ({

      ...state,

      loading: false,

      error

    })

  )

);