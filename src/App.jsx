import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Top/Header/Header';
import Homepage from './components/Pages/Homepage/Homepage';
import Episodes from './components/Pages/Episodes/Episodes';
import About from './components/Pages/About/About';




function App() {


  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Episodes' element={<Episodes />} />
      </Routes>

     <Footer />
    </BrowserRouter>
  )
}

export default App