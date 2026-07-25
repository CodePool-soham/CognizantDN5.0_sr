import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';


@Component({

  selector:'app-course-detail',

  standalone:true,

  imports:[
    CommonModule
  ],

  templateUrl:'./course-detail.html',

  styleUrl:'./course-detail.css'

})
export class CourseDetail implements OnInit {


  course?: Course;


  students:any[] = [];



  constructor(

    private route:ActivatedRoute,

    private courseService:CourseService,

    private cdr:ChangeDetectorRef

  ){}



  ngOnInit():void{


    const id =
      this.route.snapshot.paramMap.get('id')!;



    this.courseService.getCourseById(id)

    .subscribe({

      next:(course)=>{


        console.log(
          "COURSE RECEIVED:",
          course
        );


        this.course = course;


        this.cdr.detectChanges();


      },


      error:(err)=>{


        console.log(err);


      }


    });



    this.courseService
    .getCourseStudents(id)

    .subscribe({

      next:(students)=>{


        console.log(
          "Students:",
          students
        );


        this.students = students;


      },


      error:(err)=>{


        console.log(err);


      }


    });


  }


}