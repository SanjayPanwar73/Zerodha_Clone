import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row mt-5 p-4 border-bottom text-center">
        <div className="col-12 mb-5">
          <h1 className="text-muted fs-2 fw-semibold mt-5">Charges</h1>
          <h3 className="text-muted mt-4 fs-5">List of all charges and taxes</h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row mt-5 gy-4 text-center">
        {/* Equity Delivery */}
        <div className="col-12 col-md-4">
          <img src="media/images/pricingEquity.svg" className="img-fluid mb-3" alt="Equity" />
          <h2 className="fs-5 fw-semibold">Free equity delivery</h2>
          <p className="text-muted px-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Intraday Trades */}
        <div className="col-12 col-md-4">
          <img src="media/images/intradayTrades.svg" className="img-fluid mb-3" alt="Intraday" />
          <h2 className="fs-5 fw-semibold">Intraday and F&O trades</h2>
          <p className="text-muted px-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-12 col-md-4">
          <img src="media/images/pricingMF.svg" className="img-fluid mb-3" alt="Mutual Funds" />
          <h2 className="fs-5 fw-semibold">Free direct MF</h2>
          <p className="text-muted px-3">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
