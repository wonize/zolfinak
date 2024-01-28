export type I18nToken = {
  home: {
    hero_title: string;
    inline_search_placeholder: string;
    hubspoke_title: string;
  };
  settings: {
    title: string;
    about_link_text: string;
    language_label: string;
  };
  app: {};
};

/** i18next namespaces(ns) */
export const I18nScope: I18nScope = {
  HOME: 'home',
  SETTINGS: 'settings',
  APP: 'app',
} as const;

export type I18nScope = Readonly<{
  [Scope in Uppercase<keyof I18nToken>]: Lowercase<Scope>;
}>;

export const I18nNSList = Object.keys(I18nScope).map((ns) =>
  String(ns).toLowerCase(),
) as ReadonlyArray<`${(typeof I18nScope)[keyof typeof I18nScope]}`>;

export const DEFAULT_I18N_NAMESPACE = 'app' as const;
