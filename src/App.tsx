import React from 'react';
import Header from './Components/Organisms/Header/Header';
import SideBar from './Components/Organisms/SideMenu/SideBar';
import MainTemplate from './Components/Templates/MainTemplate/MainTemplate';

import { Route, Routes, useParams } from 'react-router-dom';
import NewsSection from './Components/Organisms/NewsSection/NewsSection';

function App() {
  return (
    <MainTemplate>
      <Header />
      <SideBar />
      <Routes>
        <Route path={`/`} element={<NewsSection />}></Route>
        <Route path={`/country/:id`} element={<NewsSection />}></Route>
      </Routes>
    </MainTemplate>
  );
}

export default App;
