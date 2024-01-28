import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import { SettingItemSelectLanguage } from './SelectLanguage';
import './SettingsPage.css';
import { WithTranslation, withTranslation } from 'react-i18next';
import { I18nScope } from '../features/i18n/token';

const SettingsPage: React.FC<WithTranslation> = ({ t }) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{t('title')}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{t('title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <SettingItemSelectLanguage />
        <IonItem routerLink="/settings/about">
          <IonIcon slot="start" icon={informationCircleOutline} />
          <IonText>{t('about_link_text')}</IonText>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default withTranslation(I18nScope.SETTINGS)(SettingsPage);
