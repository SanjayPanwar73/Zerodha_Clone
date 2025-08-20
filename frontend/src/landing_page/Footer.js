import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}} >
    <div className="container border-top mt-5" >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5 gy-4">
        <div className="col text-center text-md-start">
          <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo"></img>
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
        </div>
        <div className="col text-center text-md-start">
         <p><strong>Company</strong></p>
          <a href="" style={{textDecoration:"none"}} className="text-muted">About</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Products</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Pricing</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Referral programm </a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted"> Careers</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Zerodha.tech</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Press & media</a>
          <br />
          <a href=""style={{textDecoration:"none"}} className="text-muted">Zerodha Cares (CSR)</a>
          <br />
        </div>
        <div className="col text-center text-md-start">
         <p><strong>Support</strong></p>
          <a href="" style={{textDecoration:"none"}} className="text-muted">Contant</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Support portal</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Z-Connect</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">List of charges</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Downloads & resources</a>
          <br />
        </div>
        <div className="col text-center text-md-start">
         <p><strong>Account</strong></p>
          <a href="" style={{textDecoration:"none"}} className="text-muted">Open an account</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">Fund transfer</a>
          <br />
          <a href="" style={{textDecoration:"none"}} className="text-muted">60 day challenge</a>
          <br />
        </div>
      </div>

      <div className="mt-5 text-muted" style={{fontSize:"14px"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to <a href="" style={{textDecoration:"none"}}>complaints@zerodha.com</a>,
        for DP related to <a href="" style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on <a href="" style={{textDecoration:"none"}}> SEBI SCORES</a>: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>

      <a href="" style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>


      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please <a href="" style={{textDecoration:"none"}}>create a ticket here.</a>
      </p>
      </div>

     <div className="footer-graveyard-links text-center mb-2" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
  <ul className="d-flex justify-content-center flex-wrap gap-2 list-unstyled" style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "10px", flexWrap: "wrap"}}>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">NSE</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">BSE</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">MCX</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">Terms & Conditions</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">Policies & Procedures</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">Privacy Policy</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">Disclosure</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">For Investor's Attention</a></li>
    <li><a style={{textDecoration:"none"}} className="text-muted" href="">Investor Charter</a></li>
  </ul>
</div>

    </div>
      </footer>

  );
}

export default Footer;
