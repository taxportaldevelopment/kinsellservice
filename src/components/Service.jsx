import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TfiThumbUp } from "react-icons/tfi";
import { FaCalendarDays } from "react-icons/fa6";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiHandPointRight } from "react-icons/tfi";
// images
import women1 from "../assets/service/women-img52.jpg"
import bee from "../assets/service/bee.jpg"
import icon1 from "../assets/service/icon1.png"
import icon2 from "../assets/service/icon2.png"
import icon3 from "../assets/service/icon3.png"
import icon4 from "../assets/service/icon4.png"
import gardimg from "../assets/service/gard-img.jpg"
import flowerg3 from "../assets/service/flower3.jpg"
import flowerg4 from "../assets/service/flower4.jpg"
import flower7 from "../assets/service/flower7.jpg"
import flower6 from "../assets/service/flower6.jpg"
import flower5 from "../assets/service/flower5.jpg"

// service images 
import service1 from "../assets/service/water.png";
import service2 from "../assets/service/Container-gardening.png";
import service3 from "../assets/service/Rock-gardens.png";
import service4 from "../assets/service/butterflies-flowers-vector-scene_1308-164523.png";
import service5 from "../assets/service/Flower-garden.png";
import service6 from "../assets/service/Gardening.png"; 
import service7 from "../assets/service/Indoor-garden.png"
import service8 from "../assets/service/japan_garden_japanese_nature_beautiful_tree_park-512.png"
import service9 from "../assets/service/pngtree-roof-garden-vector-flat-color-icon-sign-website-pictogram-vector-picture-image_10921342.png"
const Service = () => {

     useEffect(()=>{
          function getRefresh(){
            window.scrollTo(0, 0);
        }
        getRefresh()
       },[])

  return (
    <div className="servive-section ">
       <div className="servive-banner banner-animation-page text-white d-flex justify-content-center align-items-center">
            <div>
            <h1 className='text-center'>Service</h1>
            <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success'><Link to={"/"} className='text-white '>Home</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/about"} className='text-white '>About</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/gallery"} className='text-white '>Gallery</Link> /</li>
                         </ul>
                     </div>

            </div>            
       </div>
        {/* we logical start */}
        <div className="we-logic container-fluid my-5" data-aos="zoom-in-up">
             <div className="row">
                  <div className="col-md-12 col-lg-4">
                      <img src={women1} height={500} alt="" />
                  </div>
                  <div className="col-md-12 col-lg-8">
                      <div>
                          <h1><span className='text-success'>We are</span> Logical Choice…</h1>
                          <p>Many homeowners love the idea of a garden, but they’re just too busy to maintain it. And without regular maintenance, weeds can quickly get out of control and overtake a garden, making it look unkempt.</p>
                      
                           <div className="row py-3 service-intro">
                               <div className="col-md-12 col-lg-6 d-flex justify-content-between align-items-center">
                                   <div className="left-side">
                                     <div className="icons  d-flex justify-content-center align-items-center">
                                        <TfiThumbUp className='h1' />
                                       </div>
                                   </div>
                                   <div className="right-side p-3">
                                        <h4>What services are included?</h4>
                                        <p>
                                        Our weekly lawn mowing services include lawn mowing, 
                                        edging the lawn, and a quick cleanup. Lawn mowing begins 
                                        April 15th and ends November 15th, but you can start
                                         or stop any time.
                                             </p>
                                   </div>
                               </div>
                               <div className="col-md-12 col-lg-6 d-flex justify-content-between align-items-center">
                                   <div className="left-side">
                                     <div className="icons  d-flex justify-content-center align-items-center">
                                        <FaCalendarDays className='h1' />
                                       </div>
                                   </div>
                                   <div className="right-side p-3">
                                        <h4>Who are your customers?</h4>
                                        <p>
                                        Our customers are busy homeowners, senior, and landlords 
                                        in Midtown & North Toronto. Our pricing is hard to beat,
                                         and with our high customer satisfaction and focus on simplicity, 
                                         there is no better value in our service area.
                                             </p>
                                   </div>
                               </div>
                           </div>
                           <div className="row py-3 service-intro">
                               <div className="col-md-12 col-lg-6 d-flex justify-content-between align-items-center">
                                   <div className="left-side">
                                     <div className="icons  d-flex justify-content-center align-items-center">
                                        <LuCalendarCheck2 className='h1' />
                                       </div>
                                   </div>
                                   <div className="right-side p-3">   
                                        <h4>Is there a discount for smaller lawns?</h4>
                                        <p>In general, it takes more time to load and unload our equipment than 
                                             it does to cut any lawn in our service area. Our simplified pricing 
                                             was based on more than 10 years of mowing data - what we find, again and again, is that it isn't the size of the lawn, but the size of the property, that determines the time it takes to service the house.</p>
                                   </div>
                               </div>
                               <div className="col-md-12 col-lg-6 d-flex justify-content-between align-items-center">
                                   <div className="left-side">
                                     <div className="icons  d-flex justify-content-center align-items-center">
                                        <IoPeople className='h1' />
                                       </div>
                                   </div>
                                   <div className="right-side p-3">
                                        <h4>	How high do you cut the grass?</h4>
                                        <p>
                                        Our standard cutting is higher than you're probably used to. 
                                        We cut this high because it helps reduce stress on the lawn during hot, 
                                        dry periods, and helps the grass out-compete weeds. We're happy to accommodate 
                                        requests for higher or lower cutting.
                                        </p>
                                   </div>
                               </div>
                           </div>
                      </div>
                  </div>
             </div>
        </div>
        {/* Our Services */}
          <div className='p-4' data-aos="zoom-in-down">
              <p className='text-success text-center'><span>______</span>Our Services <span>______</span></p>  
            <h3 className='text-center'>We Provide Best <span className='text-success'>Quality </span>Services</h3>
                 
              <div className="container p-3" data-aos="flip-up">
                  <div className="row mt-3 d-flex justify-content-evenly">
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Water Gardens</h5>
                           </div>
                           <div className="right-site">
                                <img src={service1} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Container <br/> gardening</h5>
                           </div>
                           <div className="right-site">
                                <img src={service2} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Rock <br/> gardens</h5>
                           </div>
                           <div className="right-site">
                                <img src={service3} height={90} alt="" />
                           </div>
                      </div>
                  </div>
                  <div className="row mt-3 d-flex justify-content-evenly">
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Butterfly <br/> Gardens</h5>
                           </div>
                           <div className="right-site">
                                <img src={service4} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Flower <br/> garden</h5>
                           </div>
                           <div className="right-site">
                                <img src={service5} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Gardening</h5>
                           </div>
                           <div className="right-site">
                                <img src={service6} height={90} alt="" />
                           </div>
                      </div>
                  </div>
                  <div className="row mt-3 d-flex justify-content-evenly">
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Indoor <br/> garden</h5>
                           </div>
                           <div className="right-site">
                                <img src={service7} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Japanese <br/> Garden</h5>
                           </div>
                           <div className="right-site">
                                <img src={service8} height={90} alt="" />
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-3 service-provide d-flex justify-content-evenly p-3 my-2">
                           <div className="left-side">
                                <h5>Roof <br/> Garden</h5>
                           </div>
                           <div className="right-site">
                                <img src={service9} height={90} alt="" />
                           </div>
                      </div>
                  </div>
              </div>
          </div>
     {/* need help for garden */}
       <div className="row need-help container-fluid p-4" data-aos="flip-down">
            <div className="col-md-12 col-lg-5">
                 <div className=' h-100 d-flex justify-content-center align-items-center p-3'>
                     <div>
                     <h1 className='text-success'>The colorful ladybug says eat me if you can! 
                     Her bright colors warn off the predators that she is poisonous…</h1>
                     <button className='btn btn-success px-4 my-4'>View All Service</button>
                     </div>
      
                 </div>
      
            </div>
            <div className="col-md-12 col-lg-7">
                   <div className='d-flex justify-content-center align-items-center'>
                       <img src={bee} className='card' alt="" />
                   </div>
            </div>
       </div>
       {/* turn your home */}
          <div className='py-4 container' data-aos="flip-right">
          <h1 className='text-center'><span className='text-success'>Turn your home</span> into a Greenhouse!</h1>
            <p className='text-center'><i>The services that we render….</i></p>
       <div className="row  d-flex justify-content-center  px-5">
            <div className="col-md-12 col-lg-3 p-2">
                  <div className="image d-flex justify-content-center align-items-center">
                       <img src={icon1} alt="" />
                  </div>
                  <div className="content">
                       <h4 className='text-center'>Kitchen Garden</h4>
                       <p className='py-3 text-center'>A kitchen garden is a small, personal garden where you 
                         grow herbs, vegetables, fruits, and other plants that are used for cooking and culinary 
                         purposes. These gardens are usually placed near the kitchen or in easy-to-access areas of the
                          home, such as the balcony, windowsill, or backyard, making it convenient to harvest fresh 
                          ingredients while cooking.</p>
                        <div>
                            <p className='p-1 bg-success'></p>
                           {/* <p className='text-center'> <Link to={""}>Read More <IoIosArrowRoundForward /></Link></p>  */}
       
                        </div> 
                  </div>
            </div>
            <div className="col-md-12 col-lg-3 p-2">
                  <div className="image d-flex justify-content-center align-items-center">
                       <img src={icon2} alt="" />
                  </div>
                  <div className="content">
                       <h4 className='text-center'>Pests & Weeds Control</h4>
                       <p className='py-3 text-center'>By staying proactive with natural pest and weed control methods, 
                         you can keep your kitchen garden healthy and productive without relying on harmful chemicals. 🌱 
                         Would you like specific advice for pests or weeds affecting your plants?</p>
                        <div>
                            <p className='p-1 bg-success'></p>
                           {/* <p className='text-center'> <Link to={""}>Read More <IoIosArrowRoundForward /></Link></p>  */}
       
                        </div> 
                  </div>
            </div>
            <div className="col-md-12 col-lg-3 p-2">
                  <div className="image d-flex justify-content-center align-items-center">
                       <img src={icon3} alt="" />
                  </div>
                  <div className="content">
                       <h4 className='text-center'>Fruits & Flowers Garden</h4>
                       <p className='py-3 text-center'>
A fruits and flowers garden combines the beauty of colorful blooms with the bounty of 
homegrown fruits. It's a rewarding space that provides both aesthetic pleasure and fresh produce.
 Here's how you can design and maintain a fruitful and floral garden:

</p>
                        <div>
                            <p className='p-1 bg-success'></p>
                           {/* <p className='text-center'> <Link to={""}>Read More <IoIosArrowRoundForward /></Link></p>  */}
       
                        </div> 
                  </div>
            </div>
            <div className="col-md-12 col-lg-3 p-2">
                  <div className="image d-flex justify-content-center align-items-center">
                       <img src={icon4} alt="" />
                  </div>
                  <div className="content">
                       <h4 className='text-center'>Maintenance Services</h4>
                       <p className='py-3 text-center'>Maintenance services refer to the tasks and activities that 
                         ensure the ongoing care, repair, and upkeep of a garden, building, or system to keep it 
                         functioning properly and looking good. In the context of a kitchen garden or fruits 
                         and flowers garden, maintenance involves regular checks, cleaning, and preventive care.</p>
                        <div>
                            <p className='p-1 bg-success'></p>
                           {/* <p className='text-center'> <Link to={""}>Read More <IoIosArrowRoundForward /></Link></p>  */}
       
                        </div> 
                  </div>
            </div>
       </div>
          </div>
      {/* Rosebush planting and nurturing start */}

      <div className="container p-3" data-aos="fade-up-right">
           <div className="row">
               <div className="text-white col-md-12 col-lg-6 d-flex bg-secondary justify-content-center align-items-center">
                     <div className='p-2'>
                          <h6 className='text-center'>Rosebush planting and nurturing</h6>
                          <p>Rosebush planting and nurturing involves choosing the right variety,
                               planting in the best location, and providing the care roses need to 
                               thrive. Here’s a step-by-step guide to help you plant and maintain
                                healthy rosebushes:</p>

                          <h5>Mowing</h5>   
                          <ul className='p-3' type="none">
                              <li><span className='p-2'><TfiHandPointRight className='text-success h5' /></span>Lorem ipsum dolor sit</li>
                              <li><span className='p-2'><TfiHandPointRight className='text-success h5' /></span>Praesent convallis nibh</li>
                              <li><span className='p-2'><TfiHandPointRight className='text-success h5' /></span>Nullam ac sapien sit</li>
                              <li><span className='p-2'><TfiHandPointRight className='text-success h5' /></span>Phasellus auctor augue</li>
                          </ul>
                     </div>
               </div>
               <div className="col-md-12 col-lg-5">
                    <div className='h-50'>
                     <img src={gardimg} className='w-100 ' alt="" />
                    </div>
               </div>
           </div>
      </div>
       {/* Turn your home to a garden */}
         <div className="container py-5" data-aos="flip-down">
               <h1 className='text-center text-success'><span>Turn your home</span> to a garden</h1>
               <p className='text-center text-warning py-3'><i>There are the services we own to you</i></p>
              <div className="row d-flex justify-content-evenly align-items-center">
                   <div className="col-md-12 col-lg-3">
                        <img src={flowerg3} alt="" />
                   </div>
                   <div className="col-md-12 col-lg-3 text-center d-flex justify-content-center align-items-center">
                         <div>
                         <h5>Tussie- Mussie Bouquets</h5>
                         <p className='opacity-50'>A Tussie-Mussie is a small, charming bouquet of flowers, 
                              typically wrapped in a cone-shaped holder, often given as a personal gift or worn as 
                              a corsage. The name Tussie-Mussie comes from the old French term "tussie" 
                              meaning "little bunch" and "mussie" meaning "flower."</p>

                         </div>
                   </div>
                   <div className="col-md-12 col-lg-3">
                        <img src={flowerg4} alt="" />
                   </div>
              </div>

              <div className="row d-flex justify-content-evenly align-items-center">
                   <div className="col-md-12 col-lg-3">
                        <h5>Hand Tied Bouquets</h5>
                        <p className='opacity-50'>Hand-tied bouquets are a popular and versatile type 
                         of floral arrangement, where the stems are gathered and tied together by hand, 
                         without the use of floral foam or a vase.</p>
                   </div>
                   <div className="col-md-12 col-lg-3 text-center d-flex justify-content-center align-items-center">
                         <div>
                           <img src={flower7} alt="" />
                         </div>
                   </div>
                   <div className="col-md-12 col-lg-3">
                        <h5>Pageant Bouquets</h5>
                        <p className='opacity-50'>Pageant bouquets are elegant, show-stopping arrangements 
                         typically used in beauty pageants, competitions, or other formal events. 
                         They are designed to complement the contestant's appearance and can be made in 
                         various sizes, shapes, and styles depending on the event's theme and 
                         the contestant's personal style.</p>
                   </div>
              </div>

              <div className="row d-flex justify-content-evenly align-items-center">
                   <div className="col-md-12 col-lg-3">
                      <img src={flowerg4} alt="" />
                   </div>
                   <div className="col-md-12 col-lg-3 text-center d-flex justify-content-center align-items-center">
                         <div>
                         <h5>Cascading Bouquets</h5>
                         <p className='opacity-50'>Cascading bouquets are dramatic, elegant arrangements 
                              that create a waterfall-like effect, with flowers and greenery flowing down 
                              in a natural, graceful manner. These types of bouquets are often used in weddings, 
                              especially for brides looking for a classic or vintage style. </p>

                         </div>
                   </div>
                   <div className="col-md-12 col-lg-3">
                        <img src={flower5} alt="" />
                   </div>
              </div>
         </div>
         {/*What are the benefits of fertilizing my lawn?  */}
         <div  className="servive-details container" data-aos="flip-up">
              <h2 className='text-center brandColor'>What are the benefits of fertilizing my lawn?</h2>
              <div className='py-3'>
                   <ol>
                      <li>Improved Growth: Lawn fertilizers contain nutrients that are essential for grass growth. Nitrogen, phosphorus, and potassium are the primary macronutrients that grass needs to grow and develop. Fertilizing your lawn provides these essential nutrients in the right balance to promote healthy growth.</li>
                       <li>Enhanced Color: A well-fertilized lawn will typically have a deeper and more vibrant green color. This can significantly enhance the overall appearance of your lawn and make it more aesthetically pleasing.</li>
                       <li>Improved Resistance to Stress: A properly fertilized lawn is better able to withstand stress from factors like drought, foot traffic, and disease. The nutrients in the fertilizer help to strengthen the roots and provide the grass with the resources it needs to recover from stress.</li>
                       <li>Reduced Weeds: A thick, healthy lawn is one of the best defenses against weeds. Fertilizing your lawn can help it grow thicker, which can reduce the number of weeds that are able to take root.</li>
                       <li>Increased Resilience to Weather Conditions: Lawn fertilizers can help your lawn withstand weather conditions such as heat, cold, and humidity. Fertilizers provide the nutrients that are necessary for the grass to grow strong roots, which help to protect the grass from the effects of extreme weather.</li>
                       <li>Boosted Lawn Health: Regular fertilization of your lawn can help keep it healthy and reduce the risk of disease and pests. By providing the right nutrients to the grass, fertilizers can help promote strong growth, which in turn helps the lawn to better resist disease and pests.</li>
                   </ol>
              </div>
         </div>
    </div>
  )
}

export default Service
