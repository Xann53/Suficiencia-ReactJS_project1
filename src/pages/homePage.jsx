import React, { Component } from 'react';
import './homePage.css';
import HomeHead from './homePageHeader';
import HomeBody from './homePageBody';

function Home() {
    return (
      <>
        <div>
          <header className="App-header">
            <HomeHead />
          </header>
        </div>
        <div class='b'></div>
        <div class='c'></div>
        <div class='bg'><HomeBody /></div>
      </>
    );
  }
  
  export default Home;
  