import React, { useEffect } from 'react'
// images
import img1 from "../assets/garden-gallery/img-1.jpg";
import img2 from "../assets/garden-gallery/img-2.jpg";
import img3 from "../assets/garden-gallery/img-3.jpg";
import img4 from "../assets/garden-gallery/img-4.jpeg";
import img5 from "../assets/garden-gallery/img-5.jpg";
import img6 from "../assets/garden-gallery/img-6.jpg";
import img7 from "../assets/garden-gallery/img-7.jpg";
import img8 from "../assets/garden-gallery/img-8.jpg";
import img9 from "../assets/garden-gallery/img-9.jpg";
import img10 from "../assets/garden-gallery/img-10.jpg";
import img11 from "../assets/garden-gallery/img-11.jpg";
import img12 from "../assets/garden-gallery/img-12.jpg";
import img13 from "../assets/garden-gallery/img-13.jpg";
import img14 from "../assets/garden-gallery/img-14.jpg";
import img15 from "../assets/garden-gallery/img-15.jpg";
import img16 from "../assets/garden-gallery/img-16.jpg";

// icons
import { MdOutlineLink } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const GalleryGirly = () => {

    const gardenProduct = [
        {
           path:img1,
           type:"Hedges"
        },
        {
          path:img2,
          type:"Hedges"
       },
       {
          path:img3,
          type:"Sprinklers"
       },
       {
         path:img4,
         type:"Sprinklers"
      },
      {
          path:img5,
          type:"Hedges"
       },
       {
         path:img6,
         type:"Kitchen Garden"
      },
      {
          path:img7,
          type:"Home Garden"
       },
       {
         path:img8,
         type:"Tea Garden"
      },
      {
          path:img9,
          type:"Tea Garden"
       },
       {
         path:img10,
         type:"Kitchen Garden"
      },
      {
          path:img11,
          type:"Sprinklers"
       },
       {
         path:img12,
         type:"Home Garden"
      },
      {
          path:img13,
          type:"Home Garden"
       },
       {
         path:img14,
         type:"Hedges"
      },
      {
         path:img15,
         type:"Home Garden"
      },
      {
        path:img16,
        type:"Hedges"
     },
     ];

     useEffect(()=>{
      function getRefresh(){
         window.scrollTo(0, 0);
     }
     getRefresh()
 },[])

  return (
    <div className='gallery-girly-section'>
            <div className="px-5 banner-animation-page gallery-banner d-flex align-items-center">
                <div>
                    <h1 className='text-success'>Gallery - Girly</h1>
                    <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success'><Link to={"/"} className='text-white '>Home</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/about"} className='text-white '>About</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/service"} className='text-white '>Service</Link> /</li>
                         </ul>
                     </div>
                </div>
            </div>

      {/*gallery-girly  */}
        <div className="container p-5">
         <div className="row ">
               {gardenProduct.map((items,index)=>(
                    <div className="col-md-6 col-lg-3 p-1 gallery-girly rounded-right overflow-hidden" key={index}>
                        <img src={items.path} className='w-100' alt="" />
                        <div className="content rounded-right">
                              <div>
                                  <p className='text-center text-white'><abbr title="Cras tristique purus non lacus">Cras tristique purus non lacus</abbr></p>
                                   <br /><br />
                                   <h4 className='text-white text-center'><span>-----</span></h4>
                                   
                                   <div className="icons d-flex justify-content-around">
                                      <div className="icore d-flex justify-content-evenly">
                                         <MdOutlineLink className='h1' />        
                                      </div>
                                      <div className="icore d-flex justify-content-evenly">
                                         <CiSearch className='h1' />        
                                      </div>
                                   </div>
                              </div>
                        </div>
                    </div>
               ))}
         </div>

        </div>
    </div>
  )
}

export default GalleryGirly
