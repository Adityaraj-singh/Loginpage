import React, { useEffect, useState } from "react";
import "./Signup.css";
import image from "../../Public/background.jpg";
import jiraLogo from "../../Public/jiraLogo.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useDeviceType from "../../utils/hooks";
import axios from "axios";
const SignUp = () => {
  const [isMobile] = useDeviceType();
  const navigate = useNavigate();
  const screenHeight = window.innerHeight;
  const [passwordType, setPasswordType] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  /*   useEffect(() => {
    console.log(name, email, password, company);
  }); */

  useEffect(() => {
    setError("");
  }, [email, name, password, phone, company]);

  const togglePassword = () => {
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const onsubmit = async () => {
    if (email && name && password && company && phone) {
      const response = await axios.post(
        "https://snapkaro.com/eazyrooms_staging/api/user_registeration ",
        {
          user_firstname: name,
          user_email: email,
          user_phone: phone,
          user_city: "",
          user_lastname: "asasas",
          user_password: password,
          user_zipcode: "462003",
        }
      );
      console.log(response);
      if (response.data.msg == "Registered Successfully") {
        console.log(response);
        localStorage.setItem("userName", name);
        localStorage.setItem("userId", response.data.registeredID);
        localStorage.setItem("email", email);
        navigate("/home");
      } else {
        setError(response.data.msg);
      }
    } else {
      setError("Please Check all the fields");
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
        }}
      >
        <div>
          <img src={jiraLogo} height={"32px"} />
        </div>
        <div className="form">
          <div className="form-heading">Sign up</div>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <div className="signup-link">
              Already have an account{" "}
              <a href="" style={{ textDecoration: "none", color: "blue" }}>
                Sign in
              </a>
            </div>
          </Link>

          <div className="inner-form">
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Full name *
              </label>
              <input
                type={"text"}
                onChange={(e) => setName(e.target.value)}
                className="inputfield"
              />
            </div>
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Email Address *
              </label>
              <input
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
                className="inputfield"
              />
            </div>

            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Phone
              </label>
              <input
                type={"email"}
                onChange={(e) => setPhone(e.target.value)}
                className="inputfield"
              />
            </div>
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Password *
              </label>
              <input
                type={passwordType}
                onChange={(e) => setPassword(e.target.value)}
                className="inputfield"
              />
              <div
                style={{
                  position: "relative",
                  top: "-32px",
                  left: "94%",
                  cursor: "pointer",
                }}
                onClick={() => togglePassword()}
              >
                {passwordType == "password" ? (
                  <BsEyeFill color="gray" />
                ) : (
                  <BsEyeSlashFill color="gray" />
                )}
              </div>
            </div>
            <div className="inputs-field">
              <label style={{ color: "gray", alignItems: "flex-start" }}>
                Company
              </label>
              <input
                type={"textarea"}
                onChange={(e) => setCompany(e.target.value)}
                className="inputfield"
              />
            </div>
            <div className="form-bottom">
              <div className="form-bottom-left">
                {" "}
                <input
                  type="checkbox"
                  value={"remember me"}
                  style={{ marginRight: "5px" }}
                />
                <div
                  style={{
                    width: "auto",
                    textAlign: "left",
                    marginLeft: "8x",
                    position: "relative",
                    top: "10px",
                  }}
                >
                  I agree to the
                  <a href="" style={{ textDecoration: "none", color: "blue" }}>
                    {" "}
                    terms and services
                  </a>{" "}
                  and{" "}
                  <a style={{ textDecoration: "none", color: "blue" }}>
                    Privacy policy
                  </a>
                </div>
              </div>
            </div>
            {error ? (
              <div
                style={{
                  fontSize: "14px",
                  backgroundColor: "#F08080",
                  borderRadius: "10px",
                  padding: "8px 0 5px 0",
                  marginTop: "20px",
                  color: "White",
                  height: "28px",
                  width: "100%",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {error}
              </div>
            ) : null}
            <div className="form-button">
              <button onClick={onsubmit} className="submit-button">
                Create your free account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
