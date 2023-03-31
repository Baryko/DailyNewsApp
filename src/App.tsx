import React from 'react';
import Header from './Components/Organisms/Header/Header';
import SideBar from './Components/Organisms/SideMenu/SideBar';
import MainTemplate from './Components/Templates/MainTemplate/MainTemplate';
import { useSelector } from 'react-redux';
import { SideBarState } from './App.types';
import NewsTilesSection from './Components/Organisms/NewsTilesSection/NewsTilesSection';

function App() {
  const isSideBarVisible = useSelector<SideBarState>((state) => state.barVisibility.isVisible);
  console.log(isSideBarVisible);

  return (
    <MainTemplate>
      <Header />
      {isSideBarVisible ? <SideBar /> : null}
      <NewsTilesSection />
    </MainTemplate>
  );
}

export default App;
