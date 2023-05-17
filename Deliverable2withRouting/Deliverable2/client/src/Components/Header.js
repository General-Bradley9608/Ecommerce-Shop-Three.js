import React, {useContext,useState} from 'react'
import EmailContext from './EmailContext';
import axios from 'axios';
import HomePage from './HomePage';
import Shop from './Shop';
import About from './About'
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useLocation,useNavigate } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Header() {

    const emailContext = useContext(EmailContext);
    const history = useHistory();

    async function signout(e) {
        
        //e.preventDefault();
        try {
          await axios.get("http://localhost:3001/logout");
          // Destroy the session on the server-side
      
          // Redirect the user to the desired page after logout
          window.location.reload();
          //history.push("/Login");
        } catch (error) {
          console.log(error);
          alert("An error occurred while logging out");
        }
      }
      

    
    return (
    <>
    
    {/* Header */}
    
    <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

            <Link className="navbar-brand text-success logo h1 align-self-center" to="/HomePage">
                Get It Now
            </Link>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/HomePage">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login/Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Homepage" onClick={signout} >SignOut</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <Link className="nav-icon position-relative text-decoration-none" to="/Cart">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                    </Link>
                    <span> Hello : {emailContext.username}</span>
                </div>
            </div>
         </div>
    </nav>
    
    {/* Header */}

    {/* Modal */}

    <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

    {/* Modal */}



    </>

  )
}
