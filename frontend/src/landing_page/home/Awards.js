import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row flex-column flex-md-row'>
                <div className='col-12 col-md-6 p-3 d-flex justify-content-center align-items-center'>
                    <img src='media/images/largestBroker.svg' className='img-fluid' alt='Largest Broker' />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <h1 className='text-center text-md-start'>Largest stock broker in India</h1>
                    <p className='mb-4 text-center text-md-start'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-12 col-sm-6 mb-3'>
                            <ul className='ps-3'>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-6 mb-3'>
                            <ul className='ps-3'>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src='media/images/pressLogos.png' className='img-fluid' style={{ maxWidth: '90%' }} alt='Press Logos' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
