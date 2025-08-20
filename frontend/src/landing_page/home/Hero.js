import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
        const navigate = useNavigate();
    return (
        <div className='container py-5 mb-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-10 mt-5'>
                    <img 
                        src='media/images/homeHero.png' 
                        alt='Hero Image' 
                        className='img-fluid mb-4'
                    />

                    <h1 className='mt-4'>Invest in everything</h1>
                    <p className='mb-4'>
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>
                    <button 
                        className='btn btn-primary fs-5 px-4 py-2' 
                        style={{ maxWidth: '12rem', width: '100%' }}
                        onClick={() => navigate("/signup")}
                       
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
