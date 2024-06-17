import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import WhyChoseUs from './components/WhyChoseUs';
import DownlaodApp from './components/DownlaodApp';
import OurSpace from './components/OurSpace';
import LandingBanner from './components/LandingBanner';


function App() {

  return (
    <>
      <AppBar/>
      <LandingBanner/>
      <WhyChoseUs/>
      <OurSpace/>
      <DownlaodApp/>
    </>
  );
}

export default App;
