import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import { SettingItemSelectLanguage } from './SelectLanguage';
import './SettingsPage.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <SettingItemSelectLanguage />
          <IonItem routerLink="/settings/about">
            <IonIcon slot="start" icon={informationCircleOutline} />
            <IonText>About</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
