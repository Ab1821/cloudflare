import React, { useState } from 'react';
import FooterAPI from './API/FooterAPI';

function Footer(props) {
    const [Foot, setFoot] = useState(FooterAPI);
    return (
        <>
            <div className="container-fluid  bg-black myfooter" >
                <div className="row">
                    {Foot.map((res) => {
                        // console.log(res);

                        return (
                            <div className="col-md-2 mt-5">
                                <div className="row">
                                    <h5>{res.title}</h5>
                                    <p>
                                        {res.list.map((li) => {
                                            return <dd>{li}</dd>
                                        })}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="footerbottom mt-4 p-4" >
                    <i className="fa-brands fa-facebook p-2" />
                    <i className="fa-brands fa-twitter p-2" />
                    <i className="fa-brands fa-linkedin p-2" />
                    <i className="fa-brands fa-youtube p-2" />
                    <i className="fa-brands fa-instagram p-2" />

                    <div className='bottomright'></div>


                </div>


            </div>
        </>
    );
}

export default Footer;