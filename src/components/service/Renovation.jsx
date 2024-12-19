import {NavLink} from "react-router-dom";
// image
import image from "../../assets/service-sections/renovation-services.jpeg";
// iocns
import { FaHandPointRight } from "react-icons/fa";

const Renovation = () => {
  return (
    <div>
                                    <div className="landscaping-section container-fluid px-2 py-5">
                                          <div className="row">
                                                <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
                                                      <div>
                                                          <h1 className='text-center'><span className='bg-success p-1 rounded brand-name'> Renovation and Construction </span> Services</h1>
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
                                                        <h1 className='py-3 brand-name'>Renovation and Construction</h1>
                                                          <ul type="none"> 
                                                              <li className='py-2 brand-name '><FaHandPointRight className='px-1 h4'/> Room additions and expansions</li>
                                                              <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Building sheds and outdoor structures</li>
                                                              <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Kitchen and bathroom renovations</li>
                                                          </ul>
                                                          <p className='text-style'>Upgrade your living space with our renovation and 
                                                            construction expertise. We provide services for room additions, expansions, 
                                                            and building sheds or outdoor structures. Whether it’s a full kitchen or 
                                                            bathroom renovation, we deliver quality craftsmanship tailored to your needs.</p>
                                                   </div>
                                             </div>
                                         </div>
                                    </div>
    </div>
  )
}

export default Renovation