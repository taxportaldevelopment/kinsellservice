import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom";
// image
import image from "../../assets/service-sections/snow-1.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
const Snow = () => {
     useEffect(()=>{
          function getRefresh(){
            window.scrollTo(0, 0);
        }
        getRefresh()
       },[]) 
  return (
    <div>
                 <div className="landscaping-section container-fluid px-2 py-5">
                       <div className="row">
                             <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
                                   <div>
                                       <h1 className='text-center'><span className='bg-success p-1 rounded brand-name'>Snow  </span>Removal Services</h1>
                                       <div className='text-white'>
                                          <NavLink className={"text-white h5"} to={"/kinsellservice"}>Home</NavLink> /  <NavLink className={"text-white h5"} to={"/about"} >About</NavLink>
                                       </div>
                                   </div>
                             </div>
                             <div className="col-md-12 col-lg-6">
                                     <div className='p-3'>
                                          <form className='enquery-form border rounded p-2'>
                                                  <h4 className='py-1 text-center text-white'>GET ENQUIRY</h4>
                                              <div className=' p-2 '>
                                               <div className="fotm-group">
                                                    <label htmlFor="name" className='py-2 text-white'>Enter Your Name</label>
                                                    <input type="text" name='name' placeholder='Name...' className='enquery-form-input ps-2' />
                                               </div>
                                               <div className="fotm-group">
                                                    <label htmlFor="email" className='py-2 text-white'>Enter Your Email</label>
                                                    <input type="email" name='email' placeholder='Email...' className='enquery-form-input ps-2' />
                                               </div>
                                               <div className="fotm-group">
                                                    <label htmlFor="number" className='py-2 text-white'>Enter Your Number</label>
                                                    <input type="number" name='number' placeholder='Phone Number' className='enquery-form-input ps-2' />
                                               </div>
                                               <div className="fotm-group py-2 d-flex justify-content-center">
                                                      <button className='btn btn-success'>SUbmit</button>
                                               </div>
                                               </div>   
                                          </form>
                                     </div>
                             </div>
                       </div>
                 </div>
                 {/* content */}
                 <div className="container paragrap p-4">
                      <div className="row">
                          <div className="col-md-12 col-lg-6 p-2">
                                <div className='p-2'>
                                      <img src={image} className='w-100 card' alt="" />
                                </div>
                          </div>
                          <div className="col-md-12 col-lg-6">
                                <div className="p-3">
                                     <h1 className='py-3 brand-name'>Snow Removal Services</h1>
                                       <ul type="none"> 
                                           <li className='py-2 brand-name '><FaHandPointRight className='px-1 h4'/> Driveway and walkway clearing</li>
                                           <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Roof snow removal</li>
                                           <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> De-icing and salting</li>
                                       </ul>
                                       <p className='text-style'>Stay safe during the winter months with our 
                                        reliable snow removal services. We specialize in clearing driveways 
                                        and walkways, ensuring your paths are accessible and hazard-free. 
                                        Our team also handles roof snow removal and offers de-icing and 
                                        alting solutions to prevent slips and falls.</p>
                                </div>
                          </div>
                      </div>
                 </div>
                             {/* service */} 
            <div className="service-prov container">
                    <h3 className="text-center"><span className="brandBgColor px-3 text-white rounded">Kinsell</span> Gardening and Landscaping Services</h3>  
                   <p className="py-2 text-center">Transform your outdoor space into a beautiful and functional oasis with our Gardening and Landscaping Services. Whether you’re looking to enhance your property’s curb appeal or create a serene garden retreat, Kinsell Service has the expertise to bring your vision to life.</p>
                    <h1 className="text-center">Our Service</h1>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Garden Design & Installation</strong>
                                <p className="py-2">Our experts work with you to design and install custom gardens that reflect your style, preferences, and property’s unique characteristics.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Lawn Care & Maintenance</strong>
                                <p className="py-2">Keep your lawn lush, green, and healthy with our 
                              comprehensive lawn care services, including mowing, fertilizing, and aeration.</p>
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Planting & Pruning</strong>
                                <p className="py-2">From seasonal flowers to perennial shrubs, we handle all aspects of planting and pruning to ensure your garden thrives year-round.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Mulching & Soil Care</strong>
                                <p className="py-2">Protect your plants and improve soil health with our mulching and soil care solutions, tailored to your garden’s needs.</p><br />
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Hardscaping</strong>
                                <p className="py-2">Enhance your outdoor living spaces with hardscaping features like patios, walkways, retaining walls, and decorative stonework.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Seasonal Cleanup</strong>
                                <p className="py-2">Prepare your garden for the changing seasons with our spring and fall cleanup services, including leaf removal, debris clearing, and plant protection.</p>
                           </div>
                      </div>
                 </div>
            </div>
                             {/* Why Choose Kinsell Service? */}
            <div className="container">
                    <h2 className="text-center">Why Choose <span className="bg-success px-2 py-1 text-white">Kinsell</span> Service?</h2>
          
                   <p className="py-1">Custom Solutions: Every project is tailored to your property’s specific needs and your personal preferences.</p>
                   <p className="py-1">Experienced Professionals: Our team combines expertise with creativity to deliver stunning results.</p>
                   <p className="py-1">Sustainable Practices: We prioritize eco-friendly materials and methods for a greener, healthier environment.</p>
                   <p>Attention to Detail: From the smallest flowerbed to large-scale landscaping, we take pride in every detail.</p>

                   <div className="py-5">
                         <h5>Let’s Create Your Dream Outdoor Space!</h5>
                         <p>Whether you’re starting fresh or revitalizing an existing garden, Kinsell Service is here to make your outdoor space beautiful, functional, and enjoyable.</p>  
                         <p>Contact us today to schedule a consultation and take the first step toward your ideal landscape!</p> 
                   </div>
            </div>
    </div>
  )
}

export default Snow
