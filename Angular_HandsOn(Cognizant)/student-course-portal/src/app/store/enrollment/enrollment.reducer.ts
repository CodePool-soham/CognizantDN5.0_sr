import { createReducer, on } from '@ngrx/store';

import {
  enrollInCourse,
  unenrollFromCourse,
  setEnrolledCourses
} from './enrollment.actions';


// Enrollment State
export interface EnrollmentState {

  enrolledCourseIds: string[];

}


// Initial State
export const initialEnrollmentState: EnrollmentState = {

  enrolledCourseIds: []

};


// Reducer
export const enrollmentReducer = createReducer(

  initialEnrollmentState,


  // Enroll in a course
  on(

    enrollInCourse,

    (state, { courseId }) => {

      // Prevent duplicate enrollment
      if (
        state.enrolledCourseIds.includes(courseId)
      ) {

        return state;

      }


      return {

        ...state,

        enrolledCourseIds: [

          ...state.enrolledCourseIds,

          courseId

        ]

      };

    }

  ),


  // Unenroll from a course
  on(

    unenrollFromCourse,

    (state, { courseId }) => ({

      ...state,

      enrolledCourseIds:

        state.enrolledCourseIds.filter(

          id => id !== courseId

        )

    })

  ),


  // Set enrolled courses
  on(

    setEnrolledCourses,

    (state, { courseIds }) => ({

      ...state,

      enrolledCourseIds: courseIds

    })

  )

);