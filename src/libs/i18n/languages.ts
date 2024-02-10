export enum LanguageName {
  ENGLISH = 'ENGLISH',
  PERSIAN = 'PERSIAN',
  FARSI = PERSIAN,
  DEFAULT = ENGLISH,
}

const displayName = new Intl.DisplayNames('en', {
  type: 'language',
  fallback: 'code',
  style: 'long',
  languageDisplay: 'standard',
});

export function resolveLanguageName(langtag: string): LanguageName {
  if (langtag.toUpperCase() in LanguageName) return LanguageName[langtag.toUpperCase() as LanguageNameKey];

  // with BCP47
  const name = displayName.of(langtag) ?? 'English (US)';
  const key = name.split(' ')[0].toUpperCase();
  return LanguageName[key as LanguageNameKey];
}

export type LanguageNameKey = keyof typeof LanguageName;
export const DEFAULT_LANG_NAME: LanguageName = LanguageName.DEFAULT;
