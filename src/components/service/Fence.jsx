import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/Fence-Services-1.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import Meta from "../Meta";
const Fence = () => {
  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);
  return (
    <div>
        <Meta title={"Fence"} />
      <div className="landscaping-section container-fluid px-2 py-5">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center text-white">
            <div>
              <h1 className="text-center">
                <span className="bg-success p-1 rounded brand-name">
                  Fence{" "}
                </span>{" "}
                Services
              </h1>
              <div className="text-white">
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/Kinsellservice"}
                >
                  Home
                </NavLink>{" "}
                /{" "}
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/landscaping"}
                >
                  Landscaping
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
                    <button className="btn btn-success">Submit</button>{" "}
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
              <h1 className="py-3 brand-name">Fence Services</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Installation of new
                  fences
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Fence repairs and
                  painting
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Custom fence designs
                </li>
              </ul>
              <p className="text-style">
                Enhance your property’s privacy and aesthetics with our fence
                services. We provide professional installation of new fences,
                repair and painting services for existing structures, and custom
                fence designs to match your specific needs and style.
              </p>
              <p>
                Power your property with confidence and efficiency with our
                professional <strong>*Electrical Services*</strong>. At Kinsella
                Service, we provide reliable and safe electrical solutions for
                residential, commercial, and industrial needs. Whether you need
                installations, repairs, or upgrades, our licensed electricians
                deliver top-notch service with precision and care.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* service */}
      <div className="service-prov container">
        <h1 className="text-center">Our Fence Services Include</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Fence Installation
              </strong>
              <p className="py-2">
                From broken panels to leaning posts, our repair services ensure
                your fence remains sturdy and secure.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">Fence Repairs</strong>
              <p className="py-2">
                Keep your lawn lush, green, and healthy with our comprehensive
                lawn care services, including mowing, fertilizing, and aeration.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Custom Fencing Solutions
              </strong>
              <p className="py-2">
                Looking for something unique? We design and build custom fences
                that match your property’s style and meet your specific
                requirements.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Fence Painting & Staining
              </strong>
              <p className="py-2">
                Protect your fence from weather damage and give it a fresh,
                polished look with our painting and staining services.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Gate Installation & Repair
              </strong>
              <p className="py-2">
                We also offer gate installation and repair services for added
                convenience and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Kinsella Service? */}
      <div className="container">
        <h2 className="text-center py-3">
          Why Choose <span className="brandColor">Kinsella</span> Service for
          Fence Services?
        </h2>

        <p className="py-1">
          <strong>Quality Materials</strong> : We use durable, high-quality
          materials to ensure longevity and performance.
        </p>
        <p className="py-1">
          <strong>Expert Craftsmanship</strong> : Our skilled professionals
          deliver precise and reliable workmanship.
        </p>
        <p className="py-1">
          <strong>Affordable Pricing</strong> : Get top-tier fence solutions
          without breaking the bank.
        </p>
        <p className="py-1">
          <strong>Customer Satisfaction</strong> : We work closely with you to
          bring your vision to life. Transform Your Property Today!
        </p>
        <p className="py-1">
          A well-built fence adds value, security, and style to your property.
          Whether it’s a new installation, repair, or customization, trust
          Kinsella Service to deliver outstanding results.
        </p>
      </div>
    </div>
  );
};

export default Fence;
