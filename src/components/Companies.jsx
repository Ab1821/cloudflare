import React, { useState } from 'react';
import CompaniesAPI from './API/CompaniesAPI';
function Companies(props) {
    const [company, setCompany] = useState(CompaniesAPI);
    return (
        <>
            <div className="container text-center mt-5 mycompany">
                <div className="row d-flex mt-5 companies">
                    <h3>30% of Fortune 1000 companies rely on Cloudflare</h3>
                    {company.map((res) =>
                        <img src={res.img} alt="img" />
                    )}
                    <h6 className='blog mt-4'>View case studies<i class="fa-solid fa-greater-than ms-2" /></h6>

                </div>
            </div>

        </>
    );
}

export default Companies;