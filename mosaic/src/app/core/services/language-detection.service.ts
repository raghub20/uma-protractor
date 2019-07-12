/** @module Core */
import { Injectable, Injector, StaticProvider, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { RemoteLoggingService } from './remote-logging.service';

/** Grab a handle to webpack's `require` */
declare const require: any;

/**
 * Detects the user's language configuration from the browser
 * and can compare against the list of localized languages,
 * returning the closest match.
 */
@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {
  /**
   * The application's default language.
   */
  public static DefaultLanguage = 'en-US';

  /**
   * The languages supported by this application
   * as defined in the index `src/locale/langs.json`.
   */
  SupportedLangs: Map<string, string[]>;

  /**
   * initialize the supported languages
   */
  constructor(private logger: RemoteLoggingService) {
    try {
      const langs: Iterable<[string, string[]]> = require('../../../locale/langs.json');
      this.SupportedLangs = new Map<string, string[]>(langs);
    } catch (err) {
      this.logger.logError(err);
      this.SupportedLangs = new Map<string, string[]>([['en', ['en-US']]]); // Fallback to just the default lang.
    }
  }

  /**
   * Returns the current language the user has selected in their browser.
   */
  getCurrentLanguage(): string {
    return window.navigator.language;
  }

  /**
   * Returns all configured languages _besides_ the current language.
   */
  getAlternateUserLanguages(): ReadonlyArray<string> {
    return window.navigator.languages.slice(1);
  }

  /**
   * Returns all configured languages _besides_ the current language.
   */
  getAllUserLanguages(): ReadonlyArray<string> {
    // IE doesn't support window.navigator.languages nor any graceful fallback, so manually handle it
    const langs: ReadonlyArray<string> = window.navigator.languages ? window.navigator.languages : ['en-US', 'en'];
    return langs;
  }

  /**
   * Finds the supported language that most closely matches the user's preferred language.
   */
  getUserLanguage(): string {
    const preferredLang = this.getCurrentLanguage();

    if (preferredLang === LanguageDetectionService.DefaultLanguage) {
      return preferredLang;
    }

    const userLangs: string[] = [];

    // Expand all user languages.
    this.getAllUserLanguages().forEach((v, i, a) => {
      // Add this language as is, avoiding duplicates
      // tslint:disable-next-line: no-use-before-declare
      if (userLangs.findIndex(existing => existing === lang) === -1) {
        userLangs.push(v);
      }

      // Now strip down to the country-less language (e.g. 'es_US' => 'es').
      const parts = v.split('-');
      const lang = parts[0];

      // Avoid duplicates
      if (lang === v) {
        return;
      }
      // Avoid duplicates
      if (userLangs.findIndex(existing => existing === lang) >= 0) {
        return;
      }
      userLangs.push(lang);
    });

    // Find the first user language to intersect with the list of supported langs.
    const findIntersection = (previous: string, current: string, index: Number, uls: string[]): string => {
      if (previous !== undefined) {
        return previous;
      }
    };

    // Find the closest match.
    const findBestMatch = (previous: string, current: string, index: Number, uls: string[]): string => {
      // If we already had a match then we're done, so just return that.
      if (previous !== null) {
        return previous;
      }

      const parts = current.split('-');
      const lang = parts[0];

      let langs = this.SupportedLangs.get(lang);

      // This really shouldn't happen since langs.json is an inverted index,
      // but someone may have made an innocent mistake. Do our best to move on.
      if (langs === undefined || langs === null || langs.length === 0) {
        langs = [ lang ]; // e.g. just plain 'es'
      }

      return langs.indexOf(current) >= 0
        ? current
        : (() => {
          const i = langs.findIndex((v) => v.startsWith(`${lang}-`));
          return i >= 0 ? langs[i] : null;
        })();
      };
    // Propagate nulls so we can fallback to the default if no
    // good matches are found.
    return userLangs.reduce(findBestMatch, null) || LanguageDetectionService.DefaultLanguage;
  }
}

/** Gets the supported language based on the browser language setting, if possible, or returns the default language (US-en) */
export function DetectSupportedUserLanguage() {
  const injector = Injector.create({providers: [{ deps: [ Injector ], provide: RemoteLoggingService, useClass: RemoteLoggingService }]});
  const lds = new LanguageDetectionService(injector.get(RemoteLoggingService));
  return lds.getUserLanguage();
}

/** Returns locale providers if the detected user langauge (based on browser settings) is a language the site supports */
export function MaybeLoadLocaleProviders(logger: RemoteLoggingService) {
  let localeProviders: StaticProvider[] = null;
  const currentLocale = DetectSupportedUserLanguage();
  if (currentLocale !== LanguageDetectionService.DefaultLanguage) {
    // Load our language file for any non-default locale.
    try {
      const translations = require(`raw-loader!../../../locale/messages.${currentLocale}.xlf`);
      localeProviders = [
        { provide: LOCALE_ID, useValue: currentLocale },
        { provide: TRANSLATIONS, useValue: translations },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
      ];
    } catch (err) {
      logger.logError(err);
    }
  }
  return localeProviders;
}

/** Returns locale providers if the user langauge (based on the current URL or browser setteing) is a language the site supports */
export function MaybeLoadLocaleProvidersFromQuerymap(logger: RemoteLoggingService) {
  let localeProviders: StaticProvider[] = null;
  const currentLocale = window.location.search.length > 5 ? window.location.search.substr(6) : DetectSupportedUserLanguage();
  if (currentLocale !== LanguageDetectionService.DefaultLanguage) {
    // Load our language file for any non-default locale.
    try {
      const translations = require(`raw-loader!../../../locale/messages.${currentLocale}.xlf`);
      localeProviders = [
        { provide: LOCALE_ID, useValue: currentLocale },
        { provide: TRANSLATIONS, useValue: translations },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
      ];
    } catch (err) {
      logger.logError(err);
    }
  }
  return localeProviders;
}

/** Gets all site supported languages */
export function GetAllSupportedLanguages(): string[] {
  const langs = [];

  const injector = Injector.create({providers: [{ deps: [ Injector ], provide: RemoteLoggingService, useClass: RemoteLoggingService }]});
  const lds = new LanguageDetectionService(injector.get(RemoteLoggingService));

  lds.SupportedLangs.forEach(v => langs.push(...v));
  return langs;
}
