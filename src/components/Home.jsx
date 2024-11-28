import { useEffect } from "react";
import img1 from "../assets/images/banner-1.jpg";
import img2 from "../assets/images/banner-2.jpg";
import img3 from "../assets/images/banner-3.jpg";


// maintenance
import maintenance1 from "../assets/images/maintenance-1.png";
import maintenance2 from "../assets/images/maintenance-2.jpg";
import maintenance3 from "../assets/images/maintenance-3.jpg";
import maintenance4 from "../assets/images/maintenance-4.jpeg";

// latest
import latest1 from "../assets/images/latest-1.jpg";
import latest2 from "../assets/images/latest-2.jpg";
import latest3 from "../assets/images/latest-3.jpg";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  

// import react icons
import { TbGardenCart } from "react-icons/tb";
import { FaCloudSunRain } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import { GiAlarmClock } from "react-icons/gi";
import { TbThumbUp } from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BiMessageRounded } from "react-icons/bi";
import { LuClock9 } from "react-icons/lu";
import { RiEarthFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
// slider list section

import slider1 from "../assets/slider/slider-1.jpg";
import slider2 from "../assets/slider/slider-2.jpg";
import slider3 from "../assets/slider/slider-3.jpg";
import slider4 from "../assets/slider/slider-4.jpg";
import slider5 from "../assets/slider/slider-5.jpg";
import slider6 from "../assets/slider/slider-6.jpg";
import slider7 from "../assets/slider/slider-7.jpg";
import slider8 from "../assets/slider/slider-8.jpg";
import slider9 from "../assets/slider/slider-9.jpg";
//  transform images
import  service1 from "../assets/other/service-img1.jpg";
import  service2 from "../assets/other/service-img2.jpg";
import  service3 from "../assets/other/service-img3.jpg";
import  service4 from "../assets/other/service-img4.jpg";
// people items
import people1 from "../assets/other/team-img1.jpg"
import people2 from "../assets/other/team-img2.jpg"
import people3 from "../assets/other/team-img-3.jpg"
import people4 from "../assets/other/team-img4.jpg"
import { useNavigate } from "react-router-dom";

// home img
import home1 from "../assets/gallery/home-1.jpg";
import home2 from "../assets/gallery/home-2.jpg";
import home3 from "../assets/gallery/home-3.jpg";
import home4 from "../assets/gallery/home-4.jpg";
// eslint-disable-next-line react/prop-types
const GardenSlider = ({ products }) => {
    // Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="product-slider">
        <h2 className="text-center text-success py-3">Our Garden Works</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-images">
                <img
                  src={product.image}
                  className="rounded"
                  height={200}
                  alt={product.name}
                />
              </div>
              <div className="content d-flex justify-content-between align-items-center w-75">

              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

// people team

// eslint-disable-next-line react/prop-types
const PeopleSlider = ({ peopleItems }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <h2 className="text-center text-success py-3">Our people for you</h2>
      <p className="text-center py-3"><i className="text-warning ">The ready & the best</i></p>
      <Slider {...settings} className="p-2">
        {peopleItems.map((product, index) => (
          <div key={index} className="people-review-section p-2 ms-1">

            {
                product.rading == "5"?(
            <div className="people-star py-3 text-center">
                 <FaStar className="h4 text-warning" />
                 <FaStar className="h4 text-warning" />
                 <FaStar className="h4 text-warning" />
                 <FaStar className="h4 text-warning" />
                 <FaStar className="h4 text-warning" />
               </div>
                  
                ):(
                  <div className="people-star py-3 text-center">
                  <FaStar className="h4 text-warning" />
                  <FaStar className="h4 text-warning" />
                  <FaStar className="h4 text-warning" />
                  <FaStar className="h4 text-warning" />
                  <FaStarHalfAlt className="h4 text-warning" />
                </div>
                )
            }

            <div className="content">
                <h5 className="py-2 text-center">{product.name}</h5>
            </div>
            <span>
              {/* <MdLocationPin className="h4 p-1" /> */}
              <p className="opacity text-center">{product.content}</p>
            </span>
            <div className="d-flex justify-content-center">
            <div className="people-images">
              <img
                src={product.image}
                height={200}
                alt={product.name}
              />
            </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

const Home = () => {

   const navigate = useNavigate()

  useEffect(()=>{
    function getRefresh(){
      window.scrollTo(0, 0);
  }
  getRefresh()
 },[]) 

    const products = [
        {
          name: "Forest Wilt Life",
          image:slider1,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider2,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider3,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider4,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider5,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider6,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider7,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider8,
          rading: "4.7",
        },
        {
          name: "Canada",
          image:slider9,
          rading: "4.7",
        }
      ];
// people images
const peopleItems = [
  {
    name: "Ronan Russell",
    image:people1,
    content:"I use kinsell's services year-round (snow removal plus lawn care including weekly cutting). I have always found kinsell staff to be reliable, friendly and responsive to questions. Any issues, the very few I've had in the near 10+ years I've enlisted their services, are quickly and efficiently addressed.",
    rading: "4.7",
  },
  {
    name: "Hana Simpson",
    image:people2,
    content:"I am very pleased with the residential snow removal service kinsell has provided me for the past 5+ years. My driveway is cleared in the early morning hours and again at the end of the day after the city plow has come by. They are even patient enough to wait while we move the cars out of the driveway to have it completely plowed.",
    rading: "5",
  },
  {
    name: "Roman Meyer",
    image:people3,
    content:"I have been with kinsell for a good 10 years now and I never have to worry about the snow removal services I receive. They are very reliable and I would not hesitate to recommend them to my neighbours and friends. My laneway is always cleared promptly and that helps make our long winters a little easier to take!",
    rading: "5",
  },
  {
    name: "Aidan Daniel",
    image:people4,
    content:"This was our first year in Ottawa and our first year with kinsell. The service was wonderful – our driveway was cleared quickly and they always came back after the city ploughs went down our street. The driver always did a great job! So happy we decided to go with kinsell – worth every penny! Looking forward to signing up this year again.",
    rading: "4.7",
  },

];


  return (

    <div>
      <div id="carouselExampleCaptions" className="carousel slide banner-animation-page">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <div className="banner-content">
                <h2>A Dream Darden Home</h2>
                <h1>First slide label</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <div className="banner-content">
                <h2>A Dream Darden Home</h2>
                <h1>First slide label</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <div className="banner-content">
                <h2>A Dream Darden Home</h2>
                <h1>First slide label</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* We only sow the seeds! start */}
      <div className="p-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <div>
              <h5 className="text-warning ">WE'RE NOW BOOKING</h5>
              <h2>Fall & Winter Services 2024</h2>

              <p className="py-2 opacity-50 ">
              We are now busy booking services for fall 2024. Enjoy peace of mind with our weekly, 
              biweekly and monthly lawn mowing and garden care options, or hire us for one-time fall cleanups, 
              gardening services, or plantings. <br /><br />
              A reminder that snow removal is expected to sell out early this year. We have limited availability - learn more about our snow removal here.
              </p>
            </div>

            <div className="row">
                <div className="col-md-4">
                     <div>
                         <div className="Weonlysow d-flex justify-content-between align-items-center p-2">
                              <div className="cound d-flex justify-content-center align-items-center text-white">1</div>
                              {/* <span></span> */}
                         </div>
                         <h4 className="py-3">Planning your Garden</h4>
                     </div> 
                </div>
                <div className="col-md-5">
                     <div>
                         <div className="Weonlysow d-flex justify-content-between align-items-center p-2">
                              <div className="cound d-flex justify-content-center align-items-center text-white">2</div>
                              {/* <span></span> */}
                         </div>
                         <h4 className="py-3">Designing the Landscape</h4>
                     </div> 
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                     <div>
                         <div className="Weonlysow d-flex justify-content-between align-items-center p-2">
                              <div className="cound d-flex justify-content-center align-items-center text-white">3</div>
                              {/* <span></span> */}
                         </div>
                         <h4 className="py-3">The Driveway & Lawn</h4>
                         {/* <p className="opacity-50">Landscaping & Garden DesignPrices per project</p> */}
                     </div> 
                </div>
                <div className="col-md-5">
                     <div>
                         <div className="Weonlysow d-flex justify-content-between align-items-center p-2">
                              <div className="cound d-flex justify-content-center align-items-center text-white">4</div>
                              {/* <span></span> */}
                         </div>
                         <h4 className="py-3">Designing the Landscape</h4>
                         {/* <p className="opacity-50">Landscaping & Garden DesignPrices per project</p> */}
                     </div> 
                </div>
            </div>
              <div> 
              </div>
              <div className="my-3">
                   <button className="px-3 py-2 rounded brandBgColor text-white"  onClick={()=>navigate("/service")} >View All Services</button>  
              </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="row py-3">
              <div className="col-md-6 col-lg-6">
                <img src={maintenance1} className="w-100 rounded mt-1" alt="" />
              </div>
              <div className="col-md-6 col-lg-6">
                <img src={maintenance2} className="w-100 rounded mt-1" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <img src={maintenance3} className="w-100 rounded mt-1" alt="" />
              </div>
              <div className="col-md-6 col-lg-6">
                <img src={maintenance4} className="w-100 rounded mt-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* We only sow the seeds! end */}

      {/* our-cleaning banner start */}
          <div className="p-5 my-5 our-cleaning" data-aos="fade-right">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="cleaning-icon my-3 d-flex justify-content-center align-items-center">
                          <TbGardenCart className="h2"/>
                        </div>
                          <div className="content">
                         <h5>Volunteer</h5>
                         <h2>To plant a garden is to believe in tomorrow</h2>
                         <p className="py-3">
                            “We have had the pleasure of working with Lindsay and the rest of the Kinsell team for more than 10 years. It started with beautiful creative potscaping for our front and rear gardens. They now provide annual  plantings and  full garden maintenance, including hard landscaping and water feature repairs. Most recently they developed the design and executed an entirely new garden are on our property.  They even included a mini vegetable garden for our grandchildren!
                            Each Spring our show of tulips, daffodils, and early flowering perennials is the envy of the neighbourhood.  We appreciate the courtesy, reliability, knowledge and professionalism of the Kinsell team. We look forward to working with them for many more years.”
                          </p>

                          </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="cleaning-icon my-3 d-flex justify-content-center align-items-center">
                          <FaCloudSunRain className="h2"/>
                        </div>
                          <div className="content">

                         <h5>Join the</h5>
                         <h2>Gardening - a pastime well worth its efforts</h2>
                         <p className="py-3">
                         “Lindsay and her crew are professional, understand implicitly how we wish 
                         our garden to look, and make wonderful suggestions on perennial bulb and 
                         plant selection. Our front garden looked amazing this year. I would recommend 
                         Kinsell Garden Services to anyone who wishes for a beautifully cared for garden… 
                         and who likes really nice people around their home.”
                          </p>
                          </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="cleaning-icon my-3 d-flex justify-content-center align-items-center">
                          <IoFlowerOutline className="h2"/>
                        </div>
                        <div className="content">
                         <h5>Customer Satisfaction</h5>
                         <h2>If you have a garden, you are blessed!</h2>
                         <p className="py-3">
                         “Having Lindsay and her great team at Kinsell on property 
                         for all my outdoor gardening designs and lawn maintenance services, 
                         gives me total peace-of-mind and quite frankly, bragging rights without 
                         the work hassle in my midtown neighbourhood. I really appreciate the seasonal 
                         rotations of colours and different blooms that magically appear. Their advice 
                         and diligent service is welcomed, every site visit. Lindsay has built a solid niche 
                         service business. Hiring her firm is one of my best decisions.”
                          </p>

                        </div>
                    </div>
                </div>
          </div>
     {/* our-cleaning banner end */}

          {/* Whats going on start */}
              <div className="container" data-aos="fade-up-right">

               <div className="latest-update my-5">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                    <h6 className="text-warning">Whats going on</h6>
                    <h2>Latest News & Updates</h2>
                     <p className="py-3 opacity-50">

                     “We are very happy with the enthusiastic and professional services that 
                     Kinsell Garden Services provides in maintaining our garden. 
                     The results show in a beautiful, well maintained garden that we 
                     enjoy and derive much pleasure from. Neighbours and passersby frequently 
                     compliment the garden.”
                      </p>     
                      
                      <button className="btn px-4 text-success">Read More</button>
                    </div>
                    <div className="col-md-12 col-lg-8">
                         <div className="row">
                             <div className="col-md-12 col-lg-6 p-2 border rounded">
                                 <img src={latest1} className="w-100 rounded" alt="" />
                                 <h2>Soil requirements of Arranging garden…</h2>
                                 <span className="p-2">Jun 18, 2015In : <span className="text-success">Business</span></span>
                                 <span className="latest-span d-block w-75 m-auto my-3"></span>
                             </div>
                             <div className="col-md-12 col-lg-6 border rounded">
                                 <img src={latest3} className="w-100 rounded" alt="" />
                                
                                 <h2>The walk-behind lawnmower for trimming….</h2>
                                 <span className="p-2">Jun 18, 2015In : <span className="text-success">Business</span></span>
                                 <span className="latest-span d-block w-75 m-auto my-3"></span>
                             </div>
                         </div>
                    </div>
                </div>
               </div>
              </div>
          {/* Whats going on end */}

          {/* garden Slider */}
          <div className="container" data-aos="flip-left">
               <GardenSlider products={products} />
          </div>

          {/* transform-your-home start */}
               <div className="transform-section container my-4" data-aos="flip-up">
                   <h2 className="text-center py-4">Transform your home to zen garden!</h2>
                   <p className="text-center">There are the services we own to you</p>

                  <div className="row">
                       <div className="col-md-4 col-lg-3">
                            <div className="transform-garden">
                                  <div className="garden-items bg-white">
                                <div className="image p-1">
                                    <img src={service1} className="w-100 rounded" alt="" />
                                </div>
                                <div className="content">
                                     <p className="text-center py-2">Outdoor Scaping</p>
                                      <h4 className="text-center">The best walk behind lawn mowers</h4>
                                      <div className="btn-section d-flex justify-content-center py-2">
                                      <button className="btn btn-success"  onClick={()=>navigate("/service")} >View All Services</button>                          
                                      </div>
                                </div>
                                      
                                  </div>
                            </div>
                       </div>
                       <div className="col-md-4 col-lg-3">
                            <div className="transform-garden">
                                  <div className="garden-items bg-white">
                                <div className="image p-1">
                                    <img src={service2} className="w-100 rounded" alt="" />
                                </div>
                                <div className="content">
                                     <p className="text-center py-2">Garden Outlook</p>
                                      <h4 className="text-center">Designing <br></br> the landscape</h4>
                                      <div className="btn-section d-flex justify-content-center py-2">
                                      <button className="btn btn-success" onClick={()=>navigate("/service")}>View All Services</button>                          
                                      </div>
                                </div>
                                      
                                  </div>
                            </div>
                       </div>
                       <div className="col-md-4 col-lg-3">
                            <div className="transform-garden">
                                  <div className="garden-items bg-white">
                                <div className="image p-1">
                                    <img src={service4} className="w-100 rounded" alt="" />
                                </div>
                                <div className="content">
                                     <p className="text-center py-2">Stone Steps</p>
                                      <h4 className="text-center">The nitty gritty of walkways</h4>
                                      <div className="btn-section d-flex justify-content-center py-2">
                                      <button className="btn btn-success" onClick={()=>navigate("/service")}>View All Services</button>                          
                                      </div>
                                </div>
                                      
                                  </div>
                            </div>
                       </div>
                       <div className="col-md-4 col-lg-3">
                            <div className="transform-garden">
                                  <div className="garden-items bg-white">
                                <div className="image p-1">
                                    <img src={service3} className="w-100 rounded" alt="" />
                                </div>
                                <div className="content">
                                     <p className="text-center py-2">Rock Fencing</p>
                                      <h4 className="text-center">Stones in fencing enbankments</h4>
                                      <div className="btn-section d-flex justify-content-center py-2">
                                      <button className="btn btn-success" onClick={()=>navigate("/service")}>View All Services</button>                          
                                      </div>
                                </div>
                                      
                                  </div>
                            </div>
                       </div>
                  </div>

               </div>
          {/* transform-your-home end */}

          {/* Get things your right way start */}
               <div className="get-thing-sections container py-5" data-aos="flip-down">
                      <h1 className="text-center"><span className="brandColor">Get things done</span> the right way</h1>   
                      <p className="text-center text-warning">Why should you choose us?</p> 

                      <div className="row d-flex justify-content-evenly bg-secondary p-5">
                          <div className="col-md-6 col-lg-3 get-thing-parent rounded bg-white p-4">
                                <div className="get-thing-card p-2">
                                      <div className="icons p-2 d-flex justify-content-center align-items-center  ">
                                          <GiAlarmClock className="h1 icons-s" />
                                      </div>
                                      <div className="content mt-3">
                                          {/* <p>Testimonials</p> */}
                                          <h5>Trained & skilled professional</h5>
                                          <p>
                                          Located right in the bustling heart of Toronto, we bring lush 
                                          landscapes and pristine gardens directly to your doorstep. 
                                             </p>
                                      </div>
                                </div>
                          </div>
                          <div className="col-md-6 col-lg-3 get-thing-parent rounded bg-white p-4">
                                <div className="get-thing-card p-2">
                                      <div className="icons p-2 d-flex justify-content-center align-items-center  ">
                                          <TbThumbUp   className="h1 icons-s" />
                                      </div>
                                      <div className="content mt-3">
                                          {/* <p>Pure from nature</p> */}
                                          <h5>Eco Friendly solutions</h5>
                                          <p>
                                          Whether you're nestled in Midtown, Downtown 
                                          below the 401, the charming neighbourhoods of 
                                          East York, or the picturesque Beach area, we’re here 
                                          to transform your outdoor space.
                                             </p>
                                      </div>
                                </div>
                          </div>
                          <div className="col-md-6 col-lg-3 get-thing-parent rounded bg-white p-4">
                                <div className="get-thing-card p-2">
                                      <div className="icons p-2 d-flex justify-content-center align-items-center  ">
                                          <HiCubeTransparent className="h1 icons-s" />
                                      </div>
                                      <div className="content mt-3">
                                          {/* <p>Zero chemicals</p> */}
                                          <h5>No harmful toxins</h5>
                                          <p>
                                          Enjoy the convenience of 
                                          local experts dedicated to enhancing your environment, making 
                                          it a personal oasis in the urban landscape.
                                            </p>
                                      </div>
                                </div>
                          </div>
                      </div>
               </div>
          {/* Get things your right way end */}
          {/* want our team start */}
              <div className="want-our-team py-5" data-aos="zoom-in">
                  <div className="container">
                    <div className="row">
                       <div className="col-md-12 col-lg-7 bg-secondary rounded p-4 ">
                   <h6 className="text-info">Satisfied</h6>
                   <h4 className="text-white">Want our team to check your house?</h4>
                   <p className="bg-warning mt-3 p-1"></p>
                     <div className="content">
                        <div>
                        <LiaPhoneVolumeSolid className="h1 text-white" />
                        <span className="p-3 text-info">Call Us Now</span>

                        </div>
                        <h1 className="text-white">+1 403 304 2515</h1>
                         <div><button className="btn text-uppercase border text-white px-4">Or Chat WIth Us <BiMessageRounded className="h4 brandColor" /></button></div>
                        <p className="py-3 text-white">Aenean interdum urna. Phasellus ac lorem ut tellus ornare condimentum. Nulla facilisi. Nulla at facilisis nibh, in ultricies arcu.</p>
                     </div>
                       </div>
                      
                    </div>

                  </div>
              </div>
          {/* want our team end */}
          
          {/* our people start team */}
               
          {/* our people end team */}
          <div className="container" data-aos="zoom-in-up">
               <PeopleSlider peopleItems={peopleItems} />
          </div>
          {/* we need jus call start */}
              <div className="we-need-jus  my-5 p-3" data-aos="zoom-in-down">
                  <div className="container">
                     <div className="text-center">
                   <h2 className="text-center"><span className="text-success">Our Weekly</span> Lawn Mowing Services</h2>
                   <p>These plans run from April through November and include your 
                    spring and fall cleanups at no additional charge. Every week, 
                    you will receive:</p>
                     </div>
                     <p className="text-center text-warning"><i>Gardening at its best</i></p>
                     {/* content */}

                     <div className="row">
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={home1} alt="" />
                              </div>
                                <h4 className="text-center py-3">Lawn Mowing</h4>
                                 <p className="opacity-75">
                                  Efficient cutting of your lawn with freshly 
                                  sharpened blades for a trim, healthy look.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={home2} alt="" />
                              </div>
                                <h4 className="text-center py-3">Lawn Detailing</h4>
                                 <p className="opacity-75">
                                 Professional trimming of lawn borders
                                  where they meet paths, gardens or obstacles.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={home3} alt="" />
                              </div>
                                <h4 className="text-center py-3">Debris Cleanup</h4>
                                 <p className="opacity-75">
                                 Collection and bagging of debris 
                                 from lawns, gardens, patios, and curblines.
                                     </p>
                            </div>
                         </div>
                         <div className="col-md-4 col-lg-3 border-rounded p-2">
                            <div className="sections">
                              <div className="text-center">
                                  <img src={home4} alt="" />
                              </div>
                                <h4 className="text-center py-3">Seasonal Cleanup</h4>
                                 <p className="opacity-75">
                                 Winter and fall debris collection and bagging 
                                 from lawns, gardens, patios and curblines.
                                     </p>
                            </div>
                         </div>
                     </div>

                     <div className="btn-section text-center py-4">
                         <button className="btn btn-success">VIEW DEMO</button>
                         <button className="btn btn-secondary ms-3 text-uppercase">Purchase Theme</button>
                     </div>
                  </div>
              </div>
          {/* we need jus call end */}
    </div>
  );
};

export default Home;
