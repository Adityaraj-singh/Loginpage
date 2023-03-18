import React, { useEffect } from "react";
import { Navigate, RedirectFunction } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/login");
    }
  }, []);

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  return (
    <div
      className="container"
      style={{ width: "100%", height: `${window.innerHeight}px` }}
    >
      <div className="nav-bar">
        <div className="logo">Soyft</div>
        <div className="name">{email}</div>
        <div className="logout">
          <button className="logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
