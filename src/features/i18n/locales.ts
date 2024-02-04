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
import { LangCode } from './code';
import type { I18nToken } from './token';

export const LocaleMap: LocaleMap = {
  [LangCode.ARABIC]: AR,
  [LangCode.ENGLISH]: EN,
  [LangCode.PERSIAN]: FA,
  [LangCode.RUSSIAN]: RU,
  [LangCode.TURKISH]: TR,
  [LangCode.CHINESE]: ZH,
} as const;

export type LocaleMap = Readonly<{ [lang in LangCode]: I18nToken }>;
