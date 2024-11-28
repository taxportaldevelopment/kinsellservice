import React from 'react'
import {Link} from "react-router-dom";

// /icons
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
     <div className='bg-secondary'>
        
    <div className='container text-white'>
       <div className="row">
            <div className="col-md-12 col-lg-6 p-3">
                <div>   
                    <ul type="none">
                       <Link to={"#"} className='text-uppercase text-decoration-none'><li className='d-lg-inline p-2 text-white'>Home</li></Link>
                       <Link to={"#"} className='text-uppercase text-decoration-none'><li className='d-lg-inline p-2 text-white'>About</li></Link>
                       <Link to={"#"} className='text-uppercase text-decoration-none'><li className='d-lg-inline p-2 text-white'>News</li></Link>
                       <Link to={"#"} className='text-uppercase text-decoration-none'><li className='d-lg-inline p-2 text-white'>Gallery</li></Link>
                       <Link to={"#"} className='text-uppercase text-decoration-none'><li className='d-lg-inline p-2 text-white'>Shortcodes</li></Link>
                    </ul>
                    <h4 className='py-3'>Subscribe to newsletter</h4>
                    <p className='py-4 opacity-50'>If you have a garden, you have everything in this world….a world of your own, 
                    to plant, nurture and grow….not only plants but your soul!</p>
                    <div className="subscribe d-flex p-3 rounded border w-75">
                         <input type="text" 
                           placeholder='Enter Email.....'
                          className='form-control w-75' />
                         <button className='btn btn-success'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 p-3">
                <div className="row">
                     <div className="col-md-12 col-lg-6">
                         <div>
                             <h3 className='text-uppercase'>Contact info</h3>
                              <div className='py-5'>
                              <p className='pt-3 opacity-50'>121 King Street, Melbourne</p>
                             <p className='opacity-50'>Victoria 3000 Australia</p>
                             <p className='pt-1 opacity-50'>+61 3 8376 6284</p>
                             <p className='pt-1 opacity-50'>Email@email.com</p>
                             <p className='pt-1 opacity-50'>Skype.skype</p>
                              </div>
                         </div>
                     </div>
                     <div className="col-md-12 col-lg-6">
                     <ul>
                  <li className='d-inline p-3 h5'><FaFacebook /></li>
                  <li className='d-inline p-3 h5'><CiInstagram /></li>
                  <li className='d-inline p-3 h5'><CiTwitter /></li>
               </ul>
                          <h3 className='text-uppercase'>Photo Stream</h3>
                     </div>
                </div>
            </div>
       </div>
       <hr className='p-2' />
       <div className="row">
           <div className="col-md-12 col-lg-6">
               <p>© Kinsell Service. All Rights Reserved.</p>
           </div>
           <div className="col-md-12 col-lg-6">
               <span className='p-3 me-1'>Payment Terms |</span>
               <span className='p-1'>Policy</span>
           </div>
       </div>
    </div>
     </div>
  )
}

export default Footer
