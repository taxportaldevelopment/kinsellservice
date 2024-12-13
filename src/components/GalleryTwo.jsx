import { useEffect,useState,useCallback } from "react";
import ImageViewer from 'react-simple-image-viewer';
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
// import { CiLineHeight, CiLink } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const GalleryTwo = () => {

   const [currentImage, setCurrentImage] = useState(0);
   const [isViewerOpen, setIsViewerOpen] = useState(false);

   const openImageViewer = useCallback((index) => {
      console.log(index);
      
     setCurrentImage(index);
     setIsViewerOpen(true);
   }, []);
 
   const closeImageViewer = () => {
     setCurrentImage(0);
     setIsViewerOpen(false);
   };


    const gardenProduct = [
       img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15
       ,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26

     ]

     useEffect(()=>{
      function getRefresh(){
        window.scrollTo(0, 0);
    }
    getRefresh()
   },[])

  return (
    <div className='gallery-section garden-first-page'>
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

           {/* product show section */}
           <div className='container-fluid py-5' data-aos="zoom-in">
              <h3 className="text-center py-4"><span className="brandColor">We Provide  </span> Servive</h3>
           <div className="row">
               
               {gardenProduct.map((items,index)=>(
                     <div className="col-md-12 col-lg-2 gallery-up-two" key={index}>

          <img
          src={ items }
          onClick={ () => openImageViewer(index) }
             className="w-100"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />

             {/* <div className="gallery-two overflow-hidden p-1">
                             <img src={items.path} className='w-100' alt="" /> 
                             <div className="content-section text-white d-flex justify-content-center align-items-center">
                                  <div>
                                 <span><CiLink className='h3'/></span>
                                 <span><CiSearch className='h3'/></span>

                                  </div>
                             </div> 
                         </div>  */}
                     </div>
                 ))}

         {isViewerOpen && (
            <>
         <div className="gallery-show-img my-3">
             <div style={{height:"100px"}}>
                
        <ImageViewer
          src={ gardenProduct}
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          backgroundStyle={{backgroundColor:"#00000098",height:"700px",padding:"10px"}}
          
          />
             </div>
          </div>        
        </>
        
      )}  



             </div>
           </div>

    </div>
  )
}

export default GalleryTwo
