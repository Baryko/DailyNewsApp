import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1d1d1d;
  width: 50%;
  color: white;
  padding-top: 0.5%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  height: 100%;
  position: fixed;
  top: 0;

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

  button {
    width: 29px;
    height: 29px;
    position: fixed;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;

    @media (orientation: landscape) {
      left: 30%;
      top: 50%;
      transform: translateY(-50%);
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
    }
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
    width: 18%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

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
    position: relative;

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

export const ListItem = styled.li``;
