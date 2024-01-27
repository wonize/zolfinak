import { LangCode } from './code';
import type { I18nToken, Token } from './token';

async function load(code: LangCode): Promise<I18nToken> {
  const translation: Token = await import(`../../locales/${code}.json`);
  return { translation };
}

export const LocaleMap = {
  [LangCode.ARABIC]: await load(LangCode.ARABIC),
  [LangCode.CHINESE]: await load(LangCode.CHINESE),
  [LangCode.ENGLISH]: await load(LangCode.ENGLISH),
  [LangCode.PERSIAN]: await load(LangCode.PERSIAN),
  [LangCode.RUSSIAN]: await load(LangCode.RUSSIAN),
  [LangCode.TURKISH]: await load(LangCode.TURKISH),
} as const;
