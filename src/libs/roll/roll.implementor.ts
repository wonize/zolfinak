import type React from 'react';
import type { Roll, Rollable } from './roll.interface';

export class Roller<In extends object, Out> implements Rollable<In, Out> {
  private readonly rolled: Roll<In, Out>;

  constructor(rolled?: Roll<In, Out>) {
    if (typeof rolled === 'undefined') {
      this.rolled = function rolled_hoc(Component: React.FunctionComponent<In>) {
        return Component;
      } as Roll<In, Out>;
    } else {
      this.rolled = rolled;
    }
  }

  roll<T extends object = In, P extends object = In & T>(rolled: Roll<P, Out>): Rollable<P, Out> {
    const newRolled = (Component: React.ComponentType<P>): ((props: In) => Out) => {
      const rolledHoc = rolled(Component);
      return this.rolled(rolledHoc as never) as (props: In) => Out;
    };

    return new Roller<P, Out>(newRolled as unknown as Roll<P, Out>);
  }

  around<T>(Component: React.ComponentType<In & T>): React.ComponentType<Out> {
    return this.rolled(Component as React.ComponentType<In>) as unknown as React.ComponentType<Out>;
  }
}
