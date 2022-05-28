import React from 'react'
import Header from './components/Header/index'
import TopSection from './components/TopSection/index';
import Risks from './components/Risks';
import AboutProject from './components/AboutProject/index';
import DigitalSide from './components/DigitalSide';
import AboutCollection from './components/AboutCollection.js';
import RoadMap from './components/RoadMap/index.js';
import { Context } from './constants/context'


const App = () => {

  const [windowWidth, setResize] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setResize(window.innerWidth)
    })
    return () => window.addEventListener('resize', () => {
      setResize(window.innerWidth)
    })
  }, [])


  return (
    <Context.Provider value={{windowWidth}}>
      <div className='main'>
        <Header />
        <TopSection />
        <AboutProject />
        <DigitalSide />
        <AboutCollection />
        <RoadMap />
        <Risks />

      </div>
    </Context.Provider>
  )
}

export default App