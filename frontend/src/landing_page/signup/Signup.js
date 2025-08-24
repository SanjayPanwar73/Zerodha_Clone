import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import OpenAccount from "../OpenAccount";
const API = import.meta.env.VITE_API_URL;

function Signup() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "username") setUsername(value);
    else setPassword(value);
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      handleError("All fields are required");
      return;
    }

    try {
      // const { data } = await axios.post(
      //   "https://zerodha-clone-fnnn.onrender.com/api/signup",
      //   { email, username, password },
      //   {
      //     withCredentials: true,
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      const { data } = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/signup`,
  { email, username, password },
  {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  }
);

      const { success, message, redirectTo } = data;

      if (success && redirectTo) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = redirectTo;
        }, 1500);
      } else {
        handleError(message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      handleError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="container" style={{ marginTop: "11rem" }}>
      {/* Header */}
      <div className="text-center" style={{ marginBottom: "5.5rem" }}>
        <h1 className="fs-1">Open a free demat and trading account online</h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      

<div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-5">
  {/* Image First on Mobile */}
  <div className="order-1 order-md-1 mb-4 mb-md-0 text-center" style={{ width: "100%", maxWidth: "500px", paddingRight: "2rem" }}>
    <img
      src="media/images/signup.png"
      className="img-fluid"
      alt="Signup"
      style={{ width: "100%", height: "auto" }}
    />
  </div>

  {/* Form Second on Mobile */}
  <div className="order-2 order-md-2 " style={{ width: "100%", maxWidth: "500px" }}>
    <div className="form_container px-3">
      <h2 className="pb-2 mb-4 border-bottom border-dark w-fit-content">
        Signup Now
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
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
            className="form-control"
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
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Submit
        </button>
        <span style={{ fontSize: "small" }}>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  </div>
</div>


     

{/* Investment Options Header */}
<h1 className="text-center my-5" style={{ marginTop: "5.5rem", marginBottom: "5.5rem" }}>
  Investment options with Zerodha demat account
</h1>

{/* First Row: Stocks & Mutual Funds */}
<div className="row justify-content-center mb-5">
  {/* Stocks */}
  <div className="col-12 col-md-5 mb-4 d-flex flex-column align-items-center text-center">
    <img src="media/images/stocks-acop.svg" className="img-fluid mb-3" alt="Stocks" />
    <h3>Stocks</h3>
    <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
      Invest in all exchange-listed securities
    </p>
  </div>

  {/* Mutual Funds */}
  <div className="col-12 col-md-5 mb-4 d-flex flex-column align-items-center text-center">
    <img src="media/images/mf-acop.svg" className="img-fluid mb-3" alt="Mutual Funds" />
    <h3>Mutual funds</h3>
    <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
      Invest in commission-free direct mutual funds
    </p>
  </div>
</div>

{/* Second Row: IPO & F&O */}
<div className="row justify-content-center mb-5">
  {/* IPO */}
  <div className="col-12 col-md-5 mb-4 d-flex flex-column align-items-center text-center">
    <img src="media/images/ipo-acop.svg" className="img-fluid mb-3" alt="IPO" />
    <h3>IPO</h3>
    <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
      Apply to the latest IPOs instantly via UPI
    </p>
  </div>

  {/* F&O */}
  <div className="col-12 col-md-5 mb-4 d-flex flex-column align-items-center text-center">
    <img src="media/images/fo-acop.svg" className="img-fluid mb-3" alt="F&O" />
    <h3>Futures & options</h3>
    <p style={{ maxWidth: "250px", lineHeight: "1.7" }}>
      Hedge and mitigate market risk through simplified F&O trading
    </p>
  </div>
</div>

      <OpenAccount />
    </div>
  );
}

export default Signup;
