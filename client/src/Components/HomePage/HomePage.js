import React from 'react'
import './HomePage.css'
import './hover.css'
import Logo from './Images/logo.png'
import Light from './Images/light.png'
import Arrow from './Images/arrow.svg'
import {Link} from 'react-router-dom'


const HomePage = () => {

    return (
        <div>
           
            <nav class="belownav navbar navbar-expand-lg navbar-light bg-light">
            
            <div class="container roboto">
            
                <a class="navbar-brand" href="#">
                    <img src = {Logo} alt="logo"></img>
                </a>

            
                <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>


                <div class=" collapse navbar-collapse" id="navbarSupportedContent">
            
                    <ul class="navbar-nav left  mb-2 mb-lg-0">
                        <li class="nav-item dropdown indileft">
                            <a
                                class="navcolor dropdown-toggle active"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                            For You
                            </a>
                    
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item roboto" href="#">Find matching Internships</a></li>
                                <li><a class="dropdown-item roboto" href="#">Hire right talents</a></li>
                                <li><a class="dropdown-item roboto" href="#">Work from Home</a></li>
                            </ul>
                        </li>
                        <li class="nav-item indileft">
                            <a class="navcolor active" aria-current="page" href="#">
                            <img src={Light} alt="light" className="light"></img> Instant Apply</a>
                        </li>
                        <li class="nav-item indileft">
                            <a class="navcolor active" href="#">Pricing</a>
                        </li>
                        
                            
                        <li class="nav-item indileft">
                            <a class="navcolor active" href="#" tabindex="-1" aria-disabled="true"
                                >About Us</a>
                        </li>
                        
                        <li className="nav-item indileft ">
                        <a className=" signup" href="#" tabindex="-1" aria-disabled="true" data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"> SIGN UP</a>
                        </li>
                    
                    <Link to="#">
                        <li className="nav-item">
                            <button 
                                className="RegisterBtn hvr-grow" 
                                data-mdb-toggle="modal"
                                data-mdb-target="#Login">
                                LOGIN
                            </button>
                        </li>
                    </Link>
                    </ul>
                
                </div>

                
            </div>

            </nav>

            <div className="text-center container middle"> 
                <h1 className="text padall">Apply and hear back every time</h1>
                <h4 className="padbot">Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</h4>
                <Link to="#">       
                    <button 
                        className="Started" data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">
                        Get Started
                    </button>     
                </Link>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                        <div className="container">
                            <h3 className="font-weight-bold">Sign Up</h3>
                            <h5 className="padbot2x">It's quick and easy</h5>
                            <form>     
                                <div class="row mb-4">
                                    <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example1" class="form-control" />
                                        <label class="form-label" for="form3Example1">First name</label>
                                    </div>
                                    </div>
                                    <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example2" class="form-control" />
                                        <label class="form-label" for="form3Example2">Last name</label>
                                    </div>
                                    </div>
                                </div>    
                                <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" class="form-control" />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                
                                <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" class="form-control" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                </div>

                                <button 
                                        className="signupbtn" data-mdb-dismiss="modal"
                                        aria-label="Close"
                                        data-mdb-toggle="modal"
                                        data-mdb-target="#exampleModal1"
                                        >
                                        Sign Up
                                </button>   
   
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel1"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img
                            className="arrow"
                            src = {Arrow} alt="arrow"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampleModal"
                        ></img>
                        <div className="modal-body text-center">
                        <div className="container">
                            <h3 className="font-weight-bold padbot2x mt-5">OTP Sent !</h3>
                            <input 
                                type="text"    
                                className="form-control textotp py-0" id="inlineFormInputGroup13" placeholder="Enter your OTP"/>
                                <p className="mt-3 mb-3">One time Passcode sent to your email ID- abc@gmail.com</p>
                                <button 
                                        className="signupbtn mb-3" 
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                        data-mdb-toggle="modal"
                                        data-mdb-target="#exampleModal2"
                                        
                                        >
                                        Enter
                                </button>
   
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>




            <div
                className="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-body text-center">
                        <div className="container">
                            <i className="fa fa-3x fa-check-circle tick mt-5" aria-hidden="true"></i>
                            <h3 className="padbot2x mt-5">Thanks now you’re part of myways community !</h3>
   
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="modal fade"
                id="Login"
                tabindex="-1"
                aria-labelledby="LoginModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                        <div className="container">
                            <h3 className="font-weight-bold mb-5 textleft">Login</h3>
                           


                           
                            <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                    className="nav-link active"
                                    id="ex1-tab-1"
                                    data-mdb-toggle="tab"
                                    href="#ex1-tabs-1"
                                    role="tab"
                                    aria-controls="ex1-tabs-1"
                                    aria-selected="true"
                                    >Student</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a
                                    class="nav-link"
                                    id="ex1-tab-2"
                                    data-mdb-toggle="tab"
                                    href="#ex1-tabs-2"
                                    role="tab"
                                    aria-controls="ex1-tabs-2"
                                    aria-selected="false"
                                    >Employee</a>
                                </li>
                               
                            </ul>
                     

                          
                            <div class="tab-content" id="ex1-content">
                                <div
                                    class="tab-pane fade show active"
                                    id="ex1-tabs-1"
                                    role="tabpanel"
                                    aria-labelledby="ex1-tab-1"
                                >
                                    {/* Tab 1 content */}

                                    <form>     
                                           
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control" />
                                            <label class="form-label" for="form3Example3">Email address</label>
                                        </div>

                                        
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control" />
                                            <label class="form-label" for="form3Example4">Password</label>
                                        </div>
                                        <p className="tick forgot">Forgot Password ?</p>

                                        <button 
                                                className="signupbtn" data-mdb-dismiss="modal"
                                                aria-label="Close"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#exampleModal2"
                                                >
                                                 Login
                                        </button>   
                                        <h6 className="mt-3 roboto pointer" data-mdb-dismiss="modal"
                                                aria-label="Close"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#exampleModal">
                                                New to MyWays? Sign Up here
                                        </h6>
        
                                    </form>



                                </div>
                                <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                    {/* Tab 2 content */}

                                    <form>     
                                           
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control" />
                                            <label class="form-label" for="form3Example3">Email address</label>
                                        </div>

                                        
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control" />
                                            <label class="form-label" for="form3Example4">Password</label>
                                        </div>
                                        <p className="tick forgot">Forgot Password ?</p>

                                        <button 
                                                className="signupbtn" data-mdb-dismiss="modal"
                                                aria-label="Close"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#exampleModal2"
                                                >
                                                 Login
                                        </button>   
                                        <h6 className="mt-3 roboto pointer" data-mdb-dismiss="modal"
                                                aria-label="Close"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#exampleModal">
                                                New to MyWays? Sign Up here
                                        </h6>
        
                                    </form>

                                </div>
                               
                            </div>
                            
                                                        

                            
                             

                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage
