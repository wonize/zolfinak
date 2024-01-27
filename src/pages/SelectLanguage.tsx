import { IonIcon, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { languageOutline } from 'ionicons/icons';
import { WithTranslation, withTranslation } from 'react-i18next';
import { LangCode, LangNativeName } from '../features/i18n/code';
import { changeLanguage } from '../features/i18n/i18n';

const SettingItemSelectLanguage = withTranslation()(function SettingItemSelectLanguage({ t, i18n }: WithTranslation) {
  return (
    <IonItem>
      <IonIcon slot="start" icon={languageOutline} />
      <IonSelect
        label={t('settings_language_label')}
        labelPlacement="start"
        value={i18n.language}
        onIonChange={(event) => changeLanguage(event.target.value)}
      >
        <IonSelectOption value={LangCode['ENGLISH']}>{LangNativeName['ENGLISH']}</IonSelectOption>
        <IonSelectOption value={LangCode['PERSIAN']}>{LangNativeName['PERSIAN']}</IonSelectOption>
        <IonSelectOption value={LangCode['TURKISH']}>{LangNativeName['TURKISH']}</IonSelectOption>
        <IonSelectOption value={LangCode['RUSSIAN']}>{LangNativeName['RUSSIAN']}</IonSelectOption>
        <IonSelectOption value={LangCode['CHINESE']}>{LangNativeName['CHINESE']}</IonSelectOption>
        <IonSelectOption value={LangCode['ARABIC']}>{LangNativeName['ARABIC']}</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
});

export { SettingItemSelectLanguage };
