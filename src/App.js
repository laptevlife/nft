import React from 'react'
import Header from './components/Header/index'
import TopSection from './components/TopSection/index';
import Risks from './components/Risks';
import AboutProject from './components/AboutProject/index';
import DigitalSide from './components/DigitalSide';
import AboutCollection from './components/AboutCollection.js';
import {Context} from './constants/context'


const App = () => {
  return (
    <Context.Provider value={null}>
    <div className='main'>
      <Header />
      <TopSection />
      <AboutProject />
      <DigitalSide />
      <AboutCollection />
      <Risks />

    </div>
    </Context.Provider>
  )
}

export default App