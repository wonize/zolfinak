import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

/**
 * @name IonicPageLayout
 * @example
 * <IonPage>
 *   <IonHeader>
 *     <IonToolbar>
 *       <IonTitle>{title}</IonTitle>
 *     </IonToolbar>
 *   </IonHeader>
 *   <IonContent
 *     fullscreen={option.fullscreen}
 *     className={option.contentClassName}>
 *     <Component {...(props as P)} />
 *   </IonContent>
 * </IonPage>
 */
export function withIonPageLayout<P extends {}>(
	title: string,
	option: IonPageLayoutOption = DEFAULT_ION_PAGE_LAYOUT_OPTION
) {
	return function HigherOrderComponent(Component: React.ComponentType<P>) {
		return function InnerComponent(props: P) {
			return React.createElement(
				IonPage,
				{},
				React.createElement(
					IonHeader,
					{},
					React.createElement(IonToolbar, {}),
					React.createElement(IonTitle, {}, title)
				),
				React.createElement(
					IonContent,
					{ fullscreen: option.fullscreen, className: option.contentClassName },
					React.createElement(Component, { ...props })
				)
			);
		};
	};
}

export const DEFAULT_ION_PAGE_LAYOUT_OPTION: IonPageLayoutOption = {
	fullscreen: true,
	withToolbar: true,
};

export interface IonPageLayoutOption {
	fullscreen: boolean;
	contentClassName?: string;
	withToolbar?: boolean;
}
