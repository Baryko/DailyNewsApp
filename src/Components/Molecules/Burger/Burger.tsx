import React from 'react';
import burger from '../../../assets/images/hamburger.png';
import { StyledBurger } from './Burger.styles';
import { Props } from './Burger.types';

const Burger: React.FC<Props> = ({ handleOpenSideBar }) => (
  <StyledBurger onClick={handleOpenSideBar}>
    <img src={burger} />
  </StyledBurger>
);

export default Burger;
