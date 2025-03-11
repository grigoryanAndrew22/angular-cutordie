import { computed, Injectable, signal } from '@angular/core';
import { languages } from '../constants/languages';
import { Currency, Language } from '../types/lang_currency';
import { currency } from '../constants/currency';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currency = signal<Currency>('usd');
  language = signal<Language>('en');
  preloadLang = computed(() => languages[this.language()]);
  preloadCurr = computed(() => currency[this.currency()]);

  setLanguage(lang: Language) {
    if (lang == this.language()) {
      return;
    }
    this.language.set(lang);
  }

  setCurrency(curr: Currency) {
    if (curr == this.currency()) {
      return;
    }
    this.currency.set(curr);
  }
}
