import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
