import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';

import {
  loadCourses
} from '../../store/course/course.actions';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {


  courses$!: Observable<Course[]>;


  isLoading$!: Observable<boolean>;


  errorMessage$!: Observable<string | null>;


  searchTerm = '';



  constructor(

    private store: Store,

    private router: Router,

    private route: ActivatedRoute

  ) {}



  ngOnInit(): void {


    console.log(
      'CourseList initialized'
    );


    this.courses$ =

      this.store.select(
        selectAllCourses
      );



    this.isLoading$ =

      this.store.select(
        selectCoursesLoading
      );



    this.errorMessage$ =

      this.store.select(
        selectCoursesError
      );



    this.store.dispatch(

      loadCourses()

    );



    this.searchTerm =

      this.route.snapshot
        .queryParamMap
        .get('search') || '';

  }



  trackByCourseId(

    index: number,

    course: Course

  ): string {

    return course.id;

  }



  onSearch(): void {


    this.router.navigate(

      ['courses'],

      {

        queryParams: {

          search: this.searchTerm

        }

      }

    );

  }


}