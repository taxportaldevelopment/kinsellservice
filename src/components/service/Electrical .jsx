import {NavLink} from "react-router-dom";
// image
import image from "../../assets/service-sections/img-4.jpeg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
const Electrical  = () => {
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
                                                            <h1 className='text-center'><span className='bg-success p-1 rounded brand-name'>Electrical  </span> Services</h1>
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
                                                                        <button className='btn btn-success'>Submit</button>
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
                                                           <img src={image} className='w-100  card' alt="" />
                                                     </div>
                                               </div>
                                               <div className="col-md-12 col-lg-6">
                                                     <div className="p-3">
                                                          <h1 className='py-3 brand-name'>Electrical Services</h1>
                                                            <ul type="none"> 
                                                                <li className='py-2 brand-name '><FaHandPointRight className='px-1 h4'/> Electrical repairs and installations</li>
                                                                <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Lighting upgrades and fixture installations</li>
                                                                <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Wiring and circuit troubleshooting</li>
                                                            </ul>
                                                            <p className='text-style'>Keep your home’s electrical systems running smoothly 
                                                                with our professional electrical services. We offer repairs, installations, 
                                                                lighting upgrades, and fixture installations. Our team is also skilled in 
                                                                wiring and circuit troubleshooting to ensure safety and efficiency.</p>
                                                            <p>Power your property with confidence and efficiency with our professional <strong>*Electrical Services*</strong>. At Kinsell Service, we provide reliable and safe electrical solutions for residential, commercial, and industrial needs. Whether you need installations, repairs, or upgrades, our licensed electricians deliver top-notch service with precision and care. </p>
                                                     </div>
                                               </div>
                                           </div>
            </div>
       {/* service */} 
       <div className="service-prov container">
                    <h1 className="text-center">Our Electrical Services</h1>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Wiring & Rewiring</strong>
                                <p className="py-2">Ensure your property is equipped with safe and efficient electrical wiring, whether it’s a new installation or an upgrade for existing systems. </p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Lighting Installation</strong>
                                <p className="py-2">Brighten your spaces with our expert indoor and outdoor lighting solutions, including energy-efficient LED installations and custom designs. </p>
                           </div>
                      </div>
                 </div>

                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Electrical Panel Upgrades</strong>
                                <p className="py-2">Modernize your electrical panel to handle increased power demands and improve your system’s safety and reliability.  </p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Appliance & Equipment Installation</strong>
                                <p className="py-2">Professional setup and wiring for appliances, ceiling fans, air conditioners, and other electrical devices.</p><br />
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Troubleshooting & Repairs</strong>
                                <p className="py-2">Fix faulty switches, outlets, circuits, and other electrical issues promptly and efficiently. </p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Emergency Electrical Services</strong>
                                <p className="py-2">Our team is available for urgent repairs to address power outages, electrical hazards, or equipment failures. </p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Smart Home Solutions</strong>
                                <p className="py-2">Upgrade your home with smart systems, including automated lighting, security, and energy management features.</p>
                           </div>
                      </div>
                 </div>
            </div>
                       {/* Why Choose Kinsell Service? */}
                       <div className="container">
                    <h2 className="text-center py-3">Why Choose <span className="brandColor">Kinsell</span> Service for  Electrical Work</h2>
          
                   <p className="py-1"><strong>icensed Electricians</strong> :Our certified professionals adhere to all safety standards and building codes.</p>
                   <p className="py-1"><strong>High-Quality Materials</strong> :  We use durable and reliable components for long-lasting results.</p>
                   <p className="py-1"><strong>Prompt Service</strong> : We minimize disruptions with efficient and timely project completion.</p>
                   <p className="py-1"><strong>Customized Solutions</strong> : - Tailored electrical plans to meet your specific needs.</p>
                    <p className="py-1"><strong>Affordable Pricing</strong> : Quality service at competitive rates.</p>
                    <h6 className="py-1">Power Up Your Property Today!</h6>
                   <p className="py-1">From basic repairs to advanced electrical installations, Kinsell Service ensures your systems are safe, efficient, and up-to-date.  
                   </p>

            </div>
    </div>
  )
}

export default Electrical 
