import {NavLink} from "react-router-dom";
// image
import image from "../../assets/service-sections/woodwork-1.jpeg";
// iocns
import { FaHandPointRight } from "react-icons/fa";
const Woodwork = () => {
  return (
    <div>
                       <div className="landscaping-section container-fluid px-2 py-5">
                             <div className="row">
                                   <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
                                         <div>
                                             <h1 className='text-center'><span className='bg-success p-1 rounded brand-name'>Woodwork </span> Services</h1>
                                             <div className='text-white'>
                                                <NavLink className={"text-white h5"} to={"/kinsellservice"}>Home</NavLink> /  <NavLink className={"text-white h5"} to={"/about"} >About</NavLink>
                                             </div>
                                         </div>
                                   </div>
                                   <div className="col-md-12 col-lg-6">
                                           <div className='p-3'>
                                                <form className='enquery-form border rounded p-2'>
                                                        <h4 className='py-1 text-center text-white'>GET ENQUIRY</h4>
                                                    <div className=' p-2 '>
                                                     <div className="fotm-group">
                                                          <label htmlFor="name" className='py-2 text-white'>Enter Your Name</label>
                                                          <input type="text" name='name' placeholder='Name...' className='enquery-form-input ps-2' />
                                                     </div>
                                                     <div className="fotm-group">
                                                          <label htmlFor="email" className='py-2 text-white'>Enter Your Email</label>
                                                          <input type="email" name='email' placeholder='Email...' className='enquery-form-input ps-2' />
                                                     </div>
                                                     <div className="fotm-group">
                                                          <label htmlFor="number" className='py-2 text-white'>Enter Your Number</label>
                                                          <input type="number" name='number' placeholder='Phone Number' className='enquery-form-input ps-2' />
                                                     </div>
                                                     <div className="fotm-group py-2 d-flex justify-content-center">
                                                            <button className='btn btn-success'>SUbmit</button>
                                                     </div>
                                                     </div>   
                                                </form>
                                           </div>
                                   </div>
                             </div>
                       </div>
                       {/* content */}
                       <div className="container paragrap p-4">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 p-2">
                                      <div className='p-2'>
                                            <img src={image} className='w-100 card' alt="" />
                                      </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                      <div className="p-3">
                                           <h1 className='py-3 brand-name'>Woodwork Services</h1>
                                             <ul type="none"> 
                                                 <li className='py-2 brand-name '><FaHandPointRight className='px-1 h4'/> Custom furniture and decor</li>
                                                 <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/> Deck and pergola building</li>
                                                 <li className='py-2 brand-name'><FaHandPointRight className='px-1 h4'/>Repairs and refinishing of wood structures</li>
                                             </ul>
                                             <p className='text-style'>Add a touch of craftsmanship to your 
                                                home with our woodwork services. From custom furniture 
                                                and decor to deck and pergola building, we create 
                                                durable and stylish wood structures. Our services also 
                                                include repairs and refinishing to restore the beauty and 
                                                functionality of your wooden items.</p>
                                      </div>
                                </div>
                            </div>
                       </div>
    </div>
  )
}

export default Woodwork
