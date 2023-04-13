import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Props } from './SideBar.types';

export const Wrapper = styled.div<Props>`
  background-color: #1d1d1d;
  width: 70%;
  color: white;
  padding-top: 0.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
  position: fixed;
  top: 0%;
  z-index: 11;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: all 0.3s linear;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #1d1d1d;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 9px;
    border: 3px solid #1d1d1d;
  }

  @media (orientation: landscape) {
    width: 30%;
    padding-left: 2%;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    width: 35%;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 25%;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    width: 20%;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    width: 22%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-size: 18px;
  margin-top: 14px;

  @media (orientation: landscape) {
    width: 100%;
    row-gap: 6%;
  }

  @media screen and (min-width: 568px) and (orientation: portrait) {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    row-gap: 5%;
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: 26px;
    width: 100%;
  }

  div {
    padding: 0;
    align-items: center;
    display: flex;
    padding-bottom: 11%;
    cursor: pointer;

    @media (orientation: landscape) {
      padding-bottom: 6%;
    }
    &:hover {
      color: #d1dd65;
    }
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: 3%;
    margin-right: 5%;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  box-sizing: border-box;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    height: 3px;
    left: 0;
    width: 0%;
    bottom: -5px;
    transition: 0.3s;
  }

  &.active {
    color: #aed443;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.8px solid rgb(220, 220, 220);
  padding-bottom: 8px;

  button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;

    @media (orientation: landscape) {
      top: 4%;
      left: 84%;
    }

    @media screen and (min-width: 768px) and (orientation: portrait) {
      left: 37%;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape) {
      left: 25%;
    }

    @media screen and (min-width: 1280px) and (orientation: landscape) {
      left: 20%;
    }

    @media screen and (min-width: 1536px) and (orientation: landscape) {
      left: 18%;
    }

    img {
      width: 100%;
      height: 100%;
      rotate: 180deg;
    }
  }
`;
