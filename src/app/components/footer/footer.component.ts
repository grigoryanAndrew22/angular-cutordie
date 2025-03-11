import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Currency, Language } from '../../types/lang_currency';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  langButtons: ['en', 'ua'] = ['en', 'ua'];
  currButtons: any = [
    ['usd', '$'],
    ['eur', '€'],
    ['uah', '₴'],
  ];
  private langService = inject(LanguageService);
  language = this.langService.language;
  currency = this.langService.currency;
  preloadLang = computed(() => this.langService.preloadLang().footer);

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
  setCurr(curr: Currency) {
    this.langService.setCurrency(curr);
  }
}
