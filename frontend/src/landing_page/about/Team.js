import React from "react";

function Team() {
  return (
    <div className="container-fluid px-3">
      <div className="row p-3 mt-5 border-top">
        <div className="col-12">
        <h1 className="text-center mt-5 text-muted ">People</h1>
      </div>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 col-12 p-3 text-center">
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-md-6 col-12 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              
              TradingQnA
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
