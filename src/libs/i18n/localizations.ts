// locales
import AR from '../../locales/ar.json';
import EN from '../../locales/en.json';
import FA from '../../locales/fa.json';
import RU from '../../locales/ru.json';
import TR from '../../locales/tr.json';
import ZH from '../../locales/zh.json';
//
// locales end
//
import { LanguageName, type LanguageNameKey } from './languages';
import type { I18nToken } from './token';

export const LocaleMap: LocaleMap = {
  [LanguageName.ARABIC.value]: AR,
  [LanguageName.ENGLISH.value]: EN,
  [LanguageName.PERSIAN.value]: FA,
  [LanguageName.RUSSIAN.value]: RU,
  [LanguageName.TURKISH.value]: TR,
  [LanguageName.CHINESE.value]: ZH,
} as const;

export type LocaleMap = Readonly<Record<Exclude<LanguageNameKey, 'FARSI'>, I18nToken>>;
