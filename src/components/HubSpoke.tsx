import { IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonThumbnail } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import { styled } from 'styled-components';

const Image = styled(IonThumbnail)`
  --size: 64px;
  --border-radius: 16px;
`;

const Grid = styled(IonGrid)`
  --ion-grid-width: 72%;

  --ion-grid-width-xs: 72%;
  --ion-grid-width-sm: 288px;
  --ion-grid-width-md: 384px;
  --ion-grid-width-lg: 480px;
  --ion-grid-width-xl: 570px;
`;

export function HubSpoke() {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
        <IonCol size="4" size-md="2" size-lg="2">
          <HubSpokeItem href="/settings" img="https://ionicframework.com/docs/img/demos/thumbnail.svg">
            Settings
          </HubSpokeItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

const Column = styled(IonCol)`
  text-align: center;
`;

function HubSpokeItem(props: any) {
  return (
    <IonRouterLink href={props.href}>
      <Image
        style={{ padding: '8px', textAlign: 'center', display: 'flex', placeItems: 'center', placeContent: 'center' }}
      >
        <IonIcon icon={settingsOutline} style={{ scale: '2' }} />
      </Image>
      <IonText className="--" color="dark" style={{ padding: '8px' }}>
        {props.children}
      </IonText>
    </IonRouterLink>
  );
}
