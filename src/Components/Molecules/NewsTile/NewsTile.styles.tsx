import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 248px;
  margin-top: 18px;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 280px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 340px;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    width: 450px;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    width: 600px;
  }
`;

export const PictureWrapper = styled.div`
  height: 118px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    height: 130px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 160px;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    height: 260px;
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
    height: 400px;
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

  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
  }

  @media screen and (min-width: 1536px) and (orientation: landscape) {
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.p`
  font-size: 11px;
  line-height: 12px;
  font-weight: 400;
  margin-top: 0;
  text-align: justify;
  margin-bottom: 8px;
`;

export const Footer = styled.div`
  font-size: 11px;
  line-height: 12px;
  display: flex;
  height: 20px;
  font-weight: 400;
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
