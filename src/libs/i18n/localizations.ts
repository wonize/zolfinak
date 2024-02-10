import ENGLISH from '../../locales/ENGLISH.json';
import PERSIAN from '../../locales/PERSIAN.json';
import { LanguageName } from './languages';
import type { I18nToken } from './token';

export const LocaleMap: { readonly [K in LanguageName]: I18nToken } = {
  [LanguageName.ENGLISH]: ENGLISH as I18nToken,
  [LanguageName.PERSIAN]: PERSIAN as I18nToken,
} as const;
