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
  width: 64pt;
  height: 64pt;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  row-gap: 16pt;
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
    row-gap: 24pt;
  }
  &:hover ${IconWrapper}, &:focus ${IconWrapper} {
    color: #dde;
    background: #464645;
    width: 48pt;
    height: 48pt;
    transform: scale(1.3);
  }
`;

interface ItemProps extends PropsWithChildren {
  href: string;
  icon: any;
}

function HubSpokeItem(props: ItemProps) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={props.icon} />
      </IconWrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

export { HubSpokeItem };
