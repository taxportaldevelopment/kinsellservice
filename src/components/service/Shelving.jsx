import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/shelving.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
const Shelving = () => {
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
                  Shelving and Storage{" "}
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
              <h1 className="py-3 brand-name">Shelving and Storage Solutions</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Custom shelf building
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Closet and storage space design
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" />  Installation of pre-made shelving units  

                </li>
              </ul>
              <p className="text-style">
              Maximize your storage space with our shelving and storage solutions. 
              We design and build custom shelves, create organized closet systems, 
              and install pre-made shelving units to fit your needs and style preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
       </div>
       {/* service */} 
       <div className="service-prov container">
                    <h1 className="text-center">Our Shelving and Storage Services</h1>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Custom Shelving Design</strong>
                                <p className="py-2">Create unique shelving solutions that fit your space perfectly, from floating shelves to built-in wall units.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Closet Organization Systems</strong>
                                <p className="py-2">Transform cluttered closets into well-organized spaces with custom racks, drawers, and compartments.</p>
                           </div>
                      </div>
                 </div>

                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Garage & Basement Storage</strong>
                                <p className="py-2">Install durable and practical storage solutions, including cabinets, racks, and overhead systems, to keep these areas tidy and functional.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">4. Pantry and Kitchen Storage</strong>
                                <p className="py-2">Optimize your pantry or kitchen space with tailored shelving, pull-out drawers, and smart organization systems.</p><br />
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Office & Commercial Storage</strong>
                                <p className="py-2">Enhance productivity with storage solutions for files, supplies, and equipment in your office or workspace.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Assembly & Installation</strong>
                                <p className="py-2">Let our professionals handle the setup of pre-purchased storage units or build custom systems on-site.</p>
                           </div>
                      </div>
                 </div>
            </div>
                       {/* Why Choose Kinsell Service? */}
                       <div className="container">
                    <h2 className="text-center py-3">Why Choose <span className="brandColor">Kinsell</span> Service for  Storage Solutions</h2>
          
                   <p className="py-1"><strong>Tailored Designs</strong> : Every solution is customized to your specific space and storage needs.</p>
                   <p className="py-1"><strong>Durable Materials</strong> :  We use high-quality materials for long-lasting functionality.</p>
                   <p className="py-1"><strong>Efficient Use of Space</strong> : Our designs maximize storage capacity without compromising aesthetics.</p>
                   <p className="py-1"><strong>Professional Installation</strong> : Expert craftsmanship ensures a seamless and sturdy finish.</p>
                    <p className="py-1"><strong>Affordable Options</strong> : Practical and stylish storage solutions at competitive prices.
                    Organize Your Space Today!</p>

                   <p className="py-1">Whether it’s a single room or your entire property, Kinsell Service provides smart shelving and storage solutions that simplify your life and elevate your space.  
                   </p>

            </div>
    </div>
  );
};

export default Shelving;
