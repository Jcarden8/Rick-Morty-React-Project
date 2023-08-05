import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Top/Header';
import Homepage from './components/Pages/Homepage/Homepage';
import Episodes from './components/Pages/Episodes/Episodes';
import About from './components/Pages/About/About';




function App() {


  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>

     <Footer />
    </BrowserRouter>
  )
}

export default App