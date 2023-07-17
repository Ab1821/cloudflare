import React, { useState } from 'react';
import WhatsNewAPI from './API/WhatsNewAPI'


function WhatsNew(props) {
    const [API, setAPI] = useState(WhatsNewAPI);
    return (
        <div className="container mt-5 bg-light whtsnewContainer ">
            <span className='whtsnew'>What's New</span>
            <div className="row">

                {API.map((res) => {
                    // console.log(res); 
                    return (

                        <div className="col-4 mt-4 align-items-inline">
                            <hr className='hrtag height:2px;border-width:0;color:gray;background-color:gray' />

                            <div className="row ">
                                <h3>{res.header}</h3>
                            </div>
                            <div className="row mt-2">
                                <p>{res.info}</p>
                            </div>
                            <div className="row ">
                                <span className='blog'>{res.blog}<i class="fa-solid fa-greater-than ms-2"></i></span>
                            </div>

                        </div>


                    )
                })}

            </div>
        </div>
    );
}

export default WhatsNew;