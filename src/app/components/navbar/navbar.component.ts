import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private langService = inject(LanguageService);
  private modalService = inject(ModalService);
  preloadLang = computed(() => this.langService.preloadLang().navbar);

  openModal() {
    this.modalService.showModal();
  }
}
