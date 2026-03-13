import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es-CR';
import fr from '@angular/common/locales/fr';

import { routes } from './app.routes';
import { LocaleService } from './services/locale-service';

registerLocaleData(es);
registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getCurrentLocale(),
    },
  ],
};
