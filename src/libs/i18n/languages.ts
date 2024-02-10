import * as textDirection from 'rtl-detect';

export class LanguageName<T extends string = LanguageNameKey> {
  private static langs: Record<string, LanguageNameKey> = {};
  public static findKey(target: string): LanguageNameKey {
    return LanguageName.langs[target as keyof typeof LanguageName.langs];
  }
  public static from(target: string): LanguageName {
    return LanguageName[LanguageName.findKey(target)];
  }

  public readonly name: T;
  public readonly nativeName: string;
  public constructor(public readonly code: string) {
    const option: Intl.DisplayNamesOptions = { type: 'language', languageDisplay: 'standard', style: 'long' };
    const intl_name = new Intl.DisplayNames(['en'], option);
    const intl_native_name = new Intl.DisplayNames([code], option);
    this.name = intl_name.of(code)!.toUpperCase()! as T;
    this.nativeName = intl_native_name.of(code)!;

    LanguageName.langs = Object.assign({}, LanguageName.langs, {
      [this.name]: this.name,
      [this.nativeName]: this.name,
      [code]: this.name,
    });
  }
  public get textDirection() {
    return textDirection.getLangDir(this.code);
  }
  public readonly toString = (): string => {
    return this.name.toString();
  };
  public readonly valueOf = (): T => {
    return this.name.valueOf() as T;
  };

  public static readonly ARABIC = new LanguageName<'ARABIC'>('ar');
  public static readonly CHINESE = new LanguageName<'CHINESE'>('zh');
  public static readonly ENGLISH = new LanguageName<'ENGLISH'>('en');
  public static readonly PERSIAN = new LanguageName<'PERSIAN'>('fa');
  public static readonly FARSI = LanguageName.PERSIAN;
  public static readonly RUSSIAN = new LanguageName<'RUSSIAN'>('ru');
  public static readonly TURKISH = new LanguageName<'TURKISH'>('tr');
}

export type LanguageNameKey = Exclude<keyof typeof LanguageName, 'prototype' | 'findKey' | 'find' | 'get' | 'from'>;
export const DEFAULT_LANG_NAME: Readonly<LanguageName> = LanguageName.ENGLISH;
