import type {
  ComponentClass,
  ComponentType,
  Context,
  ContextType,
  FunctionComponent,
  PropsWithChildren,
  ProviderProps,
  ReactNode,
} from 'react';
import { createElement } from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { Route, withRouter, type RouteComponentProps } from 'react-router-dom';
import { DEFAULT_I18N_NAMESPACE, type I18nScopeEnum } from '../features/i18n/token';

export class PageBuilder<TProps extends {}, TParams extends {} = never> {
  public constructor() {}

  public _i18n_scope: I18nScopeEnum = DEFAULT_I18N_NAMESPACE;
  public withScope(scope: I18nScopeEnum): this {
    this._i18n_scope = scope;
    return this;
  }

  public _i18n_is_use: Bool = false;
  /** @default true */
  public withTranslation(is_use: Bool = true): this {
    this._i18n_is_use = is_use;
    return this;
  }

  public _ref_is_use: Bool = false;
  public withRef(is_ref: Bool = true): this {
    this._ref_is_use = is_ref;
    return this;
  }

  public _router_is_use: Bool = false;
  /** @default true */
  public withRouter(is_use: Bool = true): this {
    this._router_is_use = is_use;
    return this;
  }

  public _router_is_page: Bool = false;
  public _router_path!: string;
  public _router_is_exact: Bool = true;
  /** @default exact = true  */
  public withPath(path: string, exact: Bool = true): this {
    this._router_is_page = true;
    this._router_path = path;
    this._router_is_exact = exact;
    return this;
  }

  public _providers: ReactNode[] = [];
  public withProvider<TContext extends Context<any>>(
    context: TContext,
    props: ProviderProps<ContextType<TContext>> & PropsWithChildren<ContextType<TContext>>,
  ): this {
    const providerElement = createElement(context.Provider, Object.assign({}, props), ...this._providers);
    this._providers.unshift(providerElement);
    return this;
  }

  private Page!: CompBuilder<typeof this>;
  public withPage(page: CompBuilder<typeof this>): this {
    this.Page = page;
    return this;
  }

  public make() {
    let ReComp: ComponentType<PropsBuilder<typeof this>> = (props) => {
      return createElement(this.Page, props);
    };

    if (this._i18n_is_use) {
      const passTranslation = withTranslation(this._i18n_scope, {
        withRef: this._ref_is_use,
      });
      ReComp = <ComponentType<PropsBuilder<typeof this>>>passTranslation(ReComp);
    }

    if (this._router_is_use) {
      ReComp = withRouter(<any>ReComp) as any;
    }

    if (this._router_is_page) {
      ReComp = <any>createElement(
        Route,
        {
          exact: this._router_is_exact,
          path: this._router_path,
          component: ReComp,
        },
        undefined,
      );
    }

    return ReComp;
  }
}

type IF<Cond extends Bool, Then, Else = {}> = Cond extends true ? Then : Else;
type Flat<T extends {}> = { [K in keyof T]: T[K] };
type ExProps<TClass extends PageBuilder<any, any>, TAlt = {}> =
  TClass extends PageBuilder<infer GProps, any> ? GProps : TAlt;
type ExParams<TClass extends PageBuilder<any, any>, TAlt = {}> =
  TClass extends PageBuilder<any, infer GParams> ? GParams : TAlt;
type ExIsI18n<TClass extends PageBuilder<any, any>> = IF<TClass['_i18n_is_use'], true, false>;
type ExIsPage<TClass extends PageBuilder<any, any>> = IF<TClass['_router_is_page'], true, false>;

type Bool = boolean;

export type PropsBuilder<
  TPageBuilder extends PageBuilder<any, any>,
  TProps extends {} = ExProps<TPageBuilder>,
  TParams extends {} = ExParams<TPageBuilder>,
> = Flat<
  IF<ExIsI18n<TPageBuilder>, WithTranslation, never> &
    IF<ExIsPage<TPageBuilder>, RouteComponentProps<TParams>, never> &
    TProps
>;

type CompBuilder<TPageBuilder extends PageBuilder<any>> =
  | FunctionComponent<PropsBuilder<TPageBuilder>>
  | ComponentClass<PropsBuilder<TPageBuilder>, any>;
