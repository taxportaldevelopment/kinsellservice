import{Link} from "react-router-dom"
// images
import womenwithflower from "../assets/other/women-with-flower.png" 
import outImg1 from "../assets/snow-images/snow-1.jpg"
import outImg2 from "../assets/snow-images/snow-2.jpg"
import outImg3 from "../assets/snow-images/snow-3.jpg"
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
       <div className="about-banner banner-animation-page d-flex  align-items-center p-3">
           <div className="banner-content">
            <div>
                  <h1 className='brandColor'>About Us /</h1>
                 <h2 className='text-uppercase  text-white'>garden entry gate</h2>
                   <div className="links d-flex">
                        <div className='link-box ms-4'>
                             <div className='link-icons d-flex justify-content-center align-items-center'>
                             <CiFacebook className='h2  text-white' />
                            </div>
                           {/* <div className="link-content font-weight-bold text-white p-1 link-style">Face Book</div> */}
                        </div>
                        <div className='link-box ms-4'>
                             <div className='link-icons d-flex justify-content-center align-items-center'>
                             <CiInstagram className='h2  text-white' />
                            </div>
                           {/* <div className="link-content font-weight-bold text-white p-1 link-style">Face Book</div> */}
                        </div>
                        <div className='link-box ms-4'>
                             <div className='link-icons d-flex justify-content-center align-items-center'>
                             <CiYoutube className='h2  text-white' />
                            </div>
                           {/* <div className="link-content font-weight-bold text-white p-1 link-style">Face Book</div> */}
                        </div>
                   </div>
            </div>

           </div>
       </div>
       {/* Dedicated Professionals */}
        <div data-aos="zoom-out-right" className="dedicated container py-4 my-4">
               <h2 className="text-center">Dedicated Professionals</h2>
               <p className="opacity-50 text-center">The team at Yorkshire Garden Services are dedicated horticultural 
                specialists with a passion for inspired design and creating beautiful 
                results in every season. Our meticulous attention to detail means that we 
                take great care to ensure that your gardens showcase your home and your property.</p>
        </div>
       {/* Why Choose Us? start */}
           <div className="container my-5" data-aos="zoom-out-down">
               <div className="row">
                   <div className="col-md-12 col-lg-6">
                     <h1><span className='brandColor'>Expert </span> Results</h1>
                       <p className='opacity-75 py-4'>
                          We want everyone to take notice and appreciate the beauty of our clients’ well-groomed properties.
                          </p>
                          <p>
                              Our clients appreciate and value our expertise and the premium 
                              quality of our specialized services. We look forward to developing a 
                              relationship with you that will meet all of your 
                              garden and horticultural needs.
                          </p>
                        <div className="row">
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <IoMapOutline className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Local Business</h6>
                                      <p>We are owned and operate only in Midtown Toronto.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <MdOutlineCalendarMonth className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>Monthly Invoicing</h6>
                                      <p>Flat rate monthly invoicing on most plans.</p>
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
                                      <h6>Upfront Pricing</h6>
                                      <p>Standardized pricing so you always get our best price.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-6 choose-us d-flex justify-content-between align-items-center">
                                  <div className="left-site">
                                      <FaRegLifeRing className='h1 wy-choose-rotate' />
                                  </div>
                                  <div className="right-site p-4">
                                      <h6>No Commitmen</h6>
                                      <p>Cancel any time, no long-term commitment.</p>
                                      <p className='p-1 bg-dark'></p>
                                  </div>
                             </div>         
                        </div>
                   </div>
                   <div className="col-md-12 col-lg-6 why-choose-us">
                        <img src={flowerImg} className="w-100" alt="" />
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
                           <h2 className='text-white'>Why Kinsell Is the Best Choice</h2>
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
        <div className="container-fluid my-4 p-4" data-aos="fade-up" data-aos-duration="3000">
            <div className="row d-flex justify-content-lg-evenly">
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                      <h4 className="py-3">Snow Removal Stock</h4>
                     <div className="image">
                         <img src={outImg1} className='w-100' alt="" />
                     </div>
                     <div className="content p-3">
                          <p className="opacity-50">Investing in the Compact Snowcuber is more than just an upgrade to a city’s snow 
                            removal fleet; it’s a commitment to efficiency, safety, and sustainability. As cities 
                            continue to grow and winter weather patterns become increasingly unpredictable, the need 
                            for advanced snow management solutions is more critical than ever. These machines offer a future-proof 
                            solution that addresses the unique challenges of urban snow management, from space constraints 
                            to environmental concerns.</p>
                     </div>
                     {/* <span><Link>Read More </Link><IoIosArrowRoundForward /></span> */}
                </div>
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                      <h4 className="py-3">Snow Removal Vehicle</h4>
                     <div className="image">
                         <img src={outImg2} className='w-100' alt="" />
                     </div>
                     <div className="content p-3">
                          <p className="opacity-50">One of the most compelling reasons to invest in these machines is their 
                            potential to reduce operational costs. By compressing snow and reducing the number 
                            of trips required to remove it, the Compact Snowcuber lower fuel consumption and labor costs, 
                            making snow removal operations more cost-effective. Additionally, their durable construction 
                            and low maintenance requirements mean that cities can expect a long service life from these
                             machines, further maximizing their return on investment</p>
                     </div>
                     {/* <span><Link>Read More </Link><IoIosArrowRoundForward /></span> */}
                </div>
                <div className="col-md-12 col-lg-3 p-2 out-collection-team shadow rounded">
                      <h4 className="py-3">Best Residential</h4>
                     <div className="image">
                         <img src={outImg3} className='w-100' alt="" />
                     </div>
                     <div className="content p-3">
                          <p className="opacity-50">Environmental sustainability is another key benefit of the Compact 
                            Snowcuber and Snowcuber MK6. In an era where cities are increasingly focused 
                            on reducing their carbon footprints, these machines offer a greener alternative to 
                            traditional snow removal methods. By minimizing fuel usage and emissions, they help 
                            cities meet their sustainability goals while still providing reliable and effective 
                            snow management. This combination of efficiency, safety, and environmental responsibility 
                            makes the Compact Snowcuber an essential tool for any modern city facing the challenges of winter.</p>
                     </div>
                     {/* <span><Link>Read More </Link><IoIosArrowRoundForward /></span> */}
                </div>
            </div>
        </div>      
          {/* our-collection end */}
        {/* about intro */}
        <div className="container">
              <div className="row">
                   <div className="col-md-12 col-lg-6">
                         <h2 className="text-success py-2">About Garden</h2>
                         <p>We are Midtown Toronto's most popular and best-rated residential landscape service, offering landscape maintenance, gardening, installation and snow removal services.</p>
                          <p>Since opening in 2014, we've worked to set the bar for our industry, with upfront pricing, happy and experienced staff and exceptional customer service.</p>
                       <p>We're proud to introduce you to the amazing team of gardeners, landscapers and office staff that make up Gardenzilla. Thank you for supporting local business!</p>
                           <h2 className="text-success">Environmental Commitments</h2>
                          <p>As part of our environmental commitments, we have begun phasing o
                            ut gas-powered small engine equipment. As of 2023, all new line trimmers,
                             hedge trimmers, and pole chainsaws will be battery-powered, and we're 
                             increasing the use of battery-powered mowers and blowers on our downtown routes.</p>
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
