import { IonIcon, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { languageOutline } from 'ionicons/icons';

enum Language {
  ENGLISH = 'en-US',
  PERSIAN = 'fa-IR',
  TURKISH = 'tk-TK',
  ARABIC = 'ar-IQ',
  DEFAULT = PERSIAN,
}

function SettingItemSelectLanguage() {
  const selected_language = /* useStore().language || */ Language.DEFAULT;
  return (
    <IonItem>
      <IonIcon slot="start" icon={languageOutline} />
      <IonSelect label="Language" labelPlacement="start" value={selected_language}>
        <IonSelectOption value={Language.ENGLISH}>English</IonSelectOption>
        <IonSelectOption value={Language.PERSIAN}>Persian</IonSelectOption>
        <IonSelectOption value={Language.TURKISH}>Turkish</IonSelectOption>
        <IonSelectOption value={Language.ARABIC}>Arabic</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
}

export { SettingItemSelectLanguage };
