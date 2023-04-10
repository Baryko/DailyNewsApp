import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  align-content: center;

  @media (orientation: landscape) {
    column-gap: 5%;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    column-gap: 6%;
  }
  @media screen and (min-width: 768px) and (orientation: landscape) {
  }
`;

export const Heading = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  text-align: center;
`;
