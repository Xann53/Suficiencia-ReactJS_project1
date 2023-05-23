import React, { Component } from 'react';
import './allPageStyle.css';
import HomeHead from './homePageHeader';
import HomeBody from './homePageBody';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [ tempAns, setTempAns ] = useState({});
  
  useEffect(() => {
    axios.get('https://api.publicapis.org/entries').then(response => {
      console.log(response.data);
      setTempAns(response.data.entries);
    });
  },[])

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
  