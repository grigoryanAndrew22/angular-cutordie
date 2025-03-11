import { Component, inject } from '@angular/core';
import { NotAvailableService } from '../../services/not-available.service';

@Component({
  selector: 'app-not-available',
  standalone: true,
  imports: [],
  templateUrl: './not-available.component.html',
  styleUrl: './not-available.component.scss',
})
export class NotAvailableComponent {
  private notAvailableService = inject(NotAvailableService);
  notAvailableShown = this.notAvailableService.notAvailableActive;

  hideNotAvailable() {
    this.notAvailableService.hideNotAvailable();
  }
}
