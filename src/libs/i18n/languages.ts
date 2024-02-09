export const enum TextDirection {
  RTL = 'rtl',
  LTR = 'ltr',
}

export class LanguageName<T extends string = LanguageNameKey> {
  private static langs: Record<string, LanguageNameKey> = {};
  public static findKey(target: string): LanguageNameKey {
    return LanguageName.langs[target as keyof typeof LanguageName.langs];
  }
  public static from(target: string): LanguageName {
    return LanguageName[LanguageName.findKey(target)];
  }

  public constructor(
    public readonly name: T,
    public readonly nativeName: string,
    protected readonly code: string,
    public readonly textDirection: TextDirection = TextDirection.LTR,
  ) {
    LanguageName.langs = Object.assign({}, LanguageName.langs, {
      [name]: name,
      [nativeName]: name,
      [code]: name,
    });
  }
  public readonly toString = (): string => {
    return this.name.toString();
  };
  public readonly valueOf = (): T => {
    return this.name.valueOf() as T;
  };

  public static readonly ARABIC = new LanguageName<'ARABIC'>('ARABIC', 'العربية', 'ar', TextDirection.RTL);
  public static readonly CHINESE = new LanguageName<'CHINESE'>('CHINESE', '中文（简体字）', 'zh');
  public static readonly ENGLISH = new LanguageName<'ENGLISH'>('ENGLISH', 'English', 'en');
  public static readonly PERSIAN = new LanguageName<'PERSIAN'>('PERSIAN', 'پارسی', 'fa', TextDirection.RTL);
  public static readonly FARSI = LanguageName.PERSIAN;
  public static readonly RUSSIAN = new LanguageName<'RUSSIAN'>('RUSSIAN', 'Русский', 'ru');
  public static readonly TURKISH = new LanguageName<'TURKISH'>('TURKISH', 'Türkçe', 'tr');
}

export type LanguageNameKey = Exclude<keyof typeof LanguageName, 'prototype' | 'findKey' | 'find' | 'get' | 'from'>;
export const DEFAULT_LANG_NAME: Readonly<LanguageName> = LanguageName.ENGLISH;
