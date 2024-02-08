export const enum TextDirection {
  RTL = 'rtl',
  LTR = 'ltr',
}

class LangBuilder<T extends string> {
  public constructor() {}

  #key!: T;
  public withKey(key: T): this {
    this.#key = key;
    return this;
  }

  #code!: string;
  public withCode(code: string): this {
    this.#code = code;
    return this;
  }

  #native!: string;
  public withNative(native: string): this {
    this.#native = native;
    return this;
  }

  #dir: TextDirection = TextDirection.LTR;
  public withDirection(dir: TextDirection): this {
    this.#dir = dir;
    return this;
  }

  public make(): LanguageName<T> {
    return new LanguageName<T>(this.#key, this.#native, this.#code, this.#dir);
  }

  public static new<T extends string>(): LangBuilder<T> {
    return new LangBuilder<T>();
  }
}

class LangDirector {
  public static makeArabic(): LanguageName<'ARABIC'> {
    return new LangBuilder<'ARABIC'>().withKey('ARABIC').withNative('العربية').withCode('ar').make();
  }

  public static makeChinese(): LanguageName<'CHINESE'> {
    return new LangBuilder<'CHINESE'>().withKey('CHINESE').withNative('中文（简体字）').withCode('zh').make();
  }

  public static makeEnglish(): LanguageName<'ENGLISH'> {
    return new LangBuilder<'ENGLISH'>().withKey('ENGLISH').withNative('English').withCode('en').make();
  }

  public static makePersian(): LanguageName<'PERSIAN'> {
    return new LangBuilder<'PERSIAN'>().withKey('PERSIAN').withNative('پارسی').withCode('fa').make();
  }

  public static makeRussian(): LanguageName<'RUSSIAN'> {
    return new LangBuilder<'RUSSIAN'>().withKey('RUSSIAN').withNative('Русский').withCode('ru').make();
  }

  public static makeTurkish(): LanguageName<'TURKISH'> {
    return new LangBuilder<'TURKISH'>().withKey('TURKISH').withNative('Türkçe').withCode('tr').make();
  }
}

export class LanguageName<T extends string = LanguageNameKey> {
  public static readonly ARABIC: LanguageName<'ARABIC'> = LangDirector.makeArabic();
  public static readonly CHINESE: LanguageName<'CHINESE'> = LangDirector.makeChinese();
  public static readonly ENGLISH: LanguageName<'ENGLISH'> = LangDirector.makeEnglish();
  public static readonly PERSIAN: LanguageName<'PERSIAN'> = LangDirector.makePersian();
  public static readonly FARSI: LanguageName<'PERSIAN'> = LanguageName.PERSIAN;
  public static readonly RUSSIAN: LanguageName<'RUSSIAN'> = LangDirector.makeRussian();
  public static readonly TURKISH: LanguageName<'TURKISH'> = LangDirector.makeTurkish();

  private static langs: Record<string, LanguageNameKey> = {};
  public static readonly findKey = (target: string): LanguageNameKey => {
    return LanguageName.langs[target as keyof typeof LanguageName.langs];
  };
  public static readonly get = <T extends LanguageNameKey = LanguageNameKey>(target: string): LanguageName => {
    const key: T = LanguageName.findKey(target) as T;
    return Object(LanguageName)[key] as LanguageName<T>;
  };

  public constructor(
    protected readonly _value: T,
    protected readonly _native: string,
    protected readonly _code: string,
    protected readonly _dir: TextDirection,
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
}

export type LanguageNameKey = Exclude<keyof typeof LanguageName, 'prototype' | 'findKey' | 'find' | 'get'>;
export const DEFAULT_LANG_NAME: Readonly<LanguageName> = LanguageName.ENGLISH;
