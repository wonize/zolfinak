import { IonSelectOption } from '@ionic/react';
import { getNativeName, getTextDirection } from '../i18n/helpers';
import type { LanguageName } from '../i18n/languages';

export const SelectOption: React.FC<Props> = ({ lang }) => (
  <IonSelectOption dir={getTextDirection(lang)} value={lang}>
    {getNativeName(lang)}
  </IonSelectOption>
);

type Props = {
  lang: LanguageName;
};
