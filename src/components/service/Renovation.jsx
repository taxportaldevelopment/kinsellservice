import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/renovation-services.jpeg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import Meta from "../Meta";

const Renovation = () => {
  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);
  return (
    <div>
        <Meta title={"Renovation"} />
      <div className="landscaping-section container-fluid px-2 py-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
            <div>
              <h1 className="text-center">
                <span className="bg-success p-1 rounded brand-name">
                  {" "}
                  Renovation and Construction{" "}
                </span>{" "}
                Services
              </h1>
              <div className="text-white">
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/shelving"}
                >
                  Shelving
                </NavLink>{" "}
                /{" "}
                <NavLink
                  className={"text-white h5 text-decoration-none"}
                  to={"/snow"}
                >
                  Snow
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
              <h1 className="py-3 brand-name">Renovation and Construction</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Room additions and
                  expansions
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Building sheds and
                  outdoor structures
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Kitchen and bathroom
                  renovations
                </li>
              </ul>
              <p className="text-style">
                Upgrade your living space with our renovation and construction
                expertise. We provide services for room additions, expansions,
                and building sheds or outdoor structures. Whether it’s a full
                kitchen or bathroom renovation, we deliver quality craftsmanship
                tailored to your needs.
              </p>
              <p>
                Bring your dream property to life with our expert Renovation and
                Construction Services. At Kinsella Service, we specialize in
                transforming spaces with innovative designs, quality
                craftsmanship, and meticulous attention to detail. From
                small-scale renovations to complete construction projects, we
                deliver solutions tailored to your needs and vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* service */}
      <div className="service-prov container">
        <h1 className="text-center">
          Our Renovation and Construction Services
        </h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">Home Renovations</strong>
              <p className="py-2">
                Upgrade your living spaces with kitchen remodels, bathroom
                makeovers, and custom living area designs to enhance
                functionality and style.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                New Construction Projects
              </strong>
              <p className="py-2">
                Build your dream home or add new structures to your property
                with our comprehensive construction services, from foundation to
                finishing touches.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Structural Repairs & Modifications
              </strong>
              <p className="py-2">
                Reinforce and enhance your property’s structure, including wall
                removal, beam installations, and foundation repairs.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Custom Design & Build
              </strong>
              <p className="py-2">
                Work with our design experts to create tailored solutions for
                unique spaces, ensuring a perfect blend of aesthetics and
                practicality.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Outdoor Living Spaces
              </strong>
              <p className="py-2">
                Add value and comfort to your property with outdoor decks,
                patios, pergolas, and other custom-built structures.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Commercial Renovations
              </strong>
              <p className="py-2">
                Revamp your office, retail space, or commercial property to
                align with your business goals and brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Kinsella Service? */}
      <div className="container">
        <h2 className="text-center py-3">
          Why Choose <span className="brandColor">Kinsella</span> Service for
          Renovation and Construction
        </h2>

        <p className="py-1">
          <strong>Experienced Team</strong> : Our skilled professionals bring
          expertise and creativity to every project.
        </p>
        <p className="py-1">
          <strong>High-Quality Materials</strong> : We use premium materials to
          ensure durability and lasting beauty.
        </p>
        <p className="py-1">
          <strong>Timely Delivery</strong> : Projects are completed on schedule
          without compromising on quality.
        </p>
        <p className="py-1">
          <strong>Custom Solutions</strong> : Every project is tailored to meet
          your specific preferences and requirements.
        </p>
        <p className="py-1">
          <strong>Affordable Pricing</strong> : Competitive rates for
          exceptional results.
        </p>
        <p className="py-1">
          Let’s Build Something Extraordinary Together! Whether you’re
          renovating an existing space or starting fresh with new construction,
          Kinsella Service is your trusted partner for turning ideas into
          reality.
        </p>
      </div>
    </div>
  );
};

export default Renovation;
