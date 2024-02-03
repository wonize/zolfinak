import React from "react";
import { Route } from "react-router-dom";

export function withPage(
	path: string,
	option: WithPageOption = DEFAULT_WITH_PAGE_OPTION
) {
	return function HigherOrderComponent<P>(component: React.ComponentType<P>) {
		return function InnerComponent(props: P) {
			return React.createElement(
				Route,
				Object.assign({}, { path, component }, option, props)
			);
		};
	};
}

export interface WithPageOption {
	exact: boolean;
}

export const DEFAULT_WITH_PAGE_OPTION: Readonly<WithPageOption> = {
	exact: true,
};
