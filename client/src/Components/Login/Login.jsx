import React, { useEffect, useState } from "react";
import "./Login.css";
import image from "../../Public/background.jpg";
import jiraLogo from "../../Public/jiraLogo.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import useDeviceType from "../../utils/hooks";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [isMobile] = useDeviceType();
  const screenHeight = window.innerHeight;
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailerror] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [apiFailerror, setApifailError] = useState("");
  const [isApiLoading, setIsApiLoading] = useState(false);
  const setEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const setPasswordValue = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEmailerror("");
    setPasswordError("");
    setApifailError("");
  }, [email, password]);

  const onsubmit = async () => {
    if (!email) {
      setEmailerror("Email cannot be empty");
    }
    if (!password) {
      setPasswordError("Password cannot be empty");
    }
    if (password && email) {
      setIsApiLoading(true);
      const response = await axios.post(
        "https://snapkaro.com/eazyrooms_staging/api/userlogin ",
        {
          user_email: email,
          user_password: password,
        }
      );
      if (response.data.msg == "User found") {
        setIsApiLoading(false);
        console.log(response.data.user_data[0]);
        localStorage.setItem("userId", response.data.user_data[0].user_id);
        localStorage.setItem(
          "userName",
          response.data.user_data[0].user_lastname
        );

        localStorage.setItem("email", response.data.user_data[0].user_email);
        navigate("/home");
      } else {
        setIsApiLoading(false);
        setApifailError(response.data.msg);
      }
    }
  };

  const togglePassword = () => {
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  return (
    <div className="container" style={{ height: `${screenHeight}px` }}>
      {!isMobile ? (
        <div
          className="left-box"
          style={{
            width: "60%",
            backgroundImage: `url(${image})`,
            height: `100%`,

            justifyContent: "center",
          }}
        >
          <div className="inner-left-container">
            <div className="inner-left-heading">Welcome to our community</div>
            <div className="inner-left-description">
              Lorem ipsum, in graphical and textual context, refers to filler
              text that is placed in a document or visual presentation. Lorem
              ipsum is derived from the Latin "dolorem ipsum" roughly translated
              as "pain itself.
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="form-box"
        style={{
          width: `${isMobile ? "100%" : "40%"}`,
          alignItems: `${isMobile ? "center" : "flex-start"}`,
          top: `${isMobile ? "0%" : "10%"}`,
        }}
      >
        <div>
          <img src={jiraLogo} height={"32px"} />
        </div>
        <div className="form">
          <div className="form-heading">Sign in</div>
          <Link to="/signup" style={{ color: "black", textDecoration: "none" }}>
            {" "}
            <div className="signup-link">
              Don't have an account <a href="asa">Sign up</a>
            </div>
          </Link>

          <div className="inner-form">
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Email Address *
              </label>
              <input
                type={"email"}
                className="inputfield"
                onChange={setEmailValue}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {emailError}
              </span>
            </div>
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Password *
              </label>
              <input
                type={passwordType}
                onChange={setPasswordValue}
                className="inputfield"
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {passworderror}
              </span>
              <div
                style={{ position: "relative", top: "-32px", left: "300px" }}
                onClick={() => togglePassword()}
              >
                {passwordType == "password" ? (
                  <BsEyeFill color="gray" />
                ) : (
                  <BsEyeSlashFill color="gray" />
                )}
              </div>
            </div>
            <div className="form-bottom">
              <div className="form-bottom-left">
                {" "}
                <input type="checkbox" value={"remember me"} />
                <label>Remember me</label>
              </div>
              <div className="form-bottom-right">Forgot Password?</div>
            </div>

            <div className="form-button">
              <button
                onClick={() => onsubmit()}
                type="submit"
                className="submit-button"
                style={{ cursor: "pointer", alignItems: "center" }}
              >
                {isApiLoading ? (
                  <div
                    class="loader"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  ></div>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                color: "red",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {apiFailerror}
            </div>
            <div className="bottom-text">
              <div className="line-one"></div>
              <div className="bottom-text-div">or continue with</div>
              <div className="line-one"></div>
            </div>
            <div className="socialmedia">
              <div className="media-card">
                <FiFacebook color="gray" size={20} />
              </div>
              <div className="media-card">
                <CiTwitter color="gray" size={20} />
              </div>
              <div className="media-card">
                <AiFillGithub color="gray" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
