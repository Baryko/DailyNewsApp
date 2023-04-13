import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 94%;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 24px;
  border-top: 0.8px solid rgb(220, 220, 220);
  @media (orientation: landscape) {
    width: 95%;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 40%;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    width: 45%;
  }
`;

export const PictureWrapper = styled.div`
  margin-bottom: 16px;

  @media (orientation: landscape) {
    height: 330px;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    height: 450px;
  }
`;

export const Button = styled.button`
  height: 36px;
  width: 110px;
  cursor: pointer;
  padding: 8px;
  line-height: 18px;
  font-size: 15px;
  background-color: transparent;
  font-weight: bolder;
  text-align: center;
  border: 0.8px solid rgb(219, 219, 219);

  &:hover {
    color: rgb(141, 72, 72);
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 22px;
  font-weight: bold;
  color: black;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-bottom: 12px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 16px;
`;

export const Header = styled.div`
  font-size: 14px;
  line-height: 10px;
  font-weight: 400;
  display: flex;
`;

export const Date = styled.span`
  position: relative;
  margin-right: 14px;

  &::after {
    display: block;
    top: -20%;
    left: 107%;
    content: '';
    width: 1px;
    position: absolute;
    height: 14px;
    background-color: #cabbbb;
  }
`;

export const Source = styled.span``;
