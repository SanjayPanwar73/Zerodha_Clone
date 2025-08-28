import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API = process.env.REACT_APP_API_URL;


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

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
      // 3. Redirect to frontend login route. Prefer backend-provided redirectTo.
      const redirectTo = res?.data?.redirectTo;
      setTimeout(() => {
        // If backend returns an absolute URL, follow it. Otherwise use client-side navigation
        if (redirectTo && (redirectTo.startsWith('http://') || redirectTo.startsWith('https://'))) {
          try {
            // Convert absolute path to a hash-based URL so static hosts that don't
            // rewrite SPA routes will still load index.html and the client router.
            const u = new URL(redirectTo);
            const hashPath = u.pathname + u.search + u.hash;
            window.location.href = `${u.origin}/#${hashPath}`;
          } catch (e) {
            window.location.href = redirectTo;
          }
        } else {
          // Use react-router navigation for internal routes (or fallback to '/login')
          navigate(redirectTo || "/login");
        }
      }, 1000);
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: if backend returned a redirect URL in the error response, use it
      const redirectTo = error?.response?.data?.redirectTo;
      if (redirectTo && (redirectTo.startsWith('http://') || redirectTo.startsWith('https://'))) {
        try {
          const u = new URL(redirectTo);
          const hashPath = u.pathname + u.search + u.hash;
          window.location.href = `${u.origin}/#${hashPath}`;
        } catch (e) {
          window.location.href = redirectTo;
        }
      } else {
        // Prefer client-side navigation for internal routes
        navigate(redirectTo || "/login");
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