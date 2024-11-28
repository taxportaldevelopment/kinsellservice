import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
const Gallery = () => {

    const [galleryShow,setGalleryShow] = useState([]);
    const [active,setActive] = useState("All")

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
   ]


   const galleryFilter = (name)=>{
        
        if(name.toUpperCase() == "ALL"){
             setGalleryShow(gardenProduct)
             setActive(name.toUpperCase())
            }else{
           setActive(name.toUpperCase())
             setGalleryShow(gardenProduct.filter(items => items.type.toUpperCase() == name.toUpperCase()))
        }
   }

   useEffect(()=>{
      setGalleryShow(gardenProduct)
      function getRefresh(){
         window.scrollTo(0, 0);
     }
     getRefresh()
   },[])

  return (
    <div className='gallery-section garden-first-page'>
            <div className="px-5 banner-animation-page gallery-banner d-flex align-items-center">
                <div>
                    <h1 className='text-success brandColor'>Gallery</h1>
                     <div className="nav-bages">
                         <ul>
                            <li className='d-inline text-success'><Link to={"/"} className='text-white '>Home</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/about"} className='text-white '>About</Link> /</li>
                            <li className='d-inline text-success'><Link to={"/gallery-classic"} className='text-white '>gallery-classic</Link> /</li>
                         </ul>
                     </div>
                </div>
            </div>

          {/* gallery filter section */}
              {/* All / Hedges / Home Garden / Kitchen Garden / Sprinklers / Tea Garden */}
          <div className="garden-btn p-5 d-flex justify-content-evenly flex-wrap" data-aos="fade-down">
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1' onClick={()=>galleryFilter("all")}>All</button>
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1 ' onClick={()=>galleryFilter("Hedges")}>Hedges</button>
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1' onClick={()=>galleryFilter("Home Garden")}>Home Garden</button>
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1' onClick={()=>galleryFilter("Kitchen Garden")}>Kitchen Garden</button>
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1' onClick={()=>galleryFilter("Sprinklers")}>Sprinklers</button>
              <button className='outline-none py-2 brandBgColor text-white px-5 mb-1' onClick={()=>galleryFilter("Tea Garden")}>Tea Garden</button>
          </div>
                <h2 className='text-center py-2'><span className='brandColor'>{active}</span> Service</h2>
          <div className="gallery-show-section container-fluid p-4" data-aos="fade-right">
               <div className="row my-5">
                  {
                      galleryShow.map((items,index)=>(
                        <div className="col-md-12 col-lg-4" key={index}>
                             <div className='p-2 overflow-hidden'>
                            <img src={items.path} className='w-100 h-100' alt="" />
                             </div>
                        </div>
                      ))
                  }
               </div>
          </div>

    </div>
  )
}

export default Gallery
