import React from 'react';

export function withWrap<P>(Context: React.Context<P>, defaultProps: Partial<React.ProviderProps<P>> = {}) {
  return function HigherOrderComponent(children: React.ComponentType<P>) {
    return function EnhancedComponent(props: P): JSX.Element {
      return React.createElement(
        Context.Provider,
        Object.assign({}, defaultProps as React.ProviderProps<P>, props, {
          children,
        }),
      );
    };
  };
}
