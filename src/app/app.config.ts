import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideTranslateService} from "@ngx-translate/core";
import {provideHttpClient} from "@angular/common/http";
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
    })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideTranslateService()
  ]
};
