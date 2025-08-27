import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API = process.env.REACT_APP_API_URL;


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [removeCookie] = useCookies(["token"]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdown(!isProfileDropdown);
  }

  const handleLogout = async () => {
    try {
      // 1. Call backend logout endpoint to clear the HTTP-only cookie
      const res = await axios.post(
        `${API}/api/logout`,
        {},
        { withCredentials: true }
      );
      // 2. Clear any client-side storage (optional cleanup)
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      toast.success("Logged out successfully", {
        position: "bottom-left",
      });
      // 3. Redirect to frontend login page. Prefer backend-provided absolute URL.
      const redirectTo = res?.data?.redirectTo;
      setTimeout(() => {
        const preferred = "https://zerodha-clone-frontend-clmm.onrender.com/login";
        if (redirectTo && (redirectTo.startsWith('http://') || redirectTo.startsWith('https://'))) {
          window.location.href = redirectTo;
        } else if (redirectTo) {
          // Relative redirect provided by backend
          window.location.href = `${window.location.origin}${redirectTo}`;
        } else {
          // Fallback: redirect to the requested absolute frontend login host
          window.location.href = preferred;
        }
      }, 1000);
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: if backend returned a redirect URL in the error response, use it
      const redirectTo = error?.response?.data?.redirectTo;
      const preferred = "https://zerodha-clone-frontend-clmm.onrender.com/login";
      if (redirectTo && (redirectTo.startsWith('http://') || redirectTo.startsWith('https://'))) {
        window.location.href = redirectTo;
      } else if (redirectTo) {
        window.location.href = `${window.location.origin}${redirectTo}`;
      } else {
        // Default fallback: requested absolute frontend login host
        window.location.href = preferred;
      }
    }
  };

  const menuClass = "menu";
  const menuSelectedClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu === 0 ? menuSelectedClass : menuClass}>Dashboard</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/orders" onClick={() => handleMenuClick(1)}>
            <p className={selectedMenu === 1 ? menuSelectedClass : menuClass}>Orders</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu === 2 ? menuSelectedClass : menuClass}>Holdings</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/positions" onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu === 3 ? menuSelectedClass : menuClass}>Positions</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu === 4 ? menuSelectedClass : menuClass}>Funds</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu === 5 ? menuSelectedClass : menuClass}>Apps</p>
            </Link>
          </li>
          <li>
            <p style={{textDecoration: "none", cursor: "pointer"}} onClick={handleLogout} className={selectedMenu === 6 ? menuSelectedClass : menuClass}>Logout</p>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;