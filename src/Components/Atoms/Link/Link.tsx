import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
