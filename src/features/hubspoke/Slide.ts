import { styled } from 'styled-components';

const SlideWrapper = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  row-gap: 1.5em;
  place-content: stretch;
  place-items: stretch;
`;
