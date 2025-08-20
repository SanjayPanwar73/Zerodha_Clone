import React from 'react';

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row flex-column flex-md-row'>
                {/* Left Section */}
                <div className='col-12 col-md-6 p-4'>
                    <h1 className='fs-2 mb-4 text-center text-md-start'>Trust with confidence</h1>

                    <h2 className='fs-4 text-center text-md-start'>Customer-first always</h2>
                    <p className='text-muted text-center text-md-start'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className='fs-4 text-center text-md-start'>No spam or gimmicks</h2>
                    <p className='text-muted text-center text-md-start'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>

                    <h2 className='fs-4 text-center text-md-start'>The Zerodha universe</h2>
                    <p className='text-muted text-center text-md-start'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className='fs-4 text-center text-md-start'>Do better with money</h2>
                    <p className='text-muted text-center text-md-start'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Right Section */}
                <div className='col-12 col-md-6 p-4 d-flex flex-column justify-content-center align-items-center'>
                    <img
                        src='media/images/ecosystem.png'
                        className='img-fluid mb-4'
                        alt='Zerodha Ecosystem'
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='d-flex flex-column flex-sm-row justify-content-center gap-3'>
                        <a href='' className='btn  text-nowrap'>
                            Explore our products <i className='fa fa-long-arrow-right' aria-hidden="true"></i>
                        </a>
                        <a href='' className='btn  text-nowrap'>
                            Try Kite <i className='fa fa-long-arrow-right' aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
