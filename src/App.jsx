import { useState } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { Routing } from './routes'
import { Footer } from './components/Footer/Footer'

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
