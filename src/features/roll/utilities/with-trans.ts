import type { FlatNamespace, KeyPrefix } from 'i18next';
import React from 'react';
import { withTranslation as withOrginalTranslation, type FallbackNs } from 'react-i18next';
import type { $Tuple } from 'react-i18next/helpers';
import { DEFAULT_I18N_NAMESPACE, type I18nScopeEnum } from '../../i18n/token';

export function withI18n<
  P extends object,
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | I18nScopeEnum | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns: Ns = DEFAULT_I18N_NAMESPACE as Ns,
  options?: WithTranslationOption<KPrefix>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): (Component: React.ComponentType<P>) => any {
  return function HigherOrderComponent(Component: React.ComponentType<P>) {
    return withOrginalTranslation(
      ns,
      options,
    )(function EnhancedComponent(props: P): JSX.Element {
      return React.createElement(Component, props);
    });
  };
}

export { withI18n as withTranslation };

export interface WithTranslationOption<KPrefix> {
  withRef?: boolean;
  keyPrefix?: KPrefix;
}
