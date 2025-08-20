import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-4 p-5 mt-5" id="supportHero">
      {/* Top Support Header */}
      <div className="rounded p-3 mb-4 flex-column d-flex flex-md-row align-items-center justify-content-md-between">
        <div className="d-flex justify-content-start w-100 w-md-auto ms-4">
          <h4 className="mb-2  mb-md-0 ">Support Portal</h4>
        </div>
        <div className="d-flex justify-content-start w-100 w-md-auto">
          <a href="" className="">
            Track Tickets
          </a>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="row px-3 px-md-5 gy-4 gx-md-5">
        {/* Left Column: Help Topics */}
        <div className="col-12 col-md-6">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control mb-3"
            placeholder="Eg: how I activate F&O, why is my order getting rejected.."
          />
          <div className="d-flex flex-wrap gap-2">
            <a href="">Track account opening</a>
            <a href="">Track Segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* Right Column: Features */}
        <div className="col-12 col-md-6 text-start my-4">
          <h1 className="fs-4 mb-3">Features</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mb-2">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
