import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (orientation: landscape) {
    column-gap: 5%;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    column-gap: 6%;
  }
`;

export const Heading = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 40%;
  text-align: center;

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 16px;
    margin-bottom: 5px;
    padding-top: 10px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: 22px;
  }
`;
