import styled from 'styled-components';

export const StyledBurger = styled.div`
  width: 40px;
  height: 30px;
  cursor: pointer;

  @media (orientation: landscape) {
    height: 21px;
    width: 17%;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    height: 24px;
    width: 15%;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 32px;
    width: 18%;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
