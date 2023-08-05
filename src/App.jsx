import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from 'E:\Github-repos\Rick-Morty-React-Project\src\components\Footer\Footer.css';
import Header from 'E:\Github-repos\Rick-Morty-React-Project\src\components\Top\Header.css';
import Homepage from 'E:\Github-repos\Rick-Morty-React-Project\src\components\Pages\Homepage\Homepage.css';
import Episodes from 'E:\Github-repos\Rick-Morty-React-Project\src\components\Pages\Episodes\Episodes.css';
import About from 'E:\Github-repos\Rick-Morty-React-Project\src\components\Pages\About\About.css';




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