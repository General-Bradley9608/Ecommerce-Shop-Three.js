import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Shop from './Shop';
import ShopSingleNova from './ShopSingleNova';
import ShopSingleMi from './ShopSingleMi';
import ShopSingleGalaxy from './ShopSingleGalaxy';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomePage() {
 
    const location = useLocation();
    return (
    <>

    {/* Start Slider Carousel */}

    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/iPhone11.png" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success"><b>GET</b> IT NOW</h1>
                                <h3 className="h2">Your One Stop Destination</h3>
                                <p>
                                    The Ultimate Destination for buying the latest electronics. With a wide range of products from top brands, you can find everything you need here!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/mylogo.png" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1 text-success"><b>3D MODEL VIEWING</b></h1>
                                <h3 className="h2">View Any Item in 3D</h3>
                                <p>
                                    Experience products in a whole new dimension! Our cutting-edge technology allows you to view any item in stunning 3D, giving you a true-to-life representation of what you're interested in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/Delivery.png" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1 text-success"><b>GET IT NOW!</b></h1>
                                <h3 className="h2">Buy Instantly</h3>
                                <p>
                                    With just a few clicks, you can purchase the item you've been eyeing and have it delivered right to your doorstep. Our secure and user-friendly checkout process makes buying online easier than ever before. So what are you waiting for? Start browsing, buy instantly, and enjoy your new 3D shopping experience!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    
    {/* End Slider Carousel */}

    {/* Start Categories of The Month */}

          <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Top Categories This Month</h1>
                    <p>
                        Discover the Hottest Products of the Season - Shop our Top Categories of the Month!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <img src="./assets/img/cat_1.jpg" alt=" " className="rounded-circle img-fluid border"/>
                    <h5 className="text-center mt-3 mb-3">Smart Phones</h5>
                    <p className="text-center">
                        <Link to = "/Shop"><button className="btn btn-success">Go Shop</button></Link>
                    </p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <img src="./assets/img/cat_2.jpg" alt=" " className="rounded-circle img-fluid border"/>
                    <h2 className="h5 text-center mt-3 mb-3">Smart Watches</h2>
                    <p className="text-center">
                        <Link to = "/ShopSmartWatches"><button className="btn btn-success">Go Shop</button></Link>
                    </p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <img src="./assets/img/cat_3.jpg" alt=" " className="rounded-circle img-fluid border"/>
                    <h2 className="h5 text-center mt-3 mb-3">VR Headsets</h2>
                    <p className="text-center">
                        <Link to = "/ShopVRHeadsets"><button className="btn btn-success">Go Shop</button></Link>
                    </p>
                </div>
            </div>
          </section>
        
        {/* End Categories of The Month */}
  
    {/*Start Featured Product*/}
    
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Featured Products</h1>
                    <p>
                        Get Ready to Be Impressed! We've hand-selected the best of the best, so you can shop with confidence and ease.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src="./assets/img/nova3i.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">Rs 41,599</li>
                            </ul>
                            <Link to="/ShopSingleNova" className="h2 text-decoration-none text-dark">Huawei Nova 3i</Link>
                            <p className="card-text">
                                Ultimate value for money smartphone, packed with powerful features that will exceed your expectations. Stunning 6.3-inch Full HD display, 6GB of RAM, and a powerful Kirin 710 processor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src="./assets/img/mi10t.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">Rs 80,000</li>
                            </ul>
                            <Link to="/ShopSingleMi" className="h2 text-decoration-none text-dark">Xiaomi Mi 10T Lite</Link>
                            <p className="card-text">
                                Get More for Your Money with Xiaomi Mi 10T Lite! Powerful Smartphone that offers premium features without breaking the bank. Large 6.67-inch Full HD display, 6GB of RAM, and a 64MP AI quad-camera system.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src="./assets/img/galaxya21.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">Rs 34,999</li>
                            </ul>
                            <Link to="/ShopSingleGalaxy" className="h2 text-decoration-none text-dark">Samsung Galaxy A21</Link>
                            <p className="card-text">
                                Upgrade Your Mobile Experience with Samsung Galaxy A21! Affordable smartphone offers powerful features and exceptional value. Large 6.5-inch HD+ display, 3GB of RAM, and a long-lasting battery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*End Featured Product*/}


    </>
  )
}
