import { createAction, props } from '@ngrx/store';


// Enroll a student in a course
export const enrollInCourse = createAction(

  '[Enrollment] Enroll In Course',

  props<{
    courseId: string
  }>()

);


// Unenroll a student from a course
export const unenrollFromCourse = createAction(

  '[Enrollment] Unenroll From Course',

  props<{
    courseId: string
  }>()

);


// Set enrolled courses
export const setEnrolledCourses = createAction(

  '[Enrollment] Set Enrolled Courses',

  props<{
    courseIds: string[]
  }>()

);