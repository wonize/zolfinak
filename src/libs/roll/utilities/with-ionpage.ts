import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

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
export function withIonPageLayout<P extends object = object>(
  title: string,
  option: IonPageLayoutOption = DEFAULT_ION_PAGE_LAYOUT_OPTION,
): (Component: React.ComponentType<P>) => (props: P) => JSX.Element {
  const opt = Object.assign({}, DEFAULT_ION_PAGE_LAYOUT_OPTION, option);
  return function HigherOrderComponent(Component: React.ComponentType<P>): (props: P) => JSX.Element {
    return function EnhancedComponent(props: P): JSX.Element {
      return React.createElement(
        IonPage,
        {},
        opt?.withToolbar === true
          ? React.createElement(
              IonHeader,
              {},
              Boolean(opt?.Toolbar) === true
                ? React.createElement(opt.Toolbar!, {})
                : React.createElement(IonToolbar, {}, React.createElement(IonTitle, {}, title)),
            )
          : null,
        React.createElement(
          IonContent,
          { fullscreen: opt?.fullscreen, className: opt?.contentClassName },
          React.createElement(Component, { ...props }),
        ),
      );
    };
  };
}

export const DEFAULT_ION_PAGE_LAYOUT_OPTION: IonPageLayoutOption = {
  fullscreen: true,
  withToolbar: true,
};

export interface IonPageLayoutOption {
  fullscreen?: boolean;
  contentClassName?: string;
  withToolbar?: boolean;
  Toolbar?: React.ComponentType;
}
