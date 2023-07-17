import React from 'react';

function Header(props) {
    return (
        <>
            <div className="container p-5 myheader text-inline">
                <div className="row">
                    <div className="col-md-6">
                        <h2>A global network
                            <br /> built for the cloud</h2>
                        <p>Cloudflare is a global network designed to make everything you
                            connect to the Internet secure, private, fast, and reliable.</p>
                        <ul>
                            <li>Secure your websites, APIs, and Internet applications.</li>
                            <li>Protect corporate networks, employees, and devices.</li>
                            <li>Write and deploy code that runs on the network edge</li>
                        </ul>
                        <span><a href="#"><i className='fa-regular fa-circle-play' /> What is cloudflare(1 min)</a></span>
                        <div className='mt-5'>
                            <button className='btn btn-primary'>Learn More </button>
                            <button className='btn btn2 btn-primary ms-4'>Get Started Free </button>
                        </div>

                    </div>
                    <div className="col-md-6 headimg">
                        <img src="img/global-network-connection-hero-illustration-01.SVG" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;