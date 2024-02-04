import React from 'react';
import { Route } from 'react-router-dom';
import type { HighComponent } from '../roll.interface';

export function withPage<P extends object>(
  path: string,
  option: WithPageOption = DEFAULT_WITH_PAGE_OPTION,
): HighComponent<P> {
  return function HigherOrderComponent(component: React.ComponentType<P>) {
    return function EnhancedComponent(props: P): JSX.Element {
      return React.createElement(Route, Object.assign({}, { path, component }, option, props));
    };
  };
}

export interface WithPageOption {
  exact: boolean;
}

export const DEFAULT_WITH_PAGE_OPTION: Readonly<WithPageOption> = {
  exact: true,
};
