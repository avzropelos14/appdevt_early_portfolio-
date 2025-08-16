import { useState } from 'react'
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
    <div className="separator"></div>
    <FAQ />
    <Footer />
  </div> 
</>
 
  );
}

export default App;