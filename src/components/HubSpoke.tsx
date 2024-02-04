import { IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonThumbnail } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import { styled } from 'styled-components';

const Image = styled(IonThumbnail)`
  --size: 64px;
  --border-radius: 16px;
`;

export const Grid = styled(IonGrid)`
  --ion-grid-width: 72%;

  --ion-grid-width-xs: 72%;
  --ion-grid-width-sm: 288px;
  --ion-grid-width-md: 384px;
  --ion-grid-width-lg: 480px;
  --ion-grid-width-xl: 570px;
`;

export function HubSpoke(): JSX.Element {
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

export const Column = styled(IonCol)`
  text-align: center;
`;

function HubSpokeItem(props: Record<string, unknown>): JSX.Element {
  return (
    <IonRouterLink href={props.href as string}>
      <Image
        style={{ padding: '8px', textAlign: 'center', display: 'flex', placeItems: 'center', placeContent: 'center' }}
      >
        <IonIcon icon={settingsOutline} style={{ scale: '2' }} />
      </Image>
      <IonText className="--" color="dark" style={{ padding: '8px' }}>
        {props.children as React.ReactNode}
      </IonText>
    </IonRouterLink>
  );
}
