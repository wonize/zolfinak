import React from "react";

export function withProvider<P>(
	Provider: React.Provider<P>,
	defaultProps: Partial<React.ProviderProps<P>> = {}
) {
	return function HigherOrderComponent(children: React.ComponentType<P>) {
		return function InnerComponent(props: P) {
			return React.createElement(
				Provider,
				Object.assign({}, defaultProps as React.ProviderProps<P>, props, {
					children,
				})
			);
		};
	};
}
