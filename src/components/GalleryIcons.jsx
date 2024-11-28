import React, { useEffect } from 'react'

// images
import img1 from "../assets/gallery/img-1.jpeg";
import img2 from "../assets/gallery/img-2.jpeg";
import img3 from "../assets/gallery/img-3.jpeg";
import img4 from "../assets/gallery/img-4.jpeg";
import img5 from "../assets/gallery/img-5.jpeg";
import img6 from "../assets/gallery/img-6.jpeg";
import img7 from "../assets/gallery/img-7.jpeg";
import img8 from "../assets/gallery/img-8.jpeg";
import img9 from "../assets/gallery/img-9.jpeg";
import img10 from "../assets/gallery/img-10.jpeg";
import img11 from "../assets/gallery/img-11.jpeg";
import img12 from "../assets/gallery/img-12.jpeg";
import img13 from "../assets/gallery/img-13.jpeg";
import img14 from "../assets/gallery/img-14.jpeg";
import img15 from "../assets/gallery/img-15.jpeg";
import img16 from "../assets/gallery/img-16.jpeg";
import img17 from "../assets/gallery/img-17.jpeg";
import img18 from "../assets/gallery/img-18.jpeg";
import img19 from "../assets/gallery/img-19.jpeg";
import img20 from "../assets/gallery/img-20.jpeg";
import img21 from "../assets/gallery/img-21.jpeg";
import img22 from "../assets/gallery/img-22.jpeg";
import img23 from "../assets/gallery/img-23.jpeg";
import img24 from "../assets/gallery/img-24.jpeg";
import img25 from "../assets/gallery/img-25.jpeg";
import img26 from "../assets/gallery/img-26.jpeg";

// icons
import { MdOutlineLink } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const GalleryIcons = () => {

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
     ];


     useEffect(()=>{
      function getRefresh(){
         window.scrollTo(0, 0);
     }
     getRefresh()
 },[])
  return (
    <div className='gallery-icons-section'>
                     <div className="px-5 banner-animation-page gallery-banner d-flex align-items-center">
                <div>
                    <h1 className='text-success'>Gallery</h1>
                    <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success'><Link to={"/"} className='text-white '>Home</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/about"} className='text-white '>About</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/gallery"} className='text-white '>Gallery</Link> /</li>
                         </ul>
                     </div>
                </div>
            </div>

      {/* gallery icon */}

     <div className="container-fluid p-5">
            <h2 className='py-4 text-center '><span className='brandColor'>Gallery Icons</span>Only</h2>
       <div className="row">
            {
                gardenProduct.map((items,index)=>(
                    <div className="col-md-12 col-lg-3" key={index}>
                        <div className="gallery-icons-center">
                        <div className="images">
                             <img src={items.path} className='w-100' alt="" />
                        </div>
                        <div className="content">
                          <MdOutlineLink className='h1' />
                          <CiSearch className='h1' />    
                        </div>

                        </div>
                    </div>
                      
                ))
            }
       </div>

     </div>
    </div>
  )
}

export default GalleryIcons
