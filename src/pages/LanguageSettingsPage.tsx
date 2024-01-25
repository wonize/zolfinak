import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

function LanguageSettingsPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Language & Region</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>Language</IonText>
      </IonContent>
    </IonPage>
  );
}

export { LanguageSettingsPage };
