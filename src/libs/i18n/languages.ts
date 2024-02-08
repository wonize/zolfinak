export const enum TextDirection {
  RTL = 'rtl',
  LTR = 'ltr',
}

export class LanguageName<T extends string = LanguageNameKey> {
  private static langs: Record<string, LanguageNameKey> = {};
  public static findKey(target: string): LanguageNameKey {
    return LanguageName.langs[target as keyof typeof LanguageName.langs];
  }
  public static get(target: string): LanguageName {
    const key = LanguageName.findKey(target);
    return Object(LanguageName)[key];
  }

  public constructor(
    protected readonly _value: T,
    protected readonly _native: string,
    protected readonly _code: string,
    protected readonly _dir: TextDirection = TextDirection.LTR,
  ) {
    LanguageName.langs = Object.assign({}, LanguageName.langs, {
      [_value]: _value,
      [_native]: _value,
      [_code]: _value,
    });
  }

  public readonly toNativeName = (): string => {
    return this._native;
  };

  public readonly toIsoCode = (): string => {
    return this._code;
  };

  public get textDirection(): TextDirection {
    return this._dir;
  }

  public get value(): T {
    return this._value;
  }
  public readonly valueOf = (): T => {
    return this.value;
  };
  public readonly toString = (): string => {
    return this.valueOf();
  };
  public [Symbol.toPrimitive](hint: unknown): string {
    if (hint === 'string') return this.toString();
    return this.toString();
  }
  public [Symbol.toStringTag](): string {
    return this.toString();
  }

  public static readonly ARABIC: LanguageName<'ARABIC'> = new LanguageName<'ARABIC'>(
    'ARABIC',
    'العربية',
    'ar',
    TextDirection.RTL,
  );
  public static readonly CHINESE: LanguageName<'CHINESE'> = new LanguageName<'CHINESE'>(
    'CHINESE',
    '中文（简体字）',
    'zh',
  );
  public static readonly ENGLISH: LanguageName<'ENGLISH'> = new LanguageName<'ENGLISH'>('ENGLISH', 'English', 'en');
  public static readonly PERSIAN: LanguageName<'PERSIAN'> = new LanguageName<'PERSIAN'>(
    'PERSIAN',
    'پارسی',
    'fa',
    TextDirection.RTL,
  );
  public static readonly FARSI: LanguageName<'PERSIAN'> = LanguageName.PERSIAN;
  public static readonly RUSSIAN: LanguageName<'RUSSIAN'> = new LanguageName<'RUSSIAN'>('RUSSIAN', 'Русский', 'ru');
  public static readonly TURKISH: LanguageName<'TURKISH'> = new LanguageName<'TURKISH'>('TURKISH', 'Türkçe', 'tr');
}

export type LanguageNameKey = Exclude<keyof typeof LanguageName, 'prototype' | 'findKey' | 'find' | 'get'>;
export const DEFAULT_LANG_NAME: Readonly<LanguageName> = LanguageName.ENGLISH;
