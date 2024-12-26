import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/woodwork-1.jpeg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import Meta from "../Meta";
const Woodwork = () => {
  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);
  return (
    <div>
        <Meta title={"Woodwork"} />
      <div className="landscaping-section container-fluid px-2 py-5">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center text-white">
            <div>
              <h1 className="text-center">
                <span className="bg-success p-1 rounded brand-name">
                  Woodwork{" "}
                </span>{" "}
                Services
              </h1>
              <div className="text-white">
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/electrical"}
                >
                  Electrical
                </NavLink>{" "}
                /{" "}
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
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
                    <button className="btn btn-success">Submit</button>
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
            <div className="p-2">
              <img src={image} className="w-100 card" alt="" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="p-3">
              <h1 className="py-3 brand-name">Woodwork Services</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Custom furniture and
                  decor
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Deck and pergola
                  building
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" />
                  Repairs and refinishing of wood structures
                </li>
              </ul>
              <p className="text-style">
                Add a touch of craftsmanship to your home with our woodwork
                services. From custom furniture and decor to deck and pergola
                building, we create durable and stylish wood structures. Our
                services also include repairs and refinishing to restore the
                beauty and functionality of your wooden items.
              </p>
              <p className="text-style">
                Elevate your home or business with our expert Woodwork Services.
                At Kinsella Service, we specialize in crafting custom wood
                solutions that combine functionality, durability, and elegance.
                Whether it’s bespoke furniture, intricate cabinetry, or outdoor
                wood structures, we bring your vision to life with precision and
                artistry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* service */}
      <div className="service-prov container">
        <h1 className="text-center">Our Woodwork Services Include</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">Custom Furniture</strong>
              <p className="py-2">
                bookshelves, we create unique pieces that match your style and
                space perfectly.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Cabinetry & Storage Solutions
              </strong>
              <p className="py-2">
                Enhance your home’s organization with custom-designed kitchen
                cabinets, wardrobes, and shelving units that combine
                practicality with aesthetics.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Decking & Outdoor Structures
              </strong>
              <p className="py-2">
                Transform your outdoor areas with durable decks, pergolas,
                gazebos, and other wood structures designed to withstand the
                elements while adding charm to your space.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Wood Repairs & Restorations
              </strong>
              <p className="py-2">
                Restore the beauty and functionality of your wooden furniture or
                fixtures with our expert repair and restoration services.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Trim & Molding Installation
              </strong>
              <p className="py-2">
                Add a touch of sophistication to your interiors with finely
                crafted trims, moldings, and baseboards installed with
                precision.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Kinsella Service? */}
      <div className="container">
        <h2 className="text-center py-3">
          Why Choose <span className="brandColor">Kinsella</span> Service for
          Woodwork?
        </h2>

        <p className="py-1">
          <strong>High-Quality Materials</strong> : We use premium woods and
          finishes to ensure lasting beauty and durability.
        </p>
        <p className="py-1">
          <strong>Skilled Craftsmanship</strong> : Our experienced woodworkers
          pay attention to every detail for flawless results.
        </p>
        <p className="py-1">
          <strong>Custom Designs</strong> : Every project is personalized to
          meet your unique needs and style preferences.
        </p>
        <p className="py-1">
          <strong>Affordable Solutions</strong> : Get high-quality woodwork at
          competitive prices. Bring Your Ideas to Life!
        </p>
        <p className="py-1">
          From custom furniture to outdoor wood structures, Kinsella Service is
          dedicated to delivering exceptional woodwork solutions that enhance
          your property’s value and appeal.
        </p>
      </div>
    </div>
  );
};

export default Woodwork;
