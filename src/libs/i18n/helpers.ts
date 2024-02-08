import { Preferences } from '@capacitor/preferences';
import { i18n } from './i18n';
import { DEFAULT_LANG_NAME, LanguageName } from './languages';

export const LANG_STORAGE_KEY = 'lng';

export async function updateTextDirection(lang: LanguageName): Promise<void> {
  const dir = lang.textDirection;
  if (typeof document !== 'undefined') {
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('data-dir', dir);
    document.body.setAttribute('aria-direction', dir);
  }
}

export async function initLangCode(): Promise<void> {
  // const sys_lang = await getSystemLang();
  const last_lang = await getLastLang();
  const lang = last_lang; /*?? sys_lang */
  changeLanguage(lang);
}

export async function getLastLang(): Promise<LanguageName> {
  const stored_lang = await Preferences.get({ key: LANG_STORAGE_KEY });
  const lang = stored_lang.value ?? DEFAULT_LANG_NAME;
  return LanguageName.get(lang.valueOf());
}

// TODO: getSysLang
/// export async function getSystemLang(): Promise<LangCode>{}

export function changeLanguage(lang: string | LanguageName): void {
  const lang_instance = LanguageName.get(lang.valueOf());
  const lang_value = lang_instance.valueOf();
  Preferences.set({ key: LANG_STORAGE_KEY, value: lang_value })
    .then(function () {
      i18n.changeLanguage(lang_value);
      updateTextDirection(lang_instance);
    })
    .catch(console.log);
}
