import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {
  map,
  tap,
  catchError,
  retry,
  switchMap
} from 'rxjs/operators';

import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private apiUrl = 'http://localhost:3000/courses';


  constructor(
    private http: HttpClient
  ) {}



  // GET all courses
  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl)

    .pipe(

      // Remove courses having 0 credits
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),


      // Side effect: logging
      tap(courses => {

        console.log(
          "Courses loaded:",
          courses.length
        );

      }),


      // Retry failed requests twice
      retry(2),


      // Handle errors
      catchError(err => {

        console.log(
          "API Error:",
          err
        );


        return throwError(() =>
          new Error(
            "Failed to load courses. Please try again."
          )
        );

      })

    );

  }





  // GET course by id
getCourseById(id: string): Observable<Course> {

  return this.http.get<Course>(
    `${this.apiUrl}/${id}`
  );

}





  // switchMap example:
  // Load students after loading selected course
getCourseStudents(courseId: string) {

  return this.http.get<Course>(
    `${this.apiUrl}/${courseId}`
  )

  .pipe(

    switchMap(course => {

      console.log(
        "Course inside switchMap:",
        course
      );


      return this.http.get<any[]>(
        'http://localhost:3000/students'
      )

      .pipe(

        map(students =>
          students.filter(
            student => student.courseId === course.id
          )
        )

      );


    })

  );

}



  // POST create new course
  createCourse(
    course: Omit<Course, 'id'>
  ): Observable<Course> {


    return this.http.post<Course>(
      this.apiUrl,
      course
    );


  }





  // PUT update course
  updateCourse(
    id: string,
    course: Course
  ): Observable<Course> {


    return this.http.put<Course>(
      `${this.apiUrl}/${id}`,
      course
    );


  }





  // DELETE course
  deleteCourse(
    id: string
  ): Observable<void> {


    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );


  }


}