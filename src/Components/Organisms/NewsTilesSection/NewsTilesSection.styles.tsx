import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  column-gap: 5%;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    column-gap: 8%;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
  }
`;
