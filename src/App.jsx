import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from './components/layout/Header'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Footer from './components/layout/Footer'
import Gallery from './components/Gallery'
import GalleryOne from './components/GalleryOne'
import GalleryTwo from './components/GalleryTwo'
import Contact from './components/Contact'
import Faq from './components/Faq'
import GalleryGirly from './components/GalleryGirly'
import GalleryIcons from './components/GalleryIcons'

// imges
import scroll from "./assets/other/totop.png"
function App() {

  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }

  return (

      <div>
          <Header/>
          <Routes>
              <Route path='/kinsellservice'  element={<Home/>} />
              <Route path='/about'  element={<About/>} />
              <Route path='/service'  element={<Service/>} />
              <Route path='/gallery'  element={<Gallery/>} />
              <Route path='/snow-remove'  element={<GalleryOne/>} />
              <Route path='/gallery-classic' element={<GalleryTwo/>} />
              <Route path='/gallery-girly' element={<GalleryGirly/>} />
              <Route path='/gallery-icons-only' element={<GalleryIcons/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/faq' element={<Faq/>} />
          </Routes>
          <Footer/>

          <div className="top-scroll">
              <img src={scroll} role='button' onClick={ScrollTop} height={50} alt="" />
          </div>
      </div>
  )
}

export default App
