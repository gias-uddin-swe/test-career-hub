/* eslint-disable no-unused-vars */
import React from "react";

import "../Login/Login.css";
import { useContext } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(" eight characters & one letter and one number:");
      console.log("hello");
    } else {
      setError("");
      console.log("hello2");
      signUp(email, password).then((result) => console.log(result.user));
    }
  };
  return (
    <div>
      <div>
        <div className="login-container">
          <div>
            <p>{error}</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Type Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Type Password"
            />
            <button onClick={handleRegister} className="Login-btn">
              Register
            </button>
            <div className="login-btns">
              <button className="google-btn ">Google Login</button>
            </div>
          </div>
          <div className="login-img">
            <img
              src="https://i.ibb.co/JtcDXq5/undraw-Mobile-login-re-9ntv.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
