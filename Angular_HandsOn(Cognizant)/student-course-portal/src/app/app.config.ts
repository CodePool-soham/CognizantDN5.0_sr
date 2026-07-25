import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  provideStore,
  provideState
} from '@ngrx/store';

import {
  provideEffects
} from '@ngrx/effects';

import {
  provideStoreDevtools
} from '@ngrx/store-devtools';

import { routes } from './app.routes';

import {
  authInterceptor
} from './interceptors/auth-interceptor';

import {
  errorHandlerInterceptor
} from './interceptors/error-handler-interceptor';

import {
  courseReducer
} from './store/course/course.reducer';

import {
  CourseEffects
} from './store/course/course.effects';

import {
  enrollmentReducer
} from './store/enrollment/enrollment.reducer';


export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),


    provideHttpClient(

      withInterceptors([

        authInterceptor,

        errorHandlerInterceptor

      ])

    ),


    // Global NgRx Store
    provideStore(),


    // Course State
    provideState(

      'course',

      courseReducer

    ),


    // Enrollment State
    provideState(

      'enrollment',

      enrollmentReducer

    ),


    // Course Effects
    provideEffects(

      CourseEffects

    ),


    // Redux DevTools
    provideStoreDevtools({

      maxAge: 25,

      logOnly: false

    })

  ]

};