import React from 'react';

export function withProvider<P>(Provider: React.Provider<P>, defaultProps: Partial<React.ProviderProps<P>> = {}) {
  return function HigherOrderComponent(children: React.ComponentType<P>) {
    return function EnhancedComponent(props: P): JSX.Element {
      return React.createElement(
        Provider,
        Object.assign({}, defaultProps as React.ProviderProps<P>, props, {
          children,
        }),
      );
    };
  };
}
