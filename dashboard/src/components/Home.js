
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {

      try {
      const res = await axios.post(
        "http://localhost:3001/api/verify-user",
        {},
        {
          withCredentials: true, // Send cookies
          headers: {
            'Content-Type': 'application/json'
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
        console.error("User verification failed:",  err.response?.data || err.message || err);
        toast.error("User verification failed. Please log in again.", { position: "bottom-left" });
        localStorage.removeItem("token");
        navigate("/");
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
