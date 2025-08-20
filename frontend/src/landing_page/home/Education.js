import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row flex-column flex-md-row align-items-center'>
                {/* Image Section */}
                <div className='col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0'>
                    <img 
                        src='media/images/education.svg' 
                        className='img-fluid' 
                        style={{ maxWidth: '70%' }} 
                        alt='Market Education' 
                    />
                </div>

                {/* Content Section */}
                <div className='col-12 col-md-6'>
                    <h1 className='mb-3 text-center text-md-start'>Free and open market education</h1>
                    
                    <p className='text-muted text-center text-md-start'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <div className='text-center text-md-start mb-4'>
                        <a href='' className='btn btn-link px-0' style={{textDecoration:"none"}}>
                            Varsity <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                        </a>
                    </div>

                    <p className='text-muted text-center text-md-start'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <div className='text-center text-md-start'>
                        <a href='' className='btn btn-link px-0' style={{textDecoration:"none"}}>
                            TradingQ&A <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
