import { TestBed } from '@angular/core/testing';

import { Course } from '../models/course.model';
import { CourseService } from './course';

describe('Course', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
