import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  private coursesService = inject(CoursesService);
  private destroyRef = inject(DestroyRef);
  courses = this.coursesService.courses;

  // ngOnInit() {
  //   const subscription = this.coursesService.fetchCourses().subscribe();

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}
