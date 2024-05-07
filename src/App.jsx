import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'
import { Routing } from './components/Routes'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routing/>
    <Footer/>
    </>
  )
}

export default App
