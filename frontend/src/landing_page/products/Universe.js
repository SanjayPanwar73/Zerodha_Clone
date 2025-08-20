import React from "react";
import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Streak */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* GoldenPi */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid w-100"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted text-small mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        {/* Signup Button */}
        <div className="col-12 d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary fs-5 px-4 py-2 w-100 w-md-auto"
            style={{ maxWidth: "12rem" }}
            // onClick={() => navigate("/signup")}
            onClick={() => {
              navigate("/signup");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
