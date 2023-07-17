import React from 'react';

function WhyCloudflare(props) {
    return (
        <>
            <div className="container mt-5 whycloudflare ">
                <div className="row">
                    <div className="col-md-6 align-items-center ">
                        <h3>Why Cloudflare?</h3>
                        <p className="body">
                            <strong>Unified Networking and Security Platform</strong><br />
                            'Cloudflare’s fully cloud native platform improves the security
                            and performance of applications, employees, and networks.
                            This reduces complexity, cost and attack surface while improving security posture.'

                        </p>
                        <p className="body">
                            <strong>Global Scale Network and Data</strong><br />
                            'Cloudflare protects about 20% of all websites. The scale and
                            variety of our user base, traffic volume, and  data sources,
                            deliver deep real-time context on the threat environment.'
                        </p>
                        <p className="body">
                            <strong>Fully Programmable Network</strong><br />
                            'Cloudflare’s intelligent global network is fully programmable,
                            so you can handle tricky use cases and complex requirements with
                            a few API calls. This means you can respond faster to changing business needs.'
                        </p>
                    </div>
                    <div className="col-md-6 imgwhycloud">
                        {/* <video
                            src="/video/whycloudflare.mp4" alt="video/mp4" type="video/mp4" className='video mt-3 p-2 controls'   >
                        </video> */}
                        <video src="/video/whycloudflare.mp4" width="640" height="480" controls></video>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyCloudflare;