import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";

function Signin(props) {
  const [Email, setEmail] = useState("");

  const [Emailerror, setEmailerror] = useState("");
  const [Password, setPassword] = useState("");

  const [Passworderror, setPassworderror] = useState("");
  const [signInError, setsignInError] = useState("");
  let historyNew = useHistory();
  const deviprapurna18 = (event) => {
    console.log(event.target.value);

    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    console.log(event.target.value);

    setPassword(event.target.value);
  };
  const mss = () => {
    let isSign = true;

    if (Email === "") {
      isSign = false;
      console.log("Email should not be empty");
      setEmailerror("Email should not be empty");
    }

    if (Password === "") {
      isSign = false;
      console.log("Password should not be empty");
      setPassworderror("Password should not be empty");
    }
    if (
      isSign === true &&
      props.userDetails &&
      Email === props.userDetails.Email &&
      Password === props.userDetails.Password
    ) {
      setsignInError("");
      historyNew.push("/Home");
    } else {
      setsignInError("Sign in details are incorrect");
    }
  };

  const handleBlurEmail = () => {
    if (Email === "") {
      console.log("Email should not be empty");
      setEmailerror("Email should not be empty");
    } else {
      setEmailerror("");
    }
  };
  const handleBlurPassword = () => {
    if (Password === "") {
      console.log("Email should not be empty");
      setPassworderror("Email should not be empty");
    } else {
      setPassworderror("");
    }
  };

  return (
    <div className="signin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7 left-side-container-signin">
            <center>
              <h1 className="text">LEARNING PORTAL</h1>
            </center>
          </div>
          <div className="col-sm-5">
            <br></br>
            <br></br>
            <br></br>
            <div class="form-group">
              <input
                onChange={deviprapurna18}
                onBlur={handleBlurEmail}
                type="email"
                class="form-control"
                placeholder=" Email"
                id="email"
              />

              <p className="error-msg">{Emailerror}</p>
            </div>
            <div class="form-group">
              <input
                onChange={handlePassword}
                onBlur={handleBlurPassword}
                type="password"
                class="form-control"
                placeholder=" Password"
                id="pwd"
              />

              <p className="error-msg">{Passworderror}</p>
            </div>
            <p className="error-msg">{signInError}</p>
            <button onClick={mss} type="Signin" class="btn btn-primary">
              Signin
            </button>
            <Link to="Forgetpassword">
              <p>Forget Password?</p>
            </Link>
            <span>Don't have an account?</span> &nbsp;
            <span>
              <Link to="SignUp">SignUp</Link>
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
