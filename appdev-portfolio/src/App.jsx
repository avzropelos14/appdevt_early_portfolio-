import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroBanner from './components/HeroBanner'
import BodyCon from './components/BodyCon'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
<>
  <div>
    <HeroBanner />
    <BodyCon />
    <FAQ />
    <Footer />
  </div> 
</>
 
  );
}

export default App;