import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 12px;
  font-weight: bold;
  color: black;
  line-height: 18px;
  text-align: justify;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-top: 0;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: 18px;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
