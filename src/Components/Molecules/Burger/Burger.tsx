import React from 'react';
import burger from '../../../assets/images/hamburger.png';
import { StyledBurger } from './Burger.styles';
import { Props } from './Burger.types';

const Burger: React.FC<Props> = ({ handleOpenSideBar }) => (
  <StyledBurger onClick={handleOpenSideBar} data-testid="burger">
    <img src={burger} alt="burger" />
  </StyledBurger>
);

export default Burger;
