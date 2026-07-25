import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../../components/notification/notification';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
 imports: [
  FormsModule,
  CourseSummaryWidget,
  NotificationComponent
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
   this.courseService.getCourses()
.subscribe({

  next: (courses)=>{

    this.coursesAvailable = courses.length;

  },

  error:(err)=>{

    console.log(err);

  }

});
    console.log('HomeComponent initialised — courses loaded');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

}