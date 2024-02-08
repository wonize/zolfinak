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
  [LanguageName.ARABIC.valueOf()]: AR,
  [LanguageName.ENGLISH.valueOf()]: EN,
  [LanguageName.PERSIAN.valueOf()]: FA,
  [LanguageName.RUSSIAN.valueOf()]: RU,
  [LanguageName.TURKISH.valueOf()]: TR,
  [LanguageName.CHINESE.valueOf()]: ZH,
} as const;

export type LocaleMap = Readonly<Record<Exclude<LanguageNameKey, 'FARSI'>, I18nToken>>;
