import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotAvailableService {
  private notAvailableShown = signal(false);
  notAvailableActive = this.notAvailableShown.asReadonly();

  showNotAvailable() {
    this.notAvailableShown.set(true);
  }
  hideNotAvailable() {
    this.notAvailableShown.set(false);
  }
}
