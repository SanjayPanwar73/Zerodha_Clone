import React from 'react';

function CreateTicket() {
  return (
    <div className="container-fluid">
      <div className="row p-3 mt-5 mb-5">
        <h1 className="fs-2 text-center mb-4">
          To create a ticket, select a relevant topic.
        </h1>

        {/* Account Opening */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual</a>
            <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Minor</a>
            <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a>
            <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a>
            <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Glossary</a>
          </div>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}} >Account modification</a>
            <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
            <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a>
            <a href=""  style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</a>
          </div>
        </div>

        {/* Kite */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Kite
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a>
          </div>
        </div>

        {/* Funds */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-inr" aria-hidden="true"></i> Funds
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add money</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a>
          </div>
        </div>

        {/* Console */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-circle-o-notch" aria-hidden="true"></i> Console
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Segments</a>
          </div>
        </div>
 
        {/* Coin */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4 className="fs-4 text-center mb-3">
            <i className="fa fa-circle-o" aria-hidden="true"></i> Coin
          </h4>
          <div className="d-grid gap-2 text-center">
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual funds</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Fixed Deposit (FD)</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Features on Coin</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Payments and Orders</a>
            <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
