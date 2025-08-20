import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore
}) {
  return (
    <div className='container mt-5'>
      <div className='row p-3 p-md-5'>
        {/* Image First on Small Screens */}
        <div className='col-12 col-md-6 p-3 order-1 order-md-2'>
          <img
            src={imageURL}
            alt={productName}
            className='img-fluid w-100'
            style={{ objectFit: 'contain', maxHeight: '300px' }}
          />
        </div>

        {/* Text Second on Small Screens */}
        <div className='col-12 col-md-6 p-3 mt-4 mt-md-5 order-2 order-md-1 text-center text-md-start'>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className='d-flex justify-content-center justify-content-md-start gap-3 mt-3'>
            {tryDemo && (
              <a href={tryDemo} className='btn btn-outline-primary'>
                Try Demo
              </a>
            )}
            <a href={learnMore} className='btn btn-outline-secondary'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
