import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LandingPage from './Pages/LandingPage';
import SingleCountryPage from './Pages/SingleCountryPage';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/:id" element={ <SingleCountryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
