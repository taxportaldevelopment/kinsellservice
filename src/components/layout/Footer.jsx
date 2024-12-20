import React, { useState } from 'react'
import {Link} from "react-router-dom";

// /icons
import { FaHandPointRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {

      const [year,setYear] = useState(new Date().getFullYear())

  return (
     <div className='bg-dark'>
        
    <div className='container text-white'>
       <div className="row">
            <div className="col-md-12 col-lg-3 p-3">
                <div>   
                    <h3 className='brandColor'>About Us</h3>
                    <p className='py-1 opacity-50'>Welcome to Kinsell Service, your trusted partner in year-round property care and maintenance.At Kinsell Service, we pride ourselves on delivering top-notch lawn care, gardening, and snow removal services tailored to meet the unique needs of every client. </p>
                     <div className='h3'>
                         <FaFacebook className='mx-2'/>
                         <CiInstagram className='mx-2'/>
                         <CiTwitter className='mx-2'/>
                     </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-3 p-3">
                 <div>
                      <h3 className='brandColor'>Quick Links</h3>
                      <ul type="none" className='opacity-50'>
                       <Link to={"#"} className=' text-decoration-none'><li className=' text-white'>Home</li></Link>
                       <Link to={"#"} className=' text-decoration-none'><li className=' text-white'>About</li></Link>
                       <Link to={"#"} className=' text-decoration-none'><li className=' text-white'>Faq</li></Link>
                       <Link to={"#"} className=' text-decoration-none'><li className=' text-white'>Contact</li></Link>
                    </ul>
                 </div>
            </div>
            <div className="col-md-12 col-lg-3 p-3">
                 <div>
                      <h3 className='brandColor'>Service</h3>
                       <ul type="none">
                          <Link to={"/landscaping"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Gardening and Landscaping Services</li></Link>
                          <Link to={"/snow"} className='text-decoration-none text-white opacity-50'> <li> <FaHandPointRight  className='me-1'/> Snow Removal Services</li></Link>
                          <Link to={"/fence"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Fence Services</li></Link>
                          <Link to={"/woodwork"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Woodwork Services</li></Link>
                          <Link to={"/plumbing"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Plumbing Services</li></Link>
                          <Link to={"/renovation"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Renovation and Construction Services</li></Link>
                          <Link to={"/electrical"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Electrical Services</li></Link>
                          <Link to={"/painting"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Painting Services</li></Link>
                          <Link to={"/shelving"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Shelving and Storage Solutions</li></Link>
                          <Link to={"/smallhouse"} className='text-decoration-none text-white opacity-50'><li> <FaHandPointRight  className='me-1'/> Small Household Moving Services</li></Link>
                       </ul>
                 </div>
            </div>
            <div className="col-md-12 col-lg-3 p-3">
                 <div>
                     <h3 className='brandColor'>Address</h3>
                     <p className='opacity-50'><IoLocationOutline className='me-2' /> 1st Floor, Duraisamy Complex, 2/3, Velachery Bypass Rd, Natesan Nagar, Balaji Nagar, Velachery, Chennai, Tamil Nadu 600042</p>
                     <p className='opacity-50'><BsTelephone /> +1 403 304 2515</p>
                     <p className='opacity-50'><MdOutlineMailOutline /> Cheemaaj@hotmail.com</p>
                 </div>
            </div>
       </div>
        <div className='py-3 opacity-50 d-flex border-top justify-content-between align-items-center flex-wrap'>
             <p>{year} Copyright © All Right</p>
             <p><strong>Create By</strong> : Ranon infotax private limited</p>
        </div>
    </div>
     </div>
  )
}

export default Footer
