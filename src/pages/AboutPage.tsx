import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

export function AboutPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>About</IonText>
      </IonContent>
    </IonPage>
  );
}
