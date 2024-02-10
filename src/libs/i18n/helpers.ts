import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { i18n } from './i18n';
import { DEFAULT_LANG_NAME, LanguageName } from './languages';
import { I18nScope } from './token';

export const LANG_STORAGE_KEY = 'lng';

export async function initLangCode(): Promise<void> {
  const last_lang = await getLastLang();
  if (typeof last_lang !== 'undefined') {
    return changeLanguage(last_lang);
  }

  const sys_lang = await getSystemLang();
  if (typeof sys_lang !== 'undefined') {
    return changeLanguage(sys_lang);
  }

  return changeLanguage(DEFAULT_LANG_NAME);
}

export async function getSystemLang(): Promise<string | void> {
  if (typeof navigator !== 'undefined') {
    return (navigator.language ?? navigator.languages?.[0]).valueOf();
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

export async function getLastLang(): Promise<LanguageName | void> {
  const lang = await Preferences.get({ key: LANG_STORAGE_KEY });
  if (lang.value == undefined) return;
  return LanguageName.from(lang.value);
}

export async function changeLanguage(lang: string | LanguageName): Promise<void> {
  const lang_instance = LanguageName.from(lang.valueOf());
  const lang_value = lang_instance.valueOf();
  await Preferences.set({ key: LANG_STORAGE_KEY, value: lang_value });
  await i18n.changeLanguage(lang_value);
  await updateTextDirection(lang_instance);
  await Toast.show({
    position: 'bottom',
    duration: 'short',
    text: i18n.t('change_language_toast', {
      ns:I18nScope.SETTINGS
    }),
  });
}

export async function updateTextDirection(lang: LanguageName): Promise<void> {
  const dir = lang.textDirection;
  if (typeof document !== 'undefined') {
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('data-dir', dir);
    document.body.setAttribute('aria-direction', dir);
  }
}
