import { Component, computed, inject } from '@angular/core';
import { OfferComponent } from '../../components/offer/offer.component';
import { LanguageService } from '../../services/language.service';
import { ReverseOfferDirective } from '../../directives/reverse-offer.directive';
import { ModalService } from '../../services/modal.service';
import { RouterLink } from '@angular/router';
import { NotAvailableService } from '../../services/not-available.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferComponent, ReverseOfferDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private modalService = inject(ModalService);
  private langService = inject(LanguageService);
  preloadLang = computed(() => this.langService.preloadLang().home);
  preloadCurr = this.langService.preloadCurr;

  openModal() {
    this.modalService.showModal();
  }
}
