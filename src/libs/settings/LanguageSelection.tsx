import { IonIcon, IonItem, IonSelect } from '@ionic/react';
import { languageOutline } from 'ionicons/icons';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { I18nScope, LanguageName, changeLanguage } from '../i18n/mod';
import { SelectOption } from './Option';

function LanguageSelection({ t, i18n }: WithTranslation): JSX.Element {
  return (
    <IonItem>
      <IonIcon slot="start" icon={languageOutline} />
      <IonSelect
        label={t('language_label')}
        labelPlacement="start"
        value={i18n.language}
        onIonChange={(event) => changeLanguage(event.target.value)}
      >
        <SelectOption lang={LanguageName.ENGLISH} />
        <SelectOption lang={LanguageName.PERSIAN} />
        <SelectOption lang={LanguageName.TURKISH} />
        <SelectOption lang={LanguageName.RUSSIAN} />
        <SelectOption lang={LanguageName.CHINESE} />
        <SelectOption lang={LanguageName.ARABIC} />
      </IonSelect>
    </IonItem>
  );
}

export const SettingsLanguageSelection = withTranslation(I18nScope.SETTINGS)(LanguageSelection);
