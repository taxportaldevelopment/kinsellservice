import React, { useEffect, useState } from 'react'
// react icons
import { BsClock } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { LuClock9 } from "react-icons/lu";
import { RiEarthFill } from "react-icons/ri"; 
import { IoCalendarOutline } from "react-icons/io5";
// home img
import contact1 from "../assets/gallery/contact-1.jpg";
import contact2 from "../assets/gallery/contact-2.jpg";
import contact3 from "../assets/gallery/contact-3.jpg";
import contact4 from "../assets/gallery/contact-4.jpg";
import { Link } from 'react-router-dom';
const Contact = () => {

    const [name,setName] = useState("");
   useEffect(()=>{
      function getRefresh(){
         window.scrollTo(0, 0);
     }
     getRefresh()
 },[])

  return (
    <div>
        <div className="px-5 banner-animation-page gallery-banner justify-content-center d-flex align-items-center">
                <div>
                   <h1 className='brandColor text-center'>Contact</h1>
             
                    <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success text-white'><Link to={"/kinsellservice"} className='text-white text-decoration-none'>Home</Link> / </li>
                            <li className='d-inline text-success text-white'><Link to={"/shelving"} className='text-white text-decoration-none'>Shelving</Link> / </li>
                            <li className='d-inline text-success text-white'><Link to={"/snow"} className='text-white text-decoration-none'>Snow</Link></li>
                         </ul>
                     </div>
                </div>
        </div>

        {/* Contact Us for any queries */}
        <div className="contact-us container-fluid p-5"   data-aos="fade-right">
              <h1 className='text-center'><span className='brandColor'>Contact Us</span> for any queries</h1>
              <p className='text-warning text-center'><i>The ready & the best</i></p>
              <div className="row py-3">
                  <div className="col-md-12 col-lg-3 p-2">
                       <div className="left-side d-flex shadow px-2 py-3">
                           <div>
                          <div className="icons h3 d-flex justify-content-center align-items-center">
                              <BsClock  className=' text-white' />
                          </div>
                              
                           </div>
                          <div className="right-side ms-3 d-flex justify-content-center align-items-center">
                               <h5>24 / 7 Hours Available</h5>
                          </div>
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-2">
                       <div className="left-side d-flex shadow px-2 py-3">
                           <div>
                          <div className="icons h3 d-flex justify-content-center align-items-center">
                          <HiOutlineMail  className='text-white' />
                          </div>
                           </div>
                          <div className="right-side ms-3 d-flex justify-content-center align-items-center">
                               <h6>Cheemaaj@hotmail.com</h6>
                          </div>
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-2">
                       <div className="left-side d-flex shadow px-2 py-3">
                           <div>
                            <div className="icons h3 d-flex justify-content-center align-items-center">
                          <FiPhone  className='text-white' />
                            </div>
                           </div>
                          <div className="right-side ms-3 d-flex justify-content-center align-items-center">
                               <h5> 403 304 2515</h5>
                          </div>
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-2">
                       <div className="left-side d-flex shadow px-2 py-3">
                           <div>
                          <div className="icons h3 d-flex justify-content-center align-items-center">
                            <CiLocationOn  className='text-white' />
                          </div>
                           </div>
                          <div className="right-side ms-3 d-flex justify-content-center align-items-center">
                                <div>
                               <span className='font-weight-bold h5 opacity-75'>Location</span><br />
                               <p> 554 Wolf Willow Rd NW, Edmonton AB T5T 1E4</p>
                                </div>
                          </div>
                       </div>
                  </div>
              </div>
        </div>
        {/* location */}
         <div className="location py-4" data-aos="flip-left">
         <iframe className='p-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43035258.518169664!2d-135.5378995672093!3d48.8264772057962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1731923116704!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div >
          <div className="py-5" id='contactUs'></div>
         {/* Office Working Hours*/}
         <div className='office-working container py-5 my-3'  data-aos="flip-up">
               <div className="row">
                   <div className="col-md-12 col-lg-4 p-3">
                         <h3><span className='brandColor'>Office Working</span> Hours</h3>
                         <p><strong>Monday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Tuesday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Wednesday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Thursday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Friday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Saturday:</strong> 9:00 am – 5:00 pm</p>
                         <p><strong>Sunday:</strong> Holiday</p>
                   </div>
                   <div className="col-md-12 col-lg-8">
                          <div className="form">
                               <form>
                                    <h5 className='text-uppercase brandColor'>Book Now : {name}</h5>
                                    <div className="form-group">
                                          <input type="text"
                                            placeholder='Name *'
                                            name='name'
                                            onChange={(e)=>setName(e.target.value)}
                                            className='contact-input mt-2'
                                          />
                                    </div>
                                    <div className="form-group">
                                          <input type="email"
                                            placeholder='Email *'
                                            name='email'
                                            className='contact-input'
                                          />
                                    </div>
                                    <div className="form-group">
                                           <select name="" id="">
                                               <option value="">--Select Purpose--</option>
                                               <option value="landscaping">Landscaping</option>
                                               <option value="snow">Snow</option>
                                               <option value="fence">Fence</option>
                                               <option value="woodwork">Woodwork</option>
                                               <option value="plumbing">Plumbing</option>
                                               <option value="renovation">Renovation</option>
                                               <option value="electrical">Electrical</option>
                                               <option value="painting">Painting</option>
                                               <option value="shelving">Shelving</option>
                                               <option value="smallhouse">Smallhouse</option>
                                           </select>
                                    </div>
                                     <div className="form-group">
                                           <input type="number"
                                               name='number'
                                               placeholder='Mobile Number * ..'
                                             />
                                     </div>
                                     <div className="form-group">
                                           <textarea name="address" className='p-2' id="" placeholder='Address...'></textarea>
                                     </div>
                                      <div className="form-group my-2 ">
                                           <button className='px-5 py-1 rounded brandBgColor text-white'>SEND <IoIosSend className='h4 text-white' /></button>
                                      </div>
                               </form>
                         </div>   
                   </div>
               </div>
         </div>

                   {/* we need jus call start */}
                   <div className="we-need-jus  my-5 p-3" data-aos="zoom-in-down">
                  <div className="container">
                     <div className="text-center">
                   <h2 className="text-center"><span className="text-success">Our Garden </span> Cleanups</h2>
                   <p>Expert cleanup and restoration of overgrown properties. 
                     We've tackled a huge cross section, from simple weeding jobs 
                     to massive cleanups of neglected and abandoned properties.
                    </p>
                     </div>
                     <p className="text-center text-warning"><i>Gardening at its best</i></p>
                     {/* content */}

                     <div className="row">
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={contact1} className='w-100' alt="" />
                              </div>
                                <h4 className="text-center py-3">Pruning & Hedging</h4>
                                 <p className="opacity-75">
                                  Minor major pruning and hedging projects.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={contact2} className='w-100' alt="" />
                              </div>
                                <h4 className="text-center py-3">Weeding</h4>
                                 <p className="opacity-75">
                                 Identification and removal of garden and lawn weeds.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={contact3} className='w-100' alt="" />
                              </div>
                                <h4 className="text-center py-3">Lawn & Garden Edgingp</h4>
                                 <p className="opacity-75">
                                 Edging along all lawn and garden borders. We do not include cultivating, 
                                 as it can damage the spring plants.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={contact4} className='w-100' alt="" />
                              </div>
                                <h4 className="text-center py-3">Ladder Work</h4>
                                 <p className="opacity-75">
                                  We can provide ladders up to 8' taller for pruning, hedging, or other at-heights work.
                                     </p>
                            </div>
                         </div>
                     </div>
                  </div>
              </div> 
          {/* we need jus call end */}
    </div>
  )
}

export default Contact
