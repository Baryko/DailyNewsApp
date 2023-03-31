import styled from 'styled-components';
import logo from '../../../assets/images/logo.png';
import popup from '../../../assets/images/Popup.png';

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

  @media (orientation: landscape) {
    width: 30%;
  }

  span {
    font-size: 14px;
    width: 80%;
    background-color: #d9d9d9;
    display: inline-block;
    text-align: center;
    border: 1px solid #c8a7a7;
    border-radius: 19px;
    margin-bottom: 6px;

    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 6px;

  @media screen and (min-width: 1024px) {
    max-width: 120px;
  }

  input {
    appearance: none;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 23px;
    border-radius: 19px;
    background: white;
    outline: none;
    font-size: 22px;
    transition: 0.25s;
    background-color: #d9d9d9;
    border: 1px solid #c8a7a7;
    margin: 0;
  }

  input::before {
    content: 'Kafelki';
    font-weight: bold;
    color: #ffffff;
    font-size: 14px;
  }

  input::after {
    z-index: 2;
    content: 'Lista';
    font-weight: bold;
    color: #1d1d1d;
    font-size: 14px;
  }

  input:checked {
    background-color: #d9d9d9;
  }

  label {
    z-index: 1;
    border-radius: 19px;
  }

  input:checked::after,
  input:checked::before {
    color: #000000;
    transition: color 0.5s;
  }

  input:checked + label {
    width: 50%;
    height: 23px;
    border-radius: 19px;
    background-color: #ffffff;
    display: inline-block;
    position: absolute;
    right: 0%;
  }

  input:not(:checked) {
    background: #d9d9d9;
    transition: background 0.4s;
  }

  input:not(:checked)::before {
    color: #ffff;
    transition: color 0.5s;
  }

  input:not(:checked)::after {
    transition: color 0.5s;
  }

  input:not(:checked) + label {
    width: 50%;
    height: 23px;
    background: #ffffff;
    position: absolute;
    left: 0%;
  }

  input:checked::after {
    color: white;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  border-left: 2px solid #c0c7d6;
  border-bottom: 2px solid #c0c7d6;

  @media (orientation: landscape) {
    width: 70%;
    justify-content: flex-end;
  }

  div {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
      width: 60%;
    }

    @media (orientation: landscape) {
      width: 50%;
      margin-left: 45%;
    }

    @media screen and (min-width: 768px) and (orientation: landscape) {
      width: 45%;
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

  @media screen and (min-width: 768px) {
    height: 140px;
    min-width: 360px;
  }
`;

export const Popup = styled.div`
  width: 70px;
  height: 50px;
  max-height: 50px;
  max-width: 70px;
  margin-bottom: 18px;
  border-radius: 40px;
  border: 1px solid #ffffff;
  cursor: pointer;
  background-image: url(${popup});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (orientation: landscape) {
    margin-bottom: 3px;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    max-height: 130px;
    max-width: 110px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    margin-bottom: 18px;
  }
`;
