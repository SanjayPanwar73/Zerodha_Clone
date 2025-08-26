import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import OpenAccount from "../OpenAccount";

const VITE_API_URL = process.env.VITE_API_URL || "https://zerodha-clone-fnnn.onrender.com";


const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleError = (msg) =>
    toast.error(msg, {
      position: "bottom-left",
  });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {                                                                //pass email and password to backend
      const {data} = await axios.post(
        // "https://zerodha-clone-fnnn.onrender.com/api/login",
        `${VITE_API_URL}/api/login`,
         {email, password}, 
         {
        withCredentials: true,
        headers: { "Content-Type": "application/json"}
      });
          
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = data.redirectTo; // redirect to dashboard after successful login
        }, 1500);
      }
    }
    catch (error) {
      console.log(error);
      handleError("Something went wrong!");
    } 
    finally {
      setEmail("");
      setPassword("");
    }
  };



  return (
    <div className="container" style={{ marginTop: "11rem" }}>
      <div className="text-center" style={{marginBottom: "5.5rem"}}>
        <h1 className="fs-1">Open a free demat and trading account online</h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      
<div className="row justify-content-center align-items-center mb-5 gap-4">
  {/* Image Column */}
  <div className="col-12 col-md-6 text-center">
    <img
      src="media/images/account_open.svg"
      className="img-fluid"
      style={{ maxWidth: "400px" }}
      alt="Account Open"
    />
  </div>

  {/* Form Column */}
  <div className="col-12 col-md-5">
    <div className="form_container pt-4">
      <h2 className="pb-2 mb-4" style={{ width: "fit-content", borderBottom: "2px solid #424242" }}>
        Login Now
      </h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit" className="signup-btn">Submit</button><br />
        <span style={{ fontSize: "small" }}>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  </div>
</div>



      <h1 className="text-center my-5">Investment options with Zerodha demat account</h1>

{/* First Row */}
<div className="row justify-content-center gap-5 mb-5">
  <div className="col-12 col-md-5 d-flex align-items-start">
    <img src="media/images/stocks-acop.svg" className="img-fluid" style={{ maxWidth: "120px" }} />
    <div className="ms-4">
      <h3>Stocks</h3>
      <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
        Invest in all exchange-listed securities
      </p>
    </div>
  </div>

  <div className="col-12 col-md-5 d-flex align-items-start">
    <img src="media/images/mf-acop.svg" className="img-fluid" style={{ maxWidth: "120px" }} />
    <div className="ms-4">
      <h3>Mutual funds</h3>
      <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
        Invest in commission-free direct mutual funds
      </p>
    </div>
  </div>
</div>

{/* Second Row */}
<div className="row justify-content-center gap-5 mb-5">
  <div className="col-12 col-md-5 d-flex align-items-start">
    <img src="media/images/ipo-acop.svg" className="img-fluid" style={{ maxWidth: "120px" }} />
    <div className="ms-4">
      <h3>IPO</h3>
      <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
        Apply to the latest IPOs instantly via UPI
      </p>
    </div>
  </div>

  <div className="col-12 col-md-5 d-flex align-items-start">
    <img src="media/images/fo-acop.svg" className="img-fluid" style={{ maxWidth: "120px" }} />
    <div className="ms-4">
      <h3>Futures & options</h3>
      <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
        Hedge and mitigate market risk through simplified F&O trading
      </p>
    </div>
  </div>
</div>

      <OpenAccount/>
    </div>
  );
};

export default Login;



