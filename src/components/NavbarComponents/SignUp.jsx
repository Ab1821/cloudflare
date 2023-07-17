import React from 'react';
import Footer from '../Footer';
import SignUpForm from './SignUpForm';
function SignUp(props) {
    return (
        <>

            <nav className="navbar navbar-light bg-light border">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./img/cloudflareLogo.png" alt="" width="80" height="40" />
                    </a>

                </div>
            </nav>
            <div className="container-fluid border">
                <div className="row">
                    <div className="col-md-4 signupleft">
                        <img src="./img/signupleftimg.SVG" alt="signleft" width='100%' />
                        <div className="text mt-4 p-3 ms-3 ">
                            <h5>Welcome to Cloudflare</h5>
                            <span>Protect and accelerate anything connected to the Internet.</span>
                            <div className='mt-3'>
                                <p><i class="fa fa-check-circle me-2 " aria-hidden="true" />Secure your websites, APIs, and Internet applications</p>
                                <p><i class="fa fa-check-circle me-2 " aria-hidden="true" />Protect corporate networks, employees, and devices</p>
                                <p><i class="fa fa-check-circle me-2 " aria-hidden="true" />Write and deploy code that runs on the network edge</p>
                                <p><i class="fa fa-check-circle me-2 " aria-hidden="true" />Powered by a global network that gets smarter with every request</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-4 ms-4 signupright">
                        <SignUpForm />

                    </div>
                    <div className='container-fluid footersign'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;