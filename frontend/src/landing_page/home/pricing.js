import React from 'react';

function Pricing() {
    return (
        <div className='container py-4'>
            <div className='row flex-column flex-md-row align-items-start'>
                {/* Left Section */}
                <div className='col-12 col-md-4 mb-4'>
                    <h1 className='mb-3 text-center text-md-start'>Unbeatable pricing</h1>
                    <p className='text-muted text-center text-md-start'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <div className='text-center text-md-start'>
                        <a href='' className='btn btn-link px-0' style={{textDecoration:"none"}}>
                            See pricing <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>

                {/* Spacer Column on md+ screens */}
                <div className='d-none d-md-block col-md-2'></div>

                {/* Right Section with Pricing Details */}
                <div className='col-12 col-md-6 mb-4'>
                    <div className='row g-3 text-center'>
                        <div className='col-12 col-sm-6 p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery<br />+ direct mutual funds</p>
                        </div>
                        <div className='col-12 col-sm-6 p-3 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
