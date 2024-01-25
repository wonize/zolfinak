import { styled } from 'styled-components';

const HubSpokeGrid = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  row-gap: 1.5em;
`;

export { HubSpokeGrid };
