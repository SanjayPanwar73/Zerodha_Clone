
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


const Home = () => {
  const [username, setUsername] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.post(
          `${API}/api/verify-user`,
          {},
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Authorization: token ? `Bearer ${token}` : undefined
            }
          }
        );
        if (res.data.status && !hasWelcomed) {
          toast.info(`Welcome to Dashboard!`, {
            position: "bottom-left",
            icon: false,
          });
          setHasWelcomed(true);
          setUsername(res.data.username);
        }
      } catch (err) {
        // Handle backend redirect on token expiry/invalid
        const redirectTo = err.response?.data?.redirectTo;
        localStorage.removeItem("token");
        // Prevent reload loop: only redirect if not already on login page
        if (!window.location.pathname.includes("login")) {
          toast.error("Session expired. Please log in again.", { position: "bottom-left" });
          navigate("/login");
        }
      }
    };
    verifyCookie();
  }, [hasWelcomed, navigate]);
  

  return (
    <>
      <TopBar />
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;
