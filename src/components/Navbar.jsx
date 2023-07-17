import React from 'react';
import {
    Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUp from './NavbarComponents/SignUp';

function Navbar(props) {

    const navigate = useNavigate();                 //useNavigate hook

    const btnClickSignup = () => {

        navigate("/SignUp");
    }
    const btnClickLogin = () => {
        navigate("/Login");
    }
    return (
        <>
            <header className="bg-light fixed-top">
                <div className="container-fluid">
                    <div className="row mt-2 d-flex">
                        <div className="col-md-6 mt-2">
                            <div className="logo">
                                <img src="./img/cloudflareLogo.png" alt="" />
                            </div>

                        </div>
                        <div className="col-md-6 d-flex rightnav">
                            <p>Sales: 0008-000-501-996</p>
                            <div className=''>
                                <select name="Support" id="" className='myslct'>
                                    <option value="">Support</option>
                                    <option value="">Cotact support</option>
                                    <option value="">Help centre</option>
                                    <option value="">Cloudflare community</option>
                                </select>
                                <i class="fa fa-globe" aria-hidden=""></i>
                                <select name="" id="" className='lang'>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse " id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Solutions">Solutions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href=" ">Partners</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href=" ">Why cloudflare</a>
                                    </li>
                                </ul>

                                <div className="d-flex me-3">
                                    <input className="srch p-2 " type="text" placeholder="Search" />
                                    <button className=" btn btn-light " onClick={btnClickSignup}>Sign up</button>
                                    <button className=' btn btn-danger'>Under Attack ?</button>
                                    <button className=' btn btn-primary ms-2' onClick={btnClickLogin}>Login</button>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;