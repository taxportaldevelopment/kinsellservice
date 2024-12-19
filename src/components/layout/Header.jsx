import {Link} from "react-router-dom"
//logo
import logo1 from "../../assets/images/logo1.gif";

// icons
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoLogoGoogleplus } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { useState } from "react";
const Header = () => {

    const [active,setActive] = useState("home")

  return (
     
     <div className="bg-white sticky-top">
      <div className=" container">
       <div className="contact-details container px-3 p-1 d-flex justify-content-between flex-wrap">
           <div className="left-side ">
              <MdOutlineMail className="h4" />
               <span className="brandColor"><a href="mailto:Cheemaaj@hotmail.com" className="text-black text-decoration-none ">Cheemaaj@hotmail.com</a></span> 
           </div>
           <div className="right-side d-flex justify-content-between align-items-center flex-wrap ">
                <div className="social-icons">
                   <CiFacebook className="h5 mx-1 brandColor" />
                   <CiTwitter className="h5 mx-1 brandColor" />
                   <IoLogoGoogleplus className="h5 mx-1 brandColor" />
                   <span> | </span>
                </div>
                <div className="get-details px-2">
                    <Link to={"/contact"} className="brandColor"><span>Get a Quote</span></Link>
                    <span> | </span>
                </div>
                <div className="contact-number px-1">
                   <LuPhone className="brandColor" />
                   <span className="brandColor"><a href="tel:+1 403 304 2515" className="brandColor text-decoration-none" >+1 403 304 2515</a></span>
                </div>
           </div>
       </div>


       
  <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid">
    <Link className="navbar-brand" onClick={()=>setActive("home")} to={"/kinsellservice"}  > <h1><span className="brandColor">Kinsell</span> Service</h1></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item overflow-hidden">
          <Link className="nav-link active" aria-current="page" onClick={()=>setActive("home")} to={"/kinsellservice"}> <strong style={{color:(active == "home"?"green":"")}} >Home</strong> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}  onClick={()=>setActive("about")}><strong style={{color:(active == "about"?"green":"")}}>About</strong></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <strong>Service</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item header-font" to={"/landscaping"} onClick={()=>setActive("landscaping")}> <strong style={{color:(active == "landscaping"?"green":"")}} >Gardening and Landscaping</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/snow"} onClick={()=>setActive("snow")} > <strong style={{color:(active == "snow"?"green":"")}} >Snow</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/fence"} onClick={()=>setActive("fence")}  > <strong style={{color:(active == "fence"?"green":"")}}>Fence Services</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/woodwork"} onClick={()=>setActive("woodwork")}  > <strong style={{color:(active == "woodwork"?"green":"")}} >Woodwork</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/plumbing"} onClick={()=>setActive("plumbing")} > <strong style={{color:(active == "plumbing"?"green":"")}} >Plumbing</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/renovation"} onClick={()=>setActive("renovation")} > <strong style={{color:(active == "renovation"?"green":"")}} >Renovation and Construction</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/electrical"} onClick={()=>setActive("electrical")} > <strong style={{color:(active == "electrical"?"green":"")}} >Electrical</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/painting"} onClick={()=>setActive("painting")} > <strong style={{color:(active == "painting"?"green":"")}} >Painting</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/shelving"} onClick={()=>setActive("shelving")} > <strong style={{color:(active == "shelving"?"green":"")}} >Shelving and Storage</strong> </Link></li>
            <li><Link className="dropdown-item header-font" to={"/smallhouse"} onClick={()=>setActive("smallhouse")} > <strong style={{color:(active == "smallhouse"?"green":"")}} >Small Household Moving</strong> </Link></li>

          </ul>
        </li>

        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <strong> Gallery</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/gallery"} onClick={()=>setActive("gallery")}> <strong style={{color:(active == "gallery"?"green":"")}} >gallery</strong> </Link></li>
            <li><Link className="dropdown-item" to={"/snow-remove"} onClick={()=>setActive("snow-remove")} > <strong style={{color:(active == "snow-remove"?"green":"")}} >Snow Remove</strong> </Link></li>
            <li><Link className="dropdown-item" to={"/gallery-classic"} onClick={()=>setActive("gallery-classic")}  > <strong style={{color:(active == "gallery-classic"?"green":"")}}>gallery-classic</strong> </Link></li>
            <li><Link className="dropdown-item" to={"/gallery-girly"} onClick={()=>setActive("gallery-girly")}  > <strong style={{color:(active == "gallery-girly"?"green":"")}} >gallery-girly</strong> </Link></li>
            <li><Link className="dropdown-item" to={"/gallery-icons-only"} onClick={()=>setActive("gallery-icons-only")} > <strong style={{color:(active == "gallery-icons-only"?"green":"")}} >gallery-icons-only</strong> </Link></li>
          </ul>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link" to={"/faq"} aria-disabled="true" onClick={()=>setActive("faq")}  ><strong style={{color:(active == "faq"?"green":"")}} >Faq</strong> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/service"} aria-disabled="true"  onClick={()=>setActive("service")} > <strong style={{color:(active == "service"?"green":"")}} >Service</strong> </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link" aria-disabled="true" onClick={()=>setActive("contact")}> <strong style={{color:(active == "contact"?"green":"")}}  >Contact</strong> </Link>
        </li>
      </ul>
       
    </div>
  </div>
   </nav>
    </div>

     </div>

  )
}

export default Header
