import React, { useState } from 'react';
import ExploreProductAPI from './API/ExploreProductAPI';


function ExploreProducts(props) {
    const [ProductApi, setProductApi] = useState(ExploreProductAPI);

    return (
        <>
            <div className="container mt-5">
                <span className='whtsnew'>EXPLORE OUR PRODUCTS</span>
                <h3 className='mt-3'>The Integrated Global Cloud Network</h3>
                <div className="row mt-5 p-3">
                    {ProductApi.map((res) => {
                        return (

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className='card text-inline mt-3 p-3'>
                                    <img className='exploreimg' src={res.img} alt="finger" />
                                    <h3 className='mt-2'>{res.title}</h3>
                                    <p>{res.info}</p>
                                    <div className="row listitem">
                                        <p>
                                            {res.list.map(item => {
                                                return <li>{item}</li>
                                            })}
                                        </p>
                                    </div>
                                    {/* or-------

                                         <p className='d-flex'><i class="fa fa-arrow-right p-2" aria-hidden="true" /><p>{res.list[0]}</p></p>
                                        <p className='d-flex'><i class="fa fa-arrow-right p-2" aria-hidden="true" /><p>{res.list[1]}</p></p>
                                        <p className='d-flex'><i class="fa fa-arrow-right p-2" aria-hidden="true" /><p>{res.list[2]}</p></p>
                                        <p className='d-flex'><i class="fa fa-arrow-right p-2" aria-hidden="true" /><p>{res.list[3]}</p></p>  */}


                                    <div className='viewplans d-flex mt-2'>
                                        <h4>View Plans & Pricing</h4><i class="fa-solid fa-greater-than mt-2 ms-2" />

                                    </div>
                                    <button className='mybtn btn-primary p-2 mt-5 '>Learn More </button>

                                </div>


                            </div>
                        )
                    })}


                </div>


            </div>
        </>
    );
}

export default ExploreProducts;