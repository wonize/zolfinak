import { IonSelectOption } from '@ionic/react';
import type { LanguageName } from '../i18n/languages';

export const SelectOption: React.FC<Props> = ({ lang }) => (
  <IonSelectOption dir={lang.textDirection} value={lang.valueOf()}>
    {lang.toNativeName()}
  </IonSelectOption>
);

type Props = {
  lang: LanguageName;
};
