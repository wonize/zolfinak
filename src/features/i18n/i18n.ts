import i18n from 'i18next';
import { createElement, type PropsWithChildren } from 'react';
import { initReactI18next, I18nextProvider as RealI18nextProvider } from 'react-i18next';
import { DEFAULT_LANG_CODE, getLastLanguageCode } from './code';
import { LocaleMap as resources } from './locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    resrources: typeof resources;
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: getLastLanguageCode(),
  fallbackLng: DEFAULT_LANG_CODE,
});

export function I18nextProvider(props: PropsWithChildren) {
  return createElement(RealI18nextProvider, { i18n }, props.children);
}

export { i18n };
