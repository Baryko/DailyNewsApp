import React from 'react';
import Header from './Components/Organisms/Header/Header';
import SideBar from './Components/Organisms/SideMenu/SideBar';
import MainTemplate from './Components/Templates/MainTemplate/MainTemplate';
import { useSelector } from 'react-redux';
import { SideBarState } from './App.types';
import { Route, Routes, useParams } from 'react-router-dom';
import NewsSection from './Components/Organisms/NewsSection/NewsSection';

function App() {
  const isSideBarVisible = useSelector<SideBarState>((state) => state.barVisibility.isVisible);

  return (
    <MainTemplate>
      <Header />
      {isSideBarVisible ? <SideBar /> : null}
      <Routes>
        <Route path={`/country/:id`} element={<NewsSection />}></Route>
      </Routes>
    </MainTemplate>
  );
}

export default App;
