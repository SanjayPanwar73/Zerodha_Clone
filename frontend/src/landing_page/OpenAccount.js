import React from "react";
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-4">Open a Zerodha account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 px-4 py-2"
            style={{ maxWidth: "250px", width: "100%" }}
            // onClick={() => navigate("/signup")}
            onClick={() => {
              navigate("/signup");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
