import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import en from '../../../../public/i18n/en.json';
import ru from '../../../../public/i18n/ru.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANG_COOKIE = 'user_lang';
  private readonly COOKIE_EXPIRY_DAYS = 365;

  constructor(
    private translate: TranslateService,
    private cookieService: CookieService
  ) {
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('ru', ru);
    translate.setFallbackLang('en');
  }

  initLanguage(defaultLang: string = 'en', availableLangs: string[] = ['en', 'ru']): void {
    this.translate.addLangs(availableLangs);
    this.translate.setDefaultLang(defaultLang);

    // Get language from cookie
    const savedLang = this.cookieService.get(this.LANG_COOKIE);
    
    if (savedLang && availableLangs.includes(savedLang)) {
      this.translate.use(savedLang);
    } else {
      // Fallback to browser language or default
      const browserLang = this.translate.getBrowserLang();
      const langToUse = (browserLang && availableLangs.includes(browserLang)) 
        ? browserLang 
        : defaultLang;
      this.setLanguage(langToUse);
    }
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.cookieService.set(this.LANG_COOKIE, lang, this.COOKIE_EXPIRY_DAYS);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
