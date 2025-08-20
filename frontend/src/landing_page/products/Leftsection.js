import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className='container mt-5'>
      <div className='row p-3 p-md-5'>
        {/* Image First on Small Screens */}
        <div className='col-12 col-md-6 p-3 order-1 order-md-1'>
          <img
            src={imageURL}
            alt={productName}
            className='img-fluid w-100'
            style={{ objectFit: 'contain', maxHeight: '300px' }}
          />
        </div>

        {/* Text Second on Small Screens */}
        <div className='col-12 col-md-6 p-3 mt-4 mt-md-5 order-2 order-md-2 text-center text-md-start'>
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          {/* Demo and Learn More Links */}
          <div className='d-flex justify-content-center justify-content-md-start gap-3 mt-3 flex-wrap'>
            <a href={tryDemo} className='btn btn-outline-primary'>
              Try Demo
            </a>
            <a href={learnMore} className='btn btn-outline-secondary'>
              Learn More
            </a>
          </div>

          {/* App Store Badges */}
          <div className='d-flex justify-content-center justify-content-md-start align-items-center mt-4 flex-wrap gap-4'>
            <a href={googlePlay}>
              <img
                src='media/images/googlePlayBadge.svg'
                alt='Google Play'
                className='img-fluid'
                style={{ maxHeight: '50px' }}
              />
            </a>
            <a href={appStore}>
              <img
                src='media/images/appstoreBadge.svg'
                alt='App Store'
                className='img-fluid'
                style={{ maxHeight: '50px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
