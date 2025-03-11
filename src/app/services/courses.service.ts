import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private httpClient = inject(HttpClient);
  courses = signal([]);

  // fetchCourses() {
  //   return this.httpClient
  //     .get('https://cut-or-die-api.onrender.com/api/v1/courses/', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'access-control-allow-methods':
  //           'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //       },
  //     })
  //     .pipe(
  //       tap((value: any) => {
  //         this.courses.set(value);
  //       })
  //     );
  // }
}
