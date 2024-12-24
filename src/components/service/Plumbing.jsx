import { NavLink } from "react-router-dom";
// image
import image from "../../assets/service-sections/plumbing.jpg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import Meta from "../Meta";

const Plumbing = () => {
  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);
  return (
    <div>
         <Meta title={"Plumbing"} />
      <div className="landscaping-section container-fluid px-2 py-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
            <div>
              <h1 className="text-center">
                <span className="bg-success p-1 rounded brand-name">
                  Plumbing{" "}
                </span>{" "}
                Services
              </h1>
              <div className="text-white">
                <NavLink className={"text-white h5"} to={"/fence"}>
                  Fence
                </NavLink>{" "}
                /{" "}
                <NavLink className={"text-white h5"} to={"/faq"}>
                  Faq
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
              <h1 className="py-3 brand-name">Plumbing Services</h1>
              <ul type="none">
                <li className="py-2 brand-name ">
                  <FaHandPointRight className="px-1 h4" /> Leak repairs and pipe
                  installations
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Drain cleaning and
                  maintenance
                </li>
                <li className="py-2 brand-name">
                  <FaHandPointRight className="px-1 h4" /> Fixture installation
                  and replacement
                </li>
              </ul>
              <p className="text-style">
                Ensure your home’s plumbing is in top condition with our
                reliable plumbing services. We handle leak repairs, pipe
                installations, and drain cleaning with precision. Our team also
                specializes in fixture installation and replacement, keeping
                your plumbing systems efficient and up-to-date.
              </p>

              <p className="text-tyle">
                Ensure the smooth functioning of your property’s water systems
                with our reliable and professional Plumbing Services. At
                Kinsella Service, we provide comprehensive plumbing solutions to
                meet all your needs, from routine maintenance to emergency
                repairs. Our skilled plumbers are equipped to handle projects of
                any size, ensuring your plumbing is efficient, safe, and up to
                code.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* service */}
      <div className="service-prov container">
        <h1 className="text-center">Our Plumbing Service</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">Leak Repairs</strong>
              <p className="py-2">
                Fix dripping faucets, leaking pipes, and other water issues
                quickly and efficiently to prevent damage and water waste.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Fixture Installation
              </strong>
              <p className="py-2">
                Upgrade your home with the installation of new sinks, faucets,
                showers, and toilets, combining style with functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">Drain Cleaning</strong>
              <p className="py-2">
                Keep your pipes clear and clog-free with our thorough drain
                cleaning services, restoring smooth water flow.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Water Heater Services
              </strong>
              <p className="py-2">
                We install, repair, and maintain water heaters to ensure you
                always have access to hot water when you need it.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5 p-3 mt-3">
            <div className="p-3 shadow">
              <strong className="d-inline brandColor">
                Pipe Repairs & Replacements
              </strong>
              <p className="py-2">
                Address issues with corroded or damaged pipes to improve water
                quality and prevent costly future repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Kinsella Service? */}
      <div className="container">
        <h2 className="text-center py-3">
          Why Choose <span className="brandColor">Kinsella</span> Service for
          Plumbing Services?
        </h2>

        <p className="py-1">
          <strong>Experienced Professionals</strong> : Our licensed plumbers
          bring years of expertise to every job.
        </p>
        <p className="py-1">
          <strong>Fast & Reliable Service</strong> : We work efficiently to
          resolve your plumbing issues with minimal downtime.
        </p>
        <p className="py-1">
          <strong>Affordable Pricing</strong> : Get quality plumbing solutions
          at competitive rates
        </p>
        <p className="py-1">
          <strong>Customer-Centric Approach</strong> : Your satisfaction is our
          top priority, and we tailor our services to meet your specific needs.
        </p>
        <p className="py-1">
          Don’t Let Plumbing Problems Slow You Down! Whether it’s a small leak
          or a major installation project, Kinsella Service is here to provide
          top-notch plumbing solutions you can trust.
        </p>
      </div>
    </div>
  );
};

export default Plumbing;
