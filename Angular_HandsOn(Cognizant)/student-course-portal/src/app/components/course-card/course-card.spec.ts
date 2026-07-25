import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';

import { Router } from '@angular/router';

import { CourseCard } from './course-card';

import { Course } from '../../models/course.model';


describe('CourseCard', () => {

  let component: CourseCard;

  let fixture: ComponentFixture<CourseCard>;

  let store: MockStore;

  let routerSpy: {
    navigate: ReturnType<typeof vi.fn>;
  };


  const mockCourse: Course = {

    id: '1',

    name: 'Angular Development',

    code: 'ANG101',

    credits: 4,

    gradeStatus: 'passed'

  };


  beforeEach(async () => {

    routerSpy = {

      navigate: vi.fn()

    };


    await TestBed.configureTestingModule({

      imports: [

        CourseCard

      ],

      providers: [

        provideMockStore({

          initialState: {

            enrollment: {

              enrolledCourseIds: []

            }

          }

        }),

        {

          provide: Router,

          useValue: routerSpy

        }

      ]

    }).compileComponents();


    fixture = TestBed.createComponent(

      CourseCard

    );


    component = fixture.componentInstance;


    store = TestBed.inject(

      MockStore

    );


    component.course = mockCourse;


    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component)

      .toBeTruthy();

  });


  it('should receive the course input', () => {

    expect(component.course.name)

      .toBe(

        'Angular Development'

      );


    expect(component.course.code)

      .toBe(

        'ANG101'

      );

  });


  it('should toggle course details', () => {

    expect(component.isExpanded)

      .toBeFalsy();


    component.toggleDetails();


    expect(component.isExpanded)

      .toBeTruthy();


    component.toggleDetails();


    expect(component.isExpanded)

      .toBeFalsy();

  });


  it('should calculate card classes correctly', () => {

    expect(

      component.cardClasses['card--full']

    ).toBeTruthy();


    expect(

      component.cardClasses['expanded']

    ).toBeFalsy();


    component.toggleDetails();


    expect(

      component.cardClasses['expanded']

    ).toBeTruthy();

  });


  it('should navigate to course details', () => {

    component.openCourse();


    expect(

      routerSpy.navigate

    ).toHaveBeenCalledWith([

      'courses',

      '1'

    ]);

  });


  it('should dispatch enroll action', () => {

    const dispatchSpy = vi.spyOn(

      store,

      'dispatch'

    );


    component.toggleEnrollment();


    expect(

      dispatchSpy

    ).toHaveBeenCalled();

  });

});