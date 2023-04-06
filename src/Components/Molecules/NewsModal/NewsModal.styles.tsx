import styled, { keyframes } from 'styled-components';
import { Props } from './NewsModal.types';

const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Modal = styled.div`
  min-height: 40%;
  height: auto;
  width: 80%;
  position: fixed;
  background-color: #fffdfd;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
  cursor: pointer;
  border-radius: 30px;
  animation: ${fadeInAnimation} 0.1s linear;
  border: 0.1px solid #1d1d1d;
  padding-bottom: 40px;

  @media (orientation: landscape) {
    min-height: 70%;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 85%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  word-break: break-all;
`;

export const Content = styled.p`
  text-align: justify;
  font-size: 11px;
`;

export const Author = styled.span`
  display: block;
  width: 100%;
  font-size: 11px;
`;

export const Url = styled.a`
  font-size: 11px;
  text-overflow: ellipsis;
  text-wrap: 
  width: 80%;
`;
