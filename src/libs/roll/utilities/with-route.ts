import React from 'react';
import { withRouter as withOriginalRouter } from 'react-router-dom';
import type { HighComponent } from '../roll.interface';

export function withRouter<P extends object>(): HighComponent<P> {
  return function HigherOrderComponent(component: React.ComponentType<P>) {
    return withOriginalRouter(function EnhancedComponent(props: unknown): JSX.Element {
      return React.createElement<P>(component, props as P);
    });
  } as never;
}
