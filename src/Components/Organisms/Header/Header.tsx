import React, { useState } from 'react';
import { CenterContainer, Logo, MainWrapper, Popup, SideContainer } from './Header.styles';
import tile from '../../../assets/images/tile.png';
import list from '../../../assets/images/list.png';

const Header = () => {
  return (
    <MainWrapper>
      <SideContainer>
        <Logo />
        <button>WYBIERZ KRAJ</button>
      </SideContainer>
      <CenterContainer>
        <button>
          <img src={tile} />
        </button>
        <Popup />
      </CenterContainer>
    </MainWrapper>
  );
};

export default Header;
