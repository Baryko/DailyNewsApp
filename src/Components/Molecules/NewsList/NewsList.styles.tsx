import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  border-top: 0.3px solid #000000;
  width: 90%;
  padding-top: 5px;

  cursor: pointer;

  @media (orientation: landscape) {
    margin-bottom: 0px;
    padding-top: 2px;
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 16px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 1024px) and (orientation: portrait) {
    margin-top: 10px;
    padding-top: 15px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    margin-top: 12px;
    padding-top: 15px;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    margin-top: 16px;
    padding-top: 15px;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    margin-top: 12px;
    padding-top: 9px;
    margin-bottom: 2px;
  }
`;

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
  line-height: 14px;

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const Footer = styled.div`
  font-size: 11px;
  line-height: 12px;
  display: flex;
  height: 20px;
  font-weight: 400;

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: 14px;
  }
`;

export const Date = styled.span`
  position: relative;
  margin-right: 12px;
  height: 20px;

  &::after {
    display: block;
    top: 12%;
    left: 107%;
    content: '';
    width: 2px;
    position: absolute;
    height: 12px;
    background-color: #cabbbb;
  }
`;

export const Source = styled.span`
  height: 20px;
`;
