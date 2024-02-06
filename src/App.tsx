import React from 'react';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albumsOutline, appsOutline, settingsOutline } from 'ionicons/icons';
import { AppRouter } from './App.router';
import { I18nextProvider } from './features/i18n/mod';
import styled from 'styled-components';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';
import { DirctionStore } from './pages/dirction-state';

setupIonicReact();

export enum Direction {
  ltr = 'ltr',
  rtl = 'rtl'
}

type WrapperProps = {
  direction: Direction | `${Direction}`;
};

const Wrapper = styled('div')<WrapperProps>(({ direction }) => ({
  direction: direction
}));

const App: React.FC = () => {
const DirctionState : Direction | `${Direction}` | string | any = DirctionStore.useState(s => s.dirction)
  return (
    <IonApp>
      <Wrapper direction={DirctionState}>
        <I18nextProvider>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <AppRouter />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IonIcon aria-hidden="true" icon={appsOutline} />
                </IonTabButton>
                <IonTabButton tab="daily" href="/daily">
                  <IonIcon aria-hidden="true" icon={albumsOutline} />
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                  <IonIcon aria-hidden="true" icon={settingsOutline} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </I18nextProvider>
      </Wrapper>
    </IonApp>
  );
}

export default App;
