import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  ActivatedRoute
} from '@angular/router';

import {
  of
} from 'rxjs';

import {
  CourseDetail
} from './course-detail';

import {
  CourseService
} from '../../services/course';


describe('CourseDetail', () => {


  let component: CourseDetail;

  let fixture: ComponentFixture<CourseDetail>;


  const mockCourse = {

    id: '1',

    name: 'Angular Development',

    code: 'ANG101',

    credits: 4,

    gradeStatus: 'passed'

  };


  const mockCourseService = {

    getCourseById: vi.fn().mockReturnValue(

      of(mockCourse)

    ),


    getCourseStudents: vi.fn().mockReturnValue(

      of([])

    )

  };


  beforeEach(async () => {


    await TestBed.configureTestingModule({

      imports: [

        CourseDetail

      ],


      providers: [

        {

          provide: ActivatedRoute,

          useValue: {

            snapshot: {

              paramMap: {

                get: vi.fn().mockReturnValue('1')

              }

            }

          }

        },


        {

          provide: CourseService,

          useValue: mockCourseService

        }

      ]

    }).compileComponents();


    fixture = TestBed.createComponent(

      CourseDetail

    );


    component = fixture.componentInstance;


    fixture.detectChanges();


  });


  it('should create', () => {


    expect(component)

      .toBeTruthy();


  });


});