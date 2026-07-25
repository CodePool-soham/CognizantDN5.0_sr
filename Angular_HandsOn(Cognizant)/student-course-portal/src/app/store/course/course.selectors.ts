import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { CourseState } from './course.reducer';


// Select the complete Course State
export const selectCourseState =
  createFeatureSelector<CourseState>(
    'course'
  );


// Select all courses
export const selectAllCourses =
  createSelector(

    selectCourseState,

    (state: CourseState) =>
      state.courses

  );


// Select loading status
export const selectCoursesLoading =
  createSelector(

    selectCourseState,

    (state: CourseState) =>
      state.loading

  );


// Select error
export const selectCoursesError =
  createSelector(

    selectCourseState,

    (state: CourseState) =>
      state.error

  );