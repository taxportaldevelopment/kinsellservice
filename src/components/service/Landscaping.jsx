import React from 'react'
import {NavLink} from "react-router-dom";
// image
import image from "../../assets/service-sections/landscaping-1.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
const Landscaping = () => {
  return (
    <div>
         <div className="landscaping-section container-fluid px-2 py-5">
               <div className="row">
                     <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
                           <div>
                               <h1 className='text-center'><span className='bg-success p-1 rounded brand-name'>Gardening </span>and Landscaping Services</h1>
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
                             <h1 className='py-3 brand-name'>Gardening and Landscaping Services</h1>
                               <ul type="none"> 
                                   <li className='py-2 brand-name '><FaHandPointRight className='px-1 h4'/> Lawn care and maintenance (including grass cutting)</li>
                                   <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Planting and garden design</li>
                                   <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Tree trimming and removal</li>
                               </ul>
                               <p className='text-style'>Transform your outdoor space with our comprehensive 
                                   gardening and landscaping services. Whether you need 
                                   regular lawn care and maintenance, including grass cutting, 
                                   or a complete garden redesign with planting and decorative 
                                   features, we’ve got you covered. Our team also offers expert 
                                   tree trimming and removal to keep your garden safe, 
                                   clean, and visually appealing.</p>
                        </div>
                  </div>
              </div>
         </div>
    </div>
  )
}

export default Landscaping
