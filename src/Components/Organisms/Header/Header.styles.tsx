import styled from 'styled-components';
import logo from '../../../assets/images/logo.png';
import popup from '../../../assets/images/Popup.png';
import tile from '../../../assets/images/tile.png';

export const MainWrapper = styled.div`
  height: 120px;
  background-color: #1d1d1d;
  display: flex;
  width: 100%;

  @media (orientation: landscape) {
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    height: 160px;
  }
`;

export const SideContainer = styled.div`
  width: 50%;
  border-bottom: 2px solid #c0c7d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6px;

  @media (orientation: landscape) {
    width: 30%;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    width: 35%;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 30%;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 25%;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    width: 20%;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    width: 18%;
  }

  button {
    font-size: 12px;
    padding: 0;
    height: 21px;
    font-weight: bold;
    width: 80%;
    background-color: #d9d9d9;
    display: block;
    text-align: center;
    border: 1px solid #c8a7a7;
    border-radius: 19px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row-reverse;
  border-left: 2px solid #c0c7d6;
  border-bottom: 2px solid #c0c7d6;

  @media (orientation: landscape) {
    width: 70%;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    width: 70%;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 75%;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    width: 80%;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    width: 82%;
  }

  button {
    height: 20px;
    margin-right: 5%;
    margin-bottom: 6px;
    border: none;
    width: 20px;
    background-color: inherit;
    color: white;
    padding: 0;
    max-width: 15%;
    cursor: pointer;

    @media (orientation: landscape) {
    }

    @media screen and (min-width: 586px) and (orientation: portrait) {
      margin-right: 2%;
    }
    @media screen and (min-width: 586px) and (orientation: landscape) {
    }

    @media screen and (min-width: 768px) and (orientation: portrait) {
      margin-right: 1.5%;
    }

    @media screen and (min-width: 768px) and (orientation: landscape) {
      margin-right: 1.5%;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape) {
      margin-right: 1%;
    }

    @media screen and (min-width: 1280px) and (orientation: landscape) {
      margin-right: 1%;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
      margin-right: 1%;
    }
    @media screen and (min-width: 1536px) and (orientation: landscape) {
      margin-right: 1%;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Logo = styled.div`
  min-width: 200px;
  height: 120px;
  background-image: url(${logo});
  background-size: 90%;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 140px;
    min-width: 360px;
  }
`;

export const Popup = styled.div`
  width: 25px;
  height: 19%;
  margin-bottom: 4px;
  margin-left: 0.5%;
  cursor: pointer;
  background-image: url(${popup});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  @media (orientation: landscape) {
  }

  @media screen and (min-width: 586px) and (orientation: landscape) {
    margin-bottom: 2px;
  }
`;
