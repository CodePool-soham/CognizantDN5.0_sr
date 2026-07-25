import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  EnrollmentState
} from './enrollment.reducer';

import {
  selectAllCourses
} from '../course/course.selectors';


// Select the complete Enrollment State
export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>(
    'enrollment'
  );


// Select enrolled course IDs
export const selectEnrolledIds =
  createSelector(

    selectEnrollmentState,

    (state: EnrollmentState) =>
      state.enrolledCourseIds

  );


// Select the actual enrolled Course objects
export const selectEnrolledCourses =
  createSelector(

    selectAllCourses,

    selectEnrolledIds,

    (courses, enrolledIds) =>

      courses.filter(

        course =>
          enrolledIds.includes(course.id)

      )

  );