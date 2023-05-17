import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


export default function Shop() {
  return (
    <>
    
    {/*Start of Categories and Items */}

    <div className="container py-5">
        <div className="row">

            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" >
                            Products
                            <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul className="collapse show list-unstyled pl-3">
                            <li><Link className="text-decoration-none" to="/Shop">Smart Phones</Link></li>
                            <li><Link className="text-decoration-none" to="/ShopSmartWatches">Smart Watches</Link></li>
                            <li><Link className="text-decoration-none" to="/ShopVRHeadsets">VR Headsets</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            <select className="form-control">
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Price Low to High</option>
                                <option>Price High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src="assets/img/nova3i.jpg" alt=''/>
                            </div>
                            <div className="card-body">
                                <Link to="/ShopSingleNova" className="h3 text-decoration-none">Huawei Nova 3i</Link>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">Rs41,599</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src="assets/img/galaxya21.jpg" alt='' />
                            </div>
                            <div className="card-body">
                                <Link to="/ShopSingleGalaxy" className="h3 text-decoration-none">Samsung Galaxy A21</Link>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">Rs.34,999</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src="assets/img/mi10t.jpg" alt='' />
                            </div>
                            <div className="card-body">
                                <Link to="/ShopSingleMi" className="h3 text-decoration-none">Xiaomi MI 10T Lite</Link>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">Rs.80,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src="assets/img/product_single_09.jpg" alt='' />
                            </div>
                            <div className="card-body">
                                <Link to="/ShopSinglePixel" className="h3 text-decoration-none">Google Pixel 4</Link>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">Rs.74,000</p>
                            </div>
                        </div>
                    </div>
                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <Link className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" to="/Shop" tabindex="-1">1</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    {/*End of Categories and Items */}

    
    {/*Start Brands*/}

    <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                        Empowering the Future: Cutting-Edge Technology at Your Fingertips.
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                        
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>
                      
                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                              
                                <div className="carousel-inner product-links-wap" role="listbox">

                                 
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <Link to="/ShopSingleNova"><img className="img-fluid brand-img" src="assets/img/huawei.png" alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="/ShopSingleGalaxy"><img className="img-fluid brand-img" src="assets/img/samsung.png" alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="/ShopSingleMi"><img className="img-fluid brand-img" src="assets/img/mi.png" alt="Brand Logo"/></Link>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <Link to="/ShopSinglePixel"><img className="img-fluid brand-img" src="assets/img/apple.png" alt="Brand Logo"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/huawei.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/samsung.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/mi.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/apple.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/huawei.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/samsung.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/mi.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="/"><img className="img-fluid brand-img" src="assets/img/apple.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                   

                                </div>
                              
                            </div>
                        </div>
                       
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*End Brands*/}
    


    
    
    </>
  )
}
