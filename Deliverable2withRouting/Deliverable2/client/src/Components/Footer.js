import React from 'react'
import HomePage from './HomePage';
import Shop from './Shop';
import About from './About'
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


export default function Footer() {
  return (
    <>
    
    {/*Start Footer*/}

    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">Get It Now</h2>
                    {/* <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            852-B Miaad St Faisal Town, Lahore
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:+92-307-431-3968">+92-307-431-3968</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:l201268@lhr.nu.edu.pk">l201268@lhr.nu.edu.pk</a>
                        </li>
                    </ul> */}
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" to="/Shop">Smart Phones</Link></li>
                        <li><Link className="text-decoration-none" to="/ShopSmartWatches">Smart Watches</Link></li>
                        <li><Link className="text-decoration-none" to="/ShopVRHeadsets">VR Headsets</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" to="/HomePage">Home</Link></li>
                        <li><Link className="text-decoration-none" to="/About">About Us</Link></li>
                        <li><Link className="text-decoration-none" to="/Contact">Contact</Link></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2023 Get It Now 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    {/*End Footer*/}
    
    </>
  )
}
