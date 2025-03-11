import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  signupActive = signal<boolean>(false);
  modalShown = signal<boolean>(false);

  switchModal() {
    this.signupActive.update((value) => !value);
  }
  showModal() {
    this.modalShown.set(true);
  }
  hideModal() {
    this.modalShown.set(false);
  }
}
