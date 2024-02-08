import { IonIcon, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { languageOutline } from 'ionicons/icons';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { DirctionCode, LangCode, LangNativeName } from '../features/i18n/code';
import { changeLanguage } from '../features/i18n/i18n';
import { I18nScope } from '../features/i18n/token';
import { DirctionStore, Direction } from './dirction-state';

const SettingItemSelectLanguage = withTranslation(I18nScope.SETTINGS)(function SettingItemSelectLanguage({
  t,
  i18n,
}: WithTranslation) {
  const ChangelanDirction = (lan: string | any) => {
    changeLanguage(lan);
    DirctionStore.update(s => {s.dirction = DirctionCode[lan]})
  };
  return (
    <IonItem>
      <IonIcon slot="start" icon={languageOutline} />
      <IonSelect
        label={t('language_label')}
        labelPlacement="start"
        value={i18n.language}
        onIonChange={(event) => ChangelanDirction(event.target.value)}
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
