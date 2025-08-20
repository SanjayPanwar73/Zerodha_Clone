import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 text-center border-top gy-4">
        {/* Left Column */}
        <div className="col-12 col-lg-8 text-start px-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 fw-semibold">Brokerage Calculator</h3>
          </a>
          <ul className="text-muted mt-3" style={{ lineHeight: "2", fontSize: "14px" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, will be charged ₹20 per note. Courier charges apply.</li>
            <li>For NRI account (non-PIS): 0.5% or ₹100 per executed equity order (whichever is lower).</li>
            <li>For NRI account (PIS): 0.5% or ₹200 per executed equity order (whichever is lower).</li>
            <li>If the account has a debit balance, orders will be charged ₹40 per executed order instead of ₹20.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-4 px-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 fw-semibold">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
