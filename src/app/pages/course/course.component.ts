import { Component, inject } from '@angular/core';
import { NotAvailableService } from '../../services/not-available.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  private notAvailableService = inject(NotAvailableService);

  showNotAvailable(event: MouseEvent) {
    console.log(event);
    this.notAvailableService.showNotAvailable();
  }
}
