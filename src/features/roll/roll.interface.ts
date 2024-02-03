import type React from "react";

export type FnOut<In extends {}> =
	| React.ReactElement
	| JSX.Element
	| React.ComponentType<In>
	| Iterable<React.ReactElement>;

export type Fn<In extends {}, Out = FnOut<In>> = (
	Component: React.ComponentType<In>
) => (props: In) => Out;

export interface Rollable<In, Out> {
	roll<T extends {}>(rolled: Fn<In & T, Out>): Rollable<In & T, Out>;
	around<T>(Component: React.ComponentType<In & T>): React.ComponentType<In & T & Out>;
}
