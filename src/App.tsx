import React from 'react';
import Header from './Components/Organisms/Header/Header';
import SideBar from './Components/Organisms/SideMenu/SideBar';
import MainTemplate from './Components/Templates/MainTemplate/MainTemplate';

function App() {
  return (
    <MainTemplate>
      <Header />
      <SideBar />
    </MainTemplate>
  );
}

export default App;
