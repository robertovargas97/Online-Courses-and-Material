import { Injectable, signal } from '@angular/core';

export type Locale = 'es-CR' | 'en-US' | 'fr-FR';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private readonly currentLocale = signal<Locale>('en-US');

  getCurrentLocale() {
    return this.currentLocale();
  }

  setCurrentLocale(locale: Locale) {
    this.currentLocale.set(locale);
    localStorage.setItem('locale', locale);
  }

  changeLocale(locale: Locale) {
    this.setCurrentLocale(locale);
    globalThis.location.reload();
  }

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locale) || 'en-US');
  }
}
