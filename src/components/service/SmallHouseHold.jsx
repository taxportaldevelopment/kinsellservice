import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/smallhouse.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
const SmallHouseHold = () => {
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
                    <h1 className="text-center">
                      <span className="bg-success p-1 rounded brand-name">
                      Small Household Moving{" "}
                      </span>{" "}
                      Solutions
                    </h1>
                    <div className="text-white">
                      <NavLink className={"text-white h5"} to={"/kinsellservice"}>
                        Home
                      </NavLink>{" "}
                      /{" "}
                      <NavLink className={"text-white h5"} to={"/about"}>
                        About
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="p-3">
                    <form className="enquery-form border rounded p-2">
                      <h4 className="py-1 text-center text-white">GET ENQUIRY</h4>
                      <div className=" p-2 ">
                        <div className="fotm-group">
                          <label htmlFor="name" className="py-2 text-white">
                            Enter Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name..."
                            className="enquery-form-input ps-2"
                          />
                        </div>
                        <div className="fotm-group">
                          <label htmlFor="email" className="py-2 text-white">
                            Enter Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email..."
                            className="enquery-form-input ps-2"
                          />
                        </div>
                        <div className="fotm-group">
                          <label htmlFor="number" className="py-2 text-white">
                            Enter Your Number
                          </label>
                          <input
                            type="number"
                            name="number"
                            placeholder="Phone Number"
                            className="enquery-form-input ps-2"
                          />
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
             <div className="bg-to-bg">
            <div className="container paragrap p-4">
              <div className="row">
                <div className="col-md-12 col-lg-6 p-2">
                  <div className="p-2">
                    <img src={image} className="w-100  card" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="p-3">
                    <h1 className="py-3 brand-name">Small Household Moving Services</h1>
                    <ul type="none">
                      <li className="py-2 brand-name ">
                        <FaHandPointRight className="px-1 h4" /> Furniture relocation within a home
                      </li>
                      <li className="py-2 brand-name">
                        <FaHandPointRight className="px-1 h4" /> Small-scale local moving
                      </li>
                      <li className="py-2 brand-name">
                        <FaHandPointRight className="px-1 h4" />  Assistance with packing and setup  
      
                      </li>
                    </ul>
                    <p className="text-style">
                    Simplify your moving experience with our small household moving services. 
                    Whether it’s furniture relocation within your home or a small-scale local 
                    move, we ensure a smooth transition. Our team also assists with packing 
                    and setup to make your move hassle-free.
                    </p>
                    <p>Make your move stress-free with our reliable and efficient Small Household Moving Services. At Kinsell Service, we specialize in handling small-scale moves with care, precision, and professionalism. Whether you’re relocating a few items or an entire apartment, our team ensures your belongings are safely transported to your new destination.</p>
                  </div>
                </div>
              </div>
            </div>
             </div>
                    {/* service */} 
       <div className="service-prov container">
                    <h1 className="text-center">Our Small Household Moving Services</h1>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Packing & Unpacking Assistance</strong>
                                <p className="py-2">Let us handle the packing with high-quality materials and meticulous organization. We can also assist with unpacking to help you settle in quickly.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Furniture Disassembly & Assembly</strong>
                                <p className="py-2">Our experts disassemble furniture for safe transport and reassemble it in your new space.</p>
                           </div>
                      </div>
                 </div>

                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Local Moves</strong>
                                <p className="py-2">Whether it’s across the street or to a nearby neighborhood, we offer quick and reliable local moving services.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Specialized Item Handling</strong>
                                <p className="py-2">From fragile items to bulky furniture, we take extra care to ensure your valuable belongings are handled with the utmost safety.</p><br />
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Transportation Services</strong>
                                <p className="py-2">We provide secure and timely transportation using well-maintained vehicles designed for small household moves.</p>
                           </div>
                      </div>
                 </div>
            </div>
                       {/* Why Choose Kinsell Service? */}
                       <div className="container">
                    <h2 className="text-center py-3">Why Choose <span className="brandColor">Kinsell</span> Service for Moving</h2>
          
                   <p className="py-1"><strong>Professional Team</strong> : Our experienced movers treat your belongings as if they were their own.</p>
                   <p className="py-1"><strong>Affordable Rates</strong> :  Enjoy cost-effective moving solutions tailored to your needs.</p>
                   <p className="py-1"><strong>Flexible Scheduling  </strong> : We work around your timeline to ensure a smooth transition.</p>
                   <p className="py-1"><strong>Safe and Secure Handling</strong> : Every item is carefully packed, transported, and delivered with precision.</p>
                    <p className="py-1"><strong>Stress-Free Experience</strong> : We take care of the logistics so you can focus on settling into your new space.</p>
                       <h6>Make Your Move Easy and Hassle-Free!</h6>
                   <p className="py-1">Whether you’re moving a single room or a small apartment, trust Kinsell Service to make the process seamless and efficient.</p>

            </div>

    </div>
  )
}

export default SmallHouseHold
