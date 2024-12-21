import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/residential-painting-service.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
const Painting = () => {
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
                Painting{" "}
                </span>{" "}
                Services
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

      <div className="container paragrap p-4 px-2">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-2">
            <div className="p-2">
              <img src={image} className="w-100  card" alt="" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="p-3">
              <h1 className="py-3 brand-name">Painting Services</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Interior and exterior painting
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Wall touch-ups and refinishing
                  fixture installations
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Staining and varnishing
                </li>
              </ul>
              <p className="text-style">
              Refresh your space with our painting services. We handle 
              interior and exterior painting projects, wall touch-ups, 
              and refinishing to give your home a polished look. Our 
              staining and varnishing services provide additional 
              protection and aesthetic appeal.
              </p>
              <p>Revitalize your property with our professional Painting Services. 
                At Kinsell Service, we specialize in creating vibrant, long-lasting 
                finishes that enhance the beauty and value of your home or business. 
                Whether it’s a single room, an entire property, or outdoor surfaces, 
                our skilled painters deliver flawless results that transform your space.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
       {/* service */} 
       <div className="service-prov container">
                    <h1 className="text-center">Our Painting Services</h1>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Interior Painting</strong>
                                <p className="py-2">Refresh your interiors with expertly painted walls, ceilings, trims, and doors, tailored to your style and preferences.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Exterior Painting</strong>
                                <p className="py-2">Protect and beautify your property with weather-resistant paints designed to withstand the elements and maintain a fresh look. </p>
                           </div>
                      </div>
                 </div>

                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Custom & Decorative Painting</strong>
                                <p className="py-2">Add character to your space with accent walls, faux finishes, and other creative painting techniques.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                      <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Surface Preparation</strong>
                                <p className="py-2">Ensure a smooth and durable finish with our comprehensive preparation services, including sanding, priming, and repair of cracks or holes.</p><br />
                           </div>
                      </div>
                 </div>
                 <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Staining & Refinishing</strong>
                                <p className="py-2">Enhance wooden surfaces such as decks, fences, and furniture with our expert staining and refinishing services.</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-5 p-3 mt-3">
                           <div className="p-3 shadow">
                                <strong className="d-inline brandColor">Touch-Ups & Maintenance</strong>
                                <p className="py-2">Restore chipped or faded paint to keep your property looking pristine year-round</p>
                           </div>
                      </div>
                 </div>
            </div>
                       {/* Why Choose Kinsell Service? */}
                       <div className="container">
                    <h2 className="text-center py-3">Why Choose <span className="brandColor">Kinsell</span> Service for  Painting</h2>
          
                   <p className="py-1"><strong>Professional Craftsmanship</strong> :Our painters deliver clean lines, smooth finishes, and meticulous attention to detail.</p>
                   <p className="py-1"><strong>Premium Materials</strong> :  We use high-quality, eco-friendly paints and coatings for superior results.</p>
                   <p className="py-1"><strong>Timely Completion </strong> : Projects are finished efficiently without compromising quality.</p>
                   <p className="py-1"><strong>Custom Colors</strong> : Work with our experts to select the perfect shades and finishes for your space.</p>
                    <p className="py-1"><strong>Affordable Pricing</strong> : Exceptional painting services at competitive rates.</p>

                   <p className="py-1">Affordable Pricing: Exceptional painting services at competitive rates. Transform Your Space with a Fresh Coat of Paint!
Whether you’re looking to update your interiors, refresh your exteriors, or add a creative touch to your space, Kinsell Service is here to bring your vision to life.  
                   </p> 

            </div>
    </div>
  );
};

export default Painting;
