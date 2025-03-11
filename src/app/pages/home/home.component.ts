import { Component, computed, inject } from '@angular/core';
import { OfferComponent } from '../../components/offer/offer.component';
import { LanguageService } from '../../services/language.service';
import { ReverseOfferDirective } from '../../directives/reverse-offer.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferComponent, ReverseOfferDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private langService = inject(LanguageService);
  preloadLang = computed(() => this.langService.preloadLang().home);
  preloadCurr = this.langService.preloadCurr;
}
