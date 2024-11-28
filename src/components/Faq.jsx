import React, { useEffect, useState } from 'react'

//images
import contactImg from "../assets/faq/faq-ad.png";
import ourDetails from "../assets/faq/KINSELL-SERVICE.png"
import womenimg2 from "../assets/faq/women-img2.jpg";
// icons
import { AiOutlinePlus } from "react-icons/ai";
import { GrSubtract } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaPinterestP } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaPagelines } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FaqQuestions = ({items})=>{
    const [active,setActive] = useState(false)
    const [contentShow,setContentShow] = useState(false);
    const [icons,setCons] = useState(<AiOutlinePlus />)

     const showContent = ()=>{
          setContentShow(pre => !pre)
          setActive(pre => !pre)
          setCons(() => contentShow == true?<AiOutlinePlus />:<GrSubtract />)
     }


    return(
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <h2>{items.title}</h2>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
          <p>{items.content}</p>
      </div>
    </div>
  </div>



    )
}

const Faq = () => {

     useEffect(()=>{
          function getRefresh(){
             window.scrollTo(0, 0);
         }
         getRefresh()
     },[])
   const Questions = [
    {
        id:0,
        title:"Gardening is expensive. I don’t have enough space…..",
        content:[
            "Container Gardening: Use pots, old buckets, or even recycled containers like plastic bottles or tin cans.",
            "Vertical Gardening: Utilize vertical space with wall-mounted planters, shelves, or hanging baskets.",
            "Windowsill Herbs: Grow small herbs (like basil, mint, or coriander) on your kitchen windowsill.",
            "Balcony Gardens: Small planters or railing pots can turn a balcony into a green haven."
        ]
    },
       {
        id:1,
        title:"The amazing health benefits of gardening",
        content:[
           "Exercise: Digging, planting, and weeding offer a full-body workout, improving strength, flexibility, and stamina.",
           "Vitamin D Boost: Sunlight exposure while gardening helps your body produce vitamin D, which strengthens bones and boosts immunity.",
           "Better Heart Health: Regular physical activity in the garden reduces the risk of heart disease and stroke.",
           "Fresh, Healthy Food: Growing your own vegetables and fruits encourages a healthier diet and provides nutrient-rich, organic produce.",
           "Lower Blood Pressure: Gardening reduces stress levels, which can contribute to lower blood pressure."
        ]
       },
       {
        id:2,
        title:"How to design and maintain kitchen garden?",
        content:[
           "Assess Your Space: Choose a sunny spot (at least 4-6 hours of sunlight) on a balcony, terrace, backyard, or even windowsills.",
           "Small Spaces: Use pots, vertical planters, or wall-mounted shelves.",
           "Larger Spaces: Create raised beds or dedicated garden patches.",
           'ow Seeds or Transplant: Follow the instructions on seed packets for depth and spacing.'
        ]
       },
       {
        id:3,
        title:"How much watering is needed for my plants?",
        content:[
           "Vegetables: Most need about 1 inch (2.5 cm) of water per week, including rainfall. In hot weather, water more frequently.",
           "Herbs: Generally need less water. Let the topsoil dry out between watering.",
           "Leafy Greens: Like spinach or lettuce, they prefer consistently moist soil."
        ]
       },
       {
        id:4,
        title:"The 5 health benefits of gardening.",
        content:[
           "Physical Fitness",
           "Mental Well-being",
           "Cognitive Benefits",
           "Better Nutrition",
           "Social and Emotional Benefits"
        ]
       },
       {
        id:5,
        title:" Gardening reduces risk of dementia by 30%",
        content:[
           "Gardening involves planning, problem-solving, and sensory engagement, which keep cognitive functions sharp.",
           "Regular movement improves blood flow to the brain, reducing age-related cognitive decline.",
           "Focusing on gardening tasks reduces stress and promotes mental clarity, which helps protect brain health.",
           "Maintaining a consistent routine and caring for plants provide structure, enhancing mental well-being.",
           "Participating in gardening groups fosters social connections, reducing feelings of isolation—a risk factor for dementia."
        ]
       },
   ]    

  return (
    <div className='faq-sections'>
                    <div className="px-5 banner-animation-page gallery-banner d-flex align-items-center">
                <div>
                    <h1 className='text-success'>FAR</h1>
                    <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success'><Link to={"/"} className='text-white '>Home</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/about"} className='text-white '>About</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/gallery-art"} className='text-white '>gallery-art</Link> /</li>
                         </ul>
                     </div>
                </div>
            </div>
            {/* faq-questions */}
            <div className="faq-question container py-5" data-aos="flip-left">     

                 <div className="row">
                     <div className="col-md-12 col-lg-8">
                       <h1 className='brandColor'>FAQ'S</h1>     

                         {/* questions start */}
                             <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           Gardening is expensive. I don’t have enough space…..
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
             {Questions[0].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>
          </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         The amazing health benefits of gardening
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> 
            <ol>
             {Questions[1].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          How to design and maintain kitchen garden?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
             {Questions[2].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>
          
          </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
          How much watering is needed for my plants?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
             {Questions[3].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>.
          
          </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
         The 5 health benefits of gardening.
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
             {Questions[4].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>
          
          </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSixe">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixe" aria-expanded="false" aria-controls="flush-collapseThree">
         Gardening reduces risk of dementia by 30%
      </button>
    </h2>
    <div id="flush-collapseSixe" className="accordion-collapse collapse" aria-labelledby="flush-headingSixe" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
             {Questions[5].content.map((items,index)=>(
                  <li key={index}>{items}</li>
             ))}

            </ol>
          
          </div>
    </div>
  </div>
</div>
                         {/* questions end */}

                    {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                       {Questions.map((items,index)=>(
                           <FaqQuestions items={items}  key={index} />
                       ))}
                    </div> */}
                     </div> 
                     <div className="col-md-12 col-lg-4 p-3">
                          <div className="images">
                               <img src={contactImg } className='w-100 p-2' alt="" />
                          </div>
                          <div className="images my-3">
                               <img src={ourDetails } className='w-100 p-2' alt="" />
                          </div>
                           <div className="details p-3">
                            <h2><span className='brandColor opacity-50'>Get in </span>Touch</h2>
                              <span className='opacity-50'><CiLocationOn /> 625 @ David Blake Road,</span><br />
                              <span className='opacity-50'>Adventureland, LA 14536, USA</span><br /><br />

                              <span className='opacity-50'><FiPhone /> Toll Free: 1224 2234 LAW</span><br />
                              <span className='opacity-50'><strong>Fax: </strong>1224 2235 225</span>
                              <br /><br />
                              <span className='opacity-50'> <MdOutlineMail /> Kinsell Service@hosting.com</span>
                              <span className='opacity-50'>info@hKinsell Service.com</span>
                           </div>
                     </div> 
                 </div> 
             </div>
             {/*Turn your home  */}
             <div className="container p-3" data-aos="flip-right">
                     <h2 className='text-center'><span className='brandColor'>Turn your home </span>into a Greenhouse!</h2>
                     <p className='text-center py-3 text-warning'>The garden fresh vegetables</p>
                   <div className="row">
                        <div className="col-md-12 col-lg-8">
                             <div className="row">
                                 <div className="col-md-12 col-lg-6 p-2">
                                      <div className="image d-flex justify-content-center align-items-center">
                                            <div className="icons-section d-flex justify-content-center align-items-center">
                                                <FaPinterestP className='h2 brandColor' />
                                        </div>
                                      </div>
                                      <div className="content py-3 text-center">
                                                 <h3 className='brandColor'>Leafy Vegetables</h3>
                                                 <p>
                                                 Leafy vegetables, also known as greens, are plants with edible leaves. 
                                                 They are rich in essential vitamins (like A, C, and K), minerals (such as calcium 
                                                 and iron), fiber, and antioxidants. 
                                                  </p>
                                            </div>
                                 </div>
                                 <div className="col-md-12 col-lg-6 p-2">
                                      <div className="image d-flex justify-content-center align-items-center">
                                            <div className="icons-section d-flex justify-content-center align-items-center">
                                                <BsBank className='h2 brandColor' />
                                        </div>
                                      </div>
                                      <div className="content py-3 text-center">
                                                 <h3 className='brandColor'>Organic Offerings</h3>
                                                 <p>Organic offerings" refer to products, typically food or 
                                                  personal care items, produced using organic farming methods. 
                                                  These methods avoid synthetic pesticides, fertilizers, genetically 
                                                  modified organisms (GMOs), and artificial additives. </p>
                                            </div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-md-12 col-lg-6 p-2">
                                      <div className="image d-flex justify-content-center align-items-center">
                                            <div className="icons-section d-flex justify-content-center align-items-center">
                                                <FaPagelines     className='h2 brandColor' />
                                        </div>
                                      </div>
                                      <div className="content py-3 text-center">
                                                 <h3 className='brandColor'>Lettuce and Lentils</h3>
                                                 <p>   
                                                 Lettuce and lentils are two versatile ingredients often used in healthy diets. While lettuce is a leafy green known for its crisp texture and mild flavor, lentils are protein-packed legumes rich in nutrients.</p>
                                            </div>
                                 </div>
                                 <div className="col-md-12 col-lg-6 p-2">
                                      <div className="image d-flex justify-content-center align-items-center">
                                            <div className="icons-section d-flex justify-content-center align-items-center">
                                                <FaBug className='h2 brandColor' />
                                        </div>
                                      </div>
                                      <div className="content py-3 text-center">
                                                 <h3 className='brandColor'>Peppy Soups & Fresh Salads</h3>
                                                 <p>Peppy soups and fresh salads bring vibrancy and nutrition to any meal. Combining bold flavors, fresh ingredients, and creative combinations, they offer refreshing options for any season.</p>
                                            </div>
                                 </div>
                             </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                             <div className="image">
                                  <img src={womenimg2} alt="" />
                             </div>
                        </div>
                   </div>
             </div>

             {/* footer faq */}
             <div data-aos="flip-up" className="faq-footer-section p-2 d-flex justify-content-evenly flex-wrap">
                  <div className="faq-card faq-one faq-faq-card p-4 my-2 d-flex align-items-center">
                       <div className="content text-center text-white py-5">
                            <h5>Pruning & Hedging</h5>
                            <p>We create sharp, clean lines and healthy plants to frame your outdoor space beautifully.</p>
                            <button className='text-uppercase btn btn-primary'>Read More</button>
                       </div>
                  </div>
                  <div className="faq-card faq-two faq-faq-card p-4 my-2 d-flex align-items-center">
                       <div className="content text-center text-white py-5">
                            <h5>Weeding</h5>
                            <p>Identification and removal of garden and lawn weeds to promote healthy growth.</p>
                            <button className='text-uppercase btn btn-primary'>Read More</button>
                       </div>
                  </div>
                  <div className="faq-card faq-three faq-faq-card p-4 my-2 d-flex align-items-center">
                       <div className="content text-center text-white py-5">
                            <h5>Landscape Edging</h5>
                            <p>Edging all lawn and garden borders</p>
                            <button className='text-uppercase btn btn-primary'>Read More</button>
                       </div>
                  </div>
                  <div className="faq-card faq-foure faq-faq-card p-4 my-2 d-flex align-items-center">  
                       <div className="content text-center text-white py-5">
                            <h5>Cleanup & Bagging</h5>
                            <p>Collection and bagging of winter debris from lawns, gardens, patios, and curblines.</p>
                            <button className='text-uppercase btn btn-primary'>Read More</button>
                       </div>
                  </div>
             </div>
    </div>
  )
}

export default Faq
