import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  archiveOutline,
  basketOutline,
  beerOutline,
  ellipsisHorizontalOutline,
  fishOutline,
  magnetOutline,
  medkitOutline,
  personOutline,
} from 'ionicons/icons';
import moment from 'moment';
import { styled } from 'styled-components';
import { HubSpokeGrid } from '../components/HubSpokeGrid';
import { HubSpokeItem } from '../components/HubSpokeItem';
import './HomePage.css';

const HubSpokeTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-weight: 700;
  text-transform: uppercase;

  & ion-label {
    font-size: small;
  }
`;

const HubSpokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em;
  row-gap: 1em;
`;

const Tab1: React.FC = () => {
  const today = moment().format('ddd DD MMM YYYY');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              style={{
                backgroundColor: 'white',
                borderRadius: '4pt',
                width: '2em',
                height: '2em',
                margin: '1em 1em',
              }}
              color="light"
            >
              <IonIcon size="small" icon={personOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>{today}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              All your needs,
              <br />
              one app
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar />
        <HubSpokeWrapper>
          <HubSpokeTitle>
            <IonLabel>WHAT DO YOU NEED?</IonLabel>
            <IonIcon icon={ellipsisHorizontalOutline} />
          </HubSpokeTitle>
          <HubSpokeGrid>
            <HubSpokeItem href="/settings" icon={magnetOutline}>
              Surprise me!
            </HubSpokeItem>

            <HubSpokeItem href="/settings" icon={basketOutline}>
              Groceries
            </HubSpokeItem>

            <HubSpokeItem href="/settings" icon={fishOutline}>
              Meat & Fish
            </HubSpokeItem>

            <HubSpokeItem href="/settings" icon={beerOutline}>
              Fruits & Vegetables
            </HubSpokeItem>

            <HubSpokeItem href="/settings" icon={medkitOutline}>
              Health & Medicines
            </HubSpokeItem>

            <HubSpokeItem href="/settings" icon={archiveOutline}>
              Send Packages
            </HubSpokeItem>
          </HubSpokeGrid>
        </HubSpokeWrapper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
