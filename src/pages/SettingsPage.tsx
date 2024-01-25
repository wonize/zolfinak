import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { globeOutline, informationCircleOutline } from 'ionicons/icons';
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
          <IonItem routerLink="/settings/language">
            <IonIcon slot="start" icon={globeOutline} />
            <IonText>Languages and Regions</IonText>
          </IonItem>
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
