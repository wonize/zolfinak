import type React from 'react';

export type RollOut<In extends object> =
  | React.ReactElement
  | JSX.Element
  | React.ComponentType<In>
  | Iterable<React.ReactElement>;

export type Roll<In extends object, Out = RollOut<In>> =
  | ((Component: React.ComponentType<In>) => (props: In) => Out)
  | HighComponent<In>;

export interface Rollable<In extends object, Out> {
  roll<T extends object = In, P extends object = In & T>(rolled: Roll<P, Out>): Rollable<P, Out>;
  around<T>(Component: React.ComponentType<In & T>): React.ComponentType<Out>;
}

export type HighComponent<P extends object, C extends React.ComponentType<P> = React.ComponentType<P>> = (
  component: C & React.ComponentType<P>,
) => (props: P) => React.ReactNode | React.ReactElement | JSX.Element | React.ComponentType;
