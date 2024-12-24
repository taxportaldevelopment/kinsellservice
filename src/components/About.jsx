import{Link, NavLink} from "react-router-dom"
// images
import womenwithflower from "../assets/other/women-with-flower.png";
import outImg1 from "../assets/snow-images/snow-1.jpg";
import outImg2 from "../assets/snow-images/snow-2.jpg";
import outImg3 from "../assets/snow-images/snow-3.jpg";
import flowerImg from "../assets/other/flower-img5.jpg";
import owner from "../assets/gallery/img-4.jpeg";
// react-icons
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoMapOutline } from "react-icons/io5";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegLifeRing } from "react-icons/fa";
import { useEffect } from "react"
const About = () => {
     useEffect(()=>{
         function getRefresh(){
            window.scrollTo(0, 0);
        }
        getRefresh()
    },[])

  return (
    <div>
       <div className="about-banner banner-animation-page p-3">
           <div className="banner-content d-flex justify-content-center h-100 align-items-center">
            <div>
                  <h4 className='brandColor text-center'>About Us</h4>
                      <p className="text-white"><NavLink to={"/Kinsellservice"} className={"text-white px-1 text-decoration-none"}>Home</NavLink> /  <NavLink to={"/landscaping"} className={"text-white px-1 text-decoration-none"}>Landscaping</NavLink></p>
                   <div className="links d-flex">
                        <div className='link-box ms-4'>
                             <div className='link-icons h2 d-flex justify-content-center align-items-center'>
                             <CiFacebook className=' text-white' />
                            </div>
                        </div>
                        <div className='link-box ms-4'>
                             <div className='link-icons h2 d-flex justify-content-center align-items-center'>
                             <CiInstagram className='  text-white' />
                            </div>
                           {/* <div className="link-content font-weight-bold text-white p-1 link-style">Face Book</div> */}
                        </div>
                        <div className='link-box ms-4'>
                             <div className='link-icons h2 d-flex justify-content-center align-items-center'>
                             <CiYoutube className='  text-white' />
                            </div>
                           {/* <div className="link-content font-weight-bold text-white p-1 link-style">Face Book</div> */}
                        </div>
                   </div>
            </div>

           </div>
       </div>
       {/* Dedicated Professionals */}
        <div data-aos="zoom-out-right" className="dedicated container py-4 my-4">
               <h2 className="text-center">Welcome to Kinsella Service, your trusted partner in year-round property care and maintenance.</h2>
               <p className=" text-center">At Kinsella Service, we pride 
                ourselves on delivering top-notch lawn care, gardening, and snow 
                removal services tailored to meet the unique needs of every client. 
                Whether it’s a one-time seasonal cleanup or a recurring service plan, 
                our experienced team ensures your property stays pristine and well-maintained 
                in every season.</p>
        </div>
       {/* Why Choose Us? start */}
           <div className="container my-5" data-aos="zoom-out-down">
               <div className="row">
                   <div className="col-md-12 col-lg-6">
                       <h3 className="text-center"><span className="brandColor">Why </span>Choose Us?</h3>
              
                        <div className="row">
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <IoMapOutline className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Expertise</h6>
                                      <p>With years of experience, we bring professionalism and attention to detail to every job.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <MdOutlineCalendarMonth className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Custom Solutions</h6>
                                      <p>We offer flexible options, including weekly, biweekly, and one-time services, to fit your schedule and needs.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>         
                        </div>
                        <div className="row">
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <FaRegSquareCheck className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Customer Focus</h6>
                                      <p>Your satisfaction is our priority. We work closely with you to create a care plan that exceeds expectations.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <FaRegLifeRing className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Reliability</h6>
                                      <p>Count on us for prompt, dependable service, no matter the weather.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>         
                        </div>

                        <p className="py-2">From vibrant gardens in the summer to safe, snow-free 
                        pathways in the winter, Kinsella Service is here to simplify your 
                        life and enhance your property’s beauty all year long.</p>
                   </div>
                   <div className="col-md-12 col-lg-6 why-choose-us d-flex justify-content-center align-items-center">
                        <img src={flowerImg} className="w-75" alt="" />
                   </div>
               </div>
           </div>
        {/* Why Choose Us? end */}

        {/* why us banner start*/}

        <div className="container-fluid" data-aos="zoom-out-right">
        <div className="why-us-banner p-3">
              <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-end">
                       <img src={womenwithflower} alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex justify-content-center flex-wrap align-items-center">
                       <div>
                           <h2 className='text-white'>Why Kinsella Is the Best Choice</h2>
                           <p className='text-white opacity-75'>By choosing Gardenzilla, you get a friendly, reliable team of lawn and garden care experts.</p>
                            <div className="bar w-75">
                                <h6 className='text-white my-3'>Experience</h6>
                            <div className="progress" style={{height:"31px"}}>
                                 <div className="progress-bar" role="progressbar" style={{width:"60%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">60%</div>
                             </div>
                             <h6 className='text-white my-3 pt-4'>Harvest</h6>
                             <div className="progress" style={{height:"31px"}}>
                                 <div className="progress-bar" role="progressbar" style={{width:"80%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">80%</div>
                             </div>
                             <h6 className='text-white pt-4'>Ecology</h6>
                             <div className="progress mt-2 " style={{height:"31px"}}>
                                 <div className="progress-bar" role="progressbar" style={{width:"70%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">70%</div>
                             </div>
                            </div>
                       </div>
                  </div>
             </div>   
        </div>
             
        </div>
              {/* why us banner end*/}
          {/* our-collection start */}
        <div className="container my-4 p-4" data-aos="fade-up" data-aos-duration="3000">
                <h2 className="py-3 text-center">Professional Snow Removal Services</h2>
                <p className="text-center">Stay safe and stress-free this winter with our comprehensive snow removal services. At Kinsella Service, we specialize in keeping your property clear, accessible, and safe during the harshest winter months.</p>
            <div className="row d-flex justify-content-lg-evenly">
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                     <div className="image">
                         <img src={outImg1} className='w-100' alt="" />
                     </div>
                </div>
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                     <div className="image">
                         <img src={outImg2} className='w-100' alt="" />
                     </div>
                </div>
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                     <div className="image">
                         <img src={outImg3} className='w-100' alt="" />
                     </div>
                </div>
            </div>
        </div>      
          {/* our-collection end */}
        {/* about intro */}
        <div className="container">
              <div className="row">
                   <div className="col-md-12 col-lg-6">
                         <h2 className="text-success py-2">Our Snow Removal Services Include</h2>
                          <div>
                          <dl>
                              <h6>1.) Our Snow Removal Services Include</h6>
                              <p>We ensure your driveways, sidewalks, and walkways are clear of snow, providing safe access for you, your family, and visitors.</p>
                               <h6>2.) Residential & Commercial Snow Removal</h6>
                               <p>From cozy homes to large commercial properties, our team is equipped to handle snow removal for properties of all sizes.</p>
                               <h6>3.) De-Icing Services</h6>
                               <p>Prevent slips and falls with our effective de-icing solutions for driveways, sidewalks, and other surfaces prone to ice buildup.</p>
                                <h6>4.) Snow Plowing</h6>
                                <p>For larger properties, our snow plowing services guarantee a fast and thorough clearance of heavy snow.</p>
                                <h6>5.) Emergency Snow Removal</h6>
                                <p>Sudden snowfall? No problem! Our emergency snow removal team is just a call away to help you when you need it most.</p>
                               <div className="some">
                                     <p className="fw-bold h5">Why Choose <span className="brandColor">Kinsella</span> Service for Snow Removal?</p>
                                     <p className="py-2">Reliable and Prompt: We prioritize timely service to keep your property safe and accessible.</p>
                                     <p>Flexible Scheduling: Choose from weekly, biweekly, or as-needed snow removal plans to suit your requirements.</p>
                                     <p>Experienced Team: Our skilled professionals use advanced equipment to handle even the heaviest snowfalls efficiently.</p>
                                     <p>Affordable Pricing: We offer competitive rates without compromising on quality.
                                     Limited Availability – Book Now!</p>
                                     <p>Snow removal slots fill up fast as winter approaches. Don’t wait until the first snowfall—secure your service plan today to ensure your property is winter-ready.</p>
                                     <p className="py-2">Contact us today to learn more about our snow removal services or to schedule a consultation!</p>
                               </div>
                          </dl>

                          </div>
                   </div>
                   <div className="col-md-12 col-lg-6 p-3">
                        <div className="image">
                              <img src={owner} className="w-100 p-3 border" alt="" />
                        </div>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default About
