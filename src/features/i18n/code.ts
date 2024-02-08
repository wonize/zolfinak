export const LangName = {
  ARABIC: 'ARABIC',
  CHINESE: 'CHINESE',
  ENGLISH: 'ENGLISH',
  FARSI: 'PERSIAN',
  PERSIAN: 'PERSIAN',
  RUSSIAN: 'RUSSIAN',
  TURKISH: 'TURKISH',
} as const;

export const LangNativeName = {
  [LangName.ARABIC]: 'العربية',
  [LangName.CHINESE]: '中文（简体字）',
  [LangName.ENGLISH]: 'English',
  [LangName.FARSI]: 'پارسی',
  [LangName.RUSSIAN]: 'Русский',
  [LangName.TURKISH]: 'Türkçe',
} as const;

export const LangCode = {
  [LangName.ARABIC]: 'ar',
  [LangName.CHINESE]: 'zh',
  [LangName.ENGLISH]: 'en',
  [LangName.FARSI]: 'fa',
  [LangName.RUSSIAN]: 'ru',
  [LangName.TURKISH]: 'tr',
} as const;

export const DirctionCode: { [key: string]: string } = {
  ar: 'rtl',
  fa: 'rtl',
  ru: 'rtl',
  tr: 'rtl',
  en: 'ltr',
  zh: 'ltr',
};

export type LangObject = Readonly<Record<LangName, string>>;
export type LangName = Readonly<(typeof LangName)[keyof typeof LangName]>;
export type LangCode = (typeof LangCode)[LangName];

export const DEFAULT_LANG_NAME: Readonly<LangName> = LangName.ENGLISH;
export const DEFAULT_LANG_CODE: Readonly<(typeof LangCode)[typeof DEFAULT_LANG_NAME]> = LangCode[DEFAULT_LANG_NAME];

// FIXME: `i18n.init({ lng })` isn't accept Promise
/// typeof `lng` value  should be only `string | undefined`, but `getLastLanguageCode` return a Promise
/// in `getLastLanguageCode` should wait to get data from `Preferences` storage
/// the `Preferences` is Promise
export function getLastLanguageCode(): LangCode {
  // TODO:
  /// const lng = Preferences.get({ key: 'lng' });
  /// return <LangCode>(lng.value ?? DEFAULT_LANG_CODE);
  return DEFAULT_LANG_CODE;
}
