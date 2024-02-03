import { IonIcon, IonLabel, IonText } from '@ionic/react';
import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const IconWrapper = styled.div`
  background: #dde;
  color: #333;
  border-radius: 9999pt;
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  width: 5em;
  height: 5em;
`;

const Icon = styled(IonIcon).attrs({ size: 'large', 'aria-hidden': true })``;

const Text = styled(IonText)`
  color: white;
  font-weight: 400;
  width: 80%;
  -webkit-text-wrap: balance;
  word-wrap: break-word;
  word-break: break-word;
`;

const Wrapper = styled(IonLabel).attrs({ tabIndex: 1 })`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  row-gap: 1em;
  border: none;
  outline: none;
  cursor: pointer;

  &,
  & * {
    transition: 0.25s ease all;
  }

  &:hover,
  &:focus {
    transform: scale(0.92);
    row-gap: 1.5em;
  }
  &:hover ${IconWrapper}, &:focus ${IconWrapper} {
    color: #dde;
    background: #464645;
    width: 4.5em;
    height: 4.5em;
    transform: scale(1.3);
  }
`;

interface ItemProps extends PropsWithChildren {
  href: string;
  icon: unknown;
}

function HubSpokeItem(props: ItemProps): JSX.Element {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={props.icon as string} />
      </IconWrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

export { HubSpokeItem };
