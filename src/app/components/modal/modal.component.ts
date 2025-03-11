import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  private modalService = inject(ModalService);
  signUpShown = this.modalService.signupActive;
  signUpForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    }),
  });
  signInForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  closeModal() {
    this.modalService.hideModal();
    if (this.signUpShown()) {
      this.modalService.switchModal();
    }
  }
  switchModal() {
    this.modalService.switchModal();
    this.signUpForm.reset();
  }
  onSignUp() {
    if (this.signUpForm.invalid) {
      console.log('signup failed');
      return;
    }
    console.log('success');
  }
  onSignIn() {
    if (this.signInForm.invalid) {
      console.log('signin failed');
      return;
    }
    console.log('success');
  }
}
