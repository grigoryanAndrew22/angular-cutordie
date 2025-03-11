import { Component, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';
import { NotAvailableService } from './services/not-available.service';
import { NotAvailableComponent } from './components/not-available/not-available.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    NotAvailableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private modalService = inject(ModalService);
  modalShown = this.modalService.modalShown;
  private notAvailableService = inject(NotAvailableService);
  notAvailableShown = this.notAvailableService.notAvailableActive;

  title = 'angular-cutordie';
}
