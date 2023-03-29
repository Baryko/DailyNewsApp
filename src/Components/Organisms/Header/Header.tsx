import React from 'react';
import { CenterContainer, Logo, MainWrapper, Popup, SideContainer, SwitcherWrapper } from './Header.styles';

const Header = () => (
  <MainWrapper>
    <SideContainer>
      <Logo />
      <span>WYBIERZ KRAJ</span>
    </SideContainer>
    <CenterContainer>
      <div>
        <SwitcherWrapper>
          <input type="checkbox" id="switcher"></input>
          <label htmlFor="switcher"></label>
        </SwitcherWrapper>
        <Popup />
      </div>
    </CenterContainer>
  </MainWrapper>
);

export default Header;
