import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media (orientation: landscape) {
    column-gap: 5%;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    column-gap: 8%;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
