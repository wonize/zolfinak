import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { i18n } from './i18n';
import { DEFAULT_LANG_NAME, resolveLanguageName, type LanguageName } from './languages';
import { I18nScope } from './token';

export const LANGUAGE_STORAGE_KEY = 'z-language';

export async function initializeLanguageSettings(): Promise<void> {
  const last_lang = await getLastLang();
  if (last_lang) {
    changeLanguageSilent(last_lang);
    return;
  }

  const sys_lang = await getSystemLang();
  if (typeof sys_lang !== 'undefined') {
    return changeLanguage(sys_lang);
  }

  return changeLanguage(DEFAULT_LANG_NAME);
}

export async function getSystemLang(): Promise<string | void> {
  if (typeof navigator !== 'undefined') {
    return (
      navigator['language'] ??
      navigator['languages'][0] ??
      navigator['userLangauge' as keyof Navigator]
    )?.valueOf();
  }

  const iso_code = await Device.getLanguageCode();
  if (typeof iso_code !== 'undefined') {
    return iso_code.value;
  }

  const bcp_code = await Device.getLanguageTag();
  if (typeof bcp_code !== 'undefined') {
    return bcp_code.value;
  }
}

export async function getLastLang(): Promise<string | null> {
  const lang = await Preferences.get({ key: LANGUAGE_STORAGE_KEY });
  return lang.value;
}

export async function changeLanguageSilent(langtag: string | LanguageName): Promise<LanguageName> {
  const lang = resolveLanguageName(langtag.valueOf());
  await Preferences.set({ key: LANGUAGE_STORAGE_KEY, value: lang });
  await i18n.changeLanguage(lang);
  await updateTextDirection(lang);
  return lang;
}

export async function changeLanguage(langtag: string | LanguageName): Promise<void> {
  const lang = await changeLanguageSilent(langtag);
  await Toast.show({
    position: 'bottom',
    duration: 'short',
    text: i18n.t('change_language_toast', {
      lang: getNativeName(lang),
      ns: I18nScope.SETTINGS,
    }),
  });
}

export function getLocaleInfo(lang: LanguageName) {
  const option = { ns: I18nScope._INFO_, lng: lang };
  const name = i18n.t('english_name', option);
  const nativeName = i18n.t('native_name', option);
  const textDirection = i18n.t('text_direction', option);
  const ISO_639_1 = i18n.t('iso_639_1', option);
  const ISO_639_2 = i18n.t('iso_639_2', option);
  return { name, nativeName, textDirection, ISO_639_1, ISO_639_2 } as const;
}

export function getLocaleCode(langtag: string | LanguageName) {
  const lang = resolveLanguageName(langtag);
  const option = { ns: I18nScope._INFO_, lng: lang };
  const ISO_639_1 = i18n.t('iso_639_1', option);
  return ISO_639_1.toLowerCase();
}

export function getNativeName(lang: LanguageName) {
  return i18n.t('native_name', { ns: I18nScope._INFO_, lng: lang });
}

export function getTextDirection(lang: LanguageName) {
  return i18n.t('text_direction', { ns: I18nScope._INFO_, lng: lang });
}

export async function updateTextDirection(lang: LanguageName): Promise<void> {
  const dir = getTextDirection(lang);
  if (typeof document !== 'undefined') {
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('data-dir', dir);
    document.body.setAttribute('aria-direction', dir);
  }
}
