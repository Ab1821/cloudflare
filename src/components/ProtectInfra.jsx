import React from 'react';

function ProtectInfra(props) {
    return (
        <>
            <div className="container-fluid mt-5 p-2">
                <div className="row">
                    <div className="col-md-6 mt-4 p-5 text-inline">

                        <span className='whtsnew'>CLOUDFLARE FOR INFRASTRUCTURE</span>
                        <h6 className=' mt-4'>Protect your Internet presence.</h6>
                        <p className='mt-4'>Your website, APIs, and applications are your key channels for doing business with your customers and suppliers. As more and more shift online, ensuring these resources are secure, performant and reliable is a business imperative.</p>

                        <p>  Cloudflare for Infrastructure is a complete solution to enable this for anything connected to the Internet.</p>

                    </div>
                    <div className="col-md-6 mt-4">
                        <img className='imgSecurity' src='img/security-api-web-apps-spot-illustration.SVG' alt="" />

                    </div>
                </div>
            </div>
            <div className="container justify-content-around mt-5">
                <div className="row">

                    <div className='col-md-4 '>
                        <img className='lockimg ' src='img/security-lock-blue.SVG' alt="" />
                        <span className='p-2'>Security</span>
                        <p className='p-2'>Firewall, DDoS protection, rate limiting, bot management, VPN, and more.</p>
                        <span className='blog p-2'>Learn more</span><i className="fa-solid fa-greater-than mt-2 ms-2" />
                    </div>
                    <div className='col-md-4'>
                        <img className='lockimg' src='img/performance-1-blue.SVG' alt="" />
                        <span className='p-2'>Performance</span>
                        <p className='p-2'>Intelligent routing, mobile & image optimization, video, cache.</p>
                        <span className='blog p-2'>Learn more</span><i className="fa-solid fa-greater-than mt-2 ms-2" />
                    </div>
                    <div className='col-md-4'>
                        <img className='lockimg' src='img/reliability-timer-blue.SVG' alt="" />
                        <span className='p-2'>Reliability</span>
                        <p className='p-2'>Load balancing, DNS,
                            <br /> virtual backbone.</p>
                        <span className='blog p-2 '>Learn more</span><i className="fa-solid fa-greater-than mt-2 ms-2" />
                    </div>


                </div>

            </div>
        </>
    );
}

export default ProtectInfra;