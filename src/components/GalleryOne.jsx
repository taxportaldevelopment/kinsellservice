import  { useEffect, useState,useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
// images
import img1 from "../assets/snow-gallery/gallery-1.jpg";
import img2 from "../assets/snow-gallery/gallery-2.jpeg";
import img3 from "../assets/snow-gallery/gallery-3.jpg";
import img4 from "../assets/snow-gallery/gallery-4.jpg";
import img5 from "../assets/snow-gallery/gallery-5.jpg";
import img6 from "../assets/snow-gallery/gallery-6.jpg";
import img7 from "../assets/snow-gallery/gallery-7.jpg";
import img8 from "../assets/snow-gallery/gallery-8.jpg";
import img9 from "../assets/snow-gallery/gallery-9.jpg";
import img10 from "../assets/snow-gallery/gallery-10.jpg";
import img11 from "../assets/snow-gallery/gallery-11.jpg";
import img12 from "../assets/snow-gallery/gallery-12.jpg";
import img13 from "../assets/snow-gallery/gallery-13.jpg";
import img14 from "../assets/snow-gallery/gallery-14.jpg";
import img15 from "../assets/snow-gallery/gallery-15.jpg";
import img16 from "../assets/snow-gallery/gallery-16.jpg";
import imagescenter from "../assets/snow-gallery/snow-top-img.jpg";
import { Link } from "react-router-dom";

const GalleryOne = () => {


  const gardenProduct = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];




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

  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);
  return (
    <div className="gallery-section garden-first-page py-4">
      <div className="px-5 banner-animation-page snow-gallery-banner d-flex align-items-center">
        <div>
          <h1 className="text-success"><span className="text-white">Snow</span> Remove</h1>
          <p className="text-white" >Midtown Toronto&apos;s most popular and best rated residential snow removal service. <br /> Enjoy simple monthly pricing with a dedicated, <br /> year-round team you can count on.</p>
          <div className="nav-bages">
            <ul>
              <li className="d-inline text-success">
                <Link to={"/"} className="text-white ">
                  Home
                </Link>{" "}
                /
              </li>
              <li className="d-inline text-success">
                <Link to={"/about"} className="text-white ">
                  About
                </Link>{" "}
                /
              </li>
              <li className="d-inline text-success">
                <Link to={"/service"} className="text-white ">
                  Service
                </Link>{" "}
                /
              </li>
            </ul>
          </div>
        </div>
      </div>
     {/* snow intro section*/}  
       <div className="container p-4">
             <div className="py-2 px-3 brandBgColor">
                   <h6 className="text-center text-white">See live Snow Service Updates during storms</h6>
             </div>
            <div className="row o-2 ">
                 <div className="col-md-12 col-lg-6 p-2">
                      <p className="text-danger">SNOW REMOVAL FOR WINTER 2024/25 IS NOW MORE THAN 95% SOLD. Please book early to avoid disappointment - we have limited openings this year, and expect to sell out some time this month. - Mike, General Manager, November 15, 2024</p>
                     <p>We offer a premium residential snow removal service. Unlike the competition, our team is year-round staff who work at Gardenzilla, and are committed to delivering the same high standards for snow removal as we do for our landscape services.</p>
                     <p>We work exclusively on seasonal contracts - we divide your price into five equal monthly payments, and you get complete snow coverage through the winter. Our team is reliable, with service times typically under eight hours, with live updates on Facebook during storms, and a full time office staff on hand to handle emergencies.</p>
                 </div>
                 <div className="col-md-12 col-lg-6">
                    <div className="image">
                          <img src={imagescenter} className="w-100 p-2" alt="" />
                    </div>
                 </div>
            </div>
       </div>
      {/* gallery filter section */}

      <h1 className="text-center py-4">
        <span className="brandColor">All</span> Service
      </h1>
      <div className="gallery-show-section container-fluid" data-aos="flip-up">
        <div className="row my-5">
          {gardenProduct.map((items, index) => (
            <div
              className="col-md-12 col-lg-3 gallery-one-parent mt-3"
              key={index}
            >
              <div className=" gallery-one-pre">
                <div className=" overflow-hidden gallery-one-section">
                  <img
          src={ items }
          onClick={ () => openImageViewer(index) }
             className="w-100"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
                  />
                  <div className="gallery-one-pre-content d-flex justify-content-center align-items-center">
                     <div>
                    <h5 className="text-white"><span className="brandColor">Kinsell </span> Service</h5>
                      <p className="py-2 text-white">Best Service</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {isViewerOpen && (
            <>
         <div className="gallery-show-img my-3">
        <ImageViewer
          src={ gardenProduct}
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          backgroundStyle={{backgroundColor:"#00000098"}}
          
          />
          </div>        
        </>
        
      )}
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;
