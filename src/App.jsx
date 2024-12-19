import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from './components/layout/Header'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Footer from './components/layout/Footer'
// import Gallery from './components/Gallery'
// import GalleryOne from './components/GalleryOne'
// import GalleryTwo from './components/GalleryTwo'
import Contact from './components/Contact'
import Faq from './components/Faq'
// import GalleryGirly from './components/GalleryGirly'
// import GalleryIcons from './components/GalleryIcons'

// imges
import scroll from "./assets/other/totop.png"
import Landscaping from './components/service/Landscaping'
import Snow from './components/service/Snow'
import Fence from './components/service/Fence'
import Woodwork from './components/service/Woodwork'
import Plumbing from './components/service/Plumbing'
import Renovation from './components/service/Renovation'
import Electrical from './components/service/Electrical '
import Painting from './components/service/Painting'
import Shelving from './components/service/Shelving'
import SmallHouseHold from './components/service/SmallHouseHold'
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
              {/* service section router */}
              <Route path='/landscaping' element={<Landscaping/>} />
              <Route path='/snow' element={<Snow/>} />
              <Route path='/fence' element={<Fence/>} />
              <Route path='/woodwork' element={<Woodwork/>} />
              <Route path='/plumbing' element={<Plumbing/>} />
              <Route path='/renovation' element={<Renovation/>} />
              <Route path='/electrical' element={<Electrical/>}/>
              <Route path='/painting' element={<Painting/>}/>
              <Route path='/shelving' element={<Shelving/>}/>
              <Route path='/smallhouse' element={<SmallHouseHold/>}/>
              <Route path='/service'  element={<Service/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/faq' element={<Faq/>} />
              {/* <Route path='/gallery'  element={<Gallery/>} />
              <Route path='/snow-remove'  element={<GalleryOne/>} />
              <Route path='/gallery-classic' element={<GalleryTwo/>} />
              <Route path='/gallery-girly' element={<GalleryGirly/>} />
              <Route path='/gallery-icons-only' element={<GalleryIcons/>} /> */}
          </Routes>
          <Footer/>

          <div className="top-scroll">
              <img src={scroll} role='button' onClick={ScrollTop} height={50} alt="" />
          </div>
      </div>
  )
}

export default App
