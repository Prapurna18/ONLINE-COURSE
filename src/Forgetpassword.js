import React, { useState } from "react";
import Security from "./Security";
import "./Forgetpassword.css";

function Forgetpassword() {
  const [Email, setEmail] = useState("");
  const [Emailerror, setEmailerror] = useState("");

  const [NewPassword, setNewPassword] = useState("");

  const [NewPassworderror, setNewPassworderror] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");

  const [RepeatPassworderror, setRepeatPassworderror] = useState("");
  const [showSecurity, setShowSecurity] = useState(false);
  const handleClick = () => {
    if (Email === "") {
      console.log("Email should not be empty");
      setEmailerror("Email should not be empty");

      if (NewPassword !== RepeatPassword) {
        setNewPassworderror("Password and NewPassword should be same");
      }
    }
  };
  const deviprapurna18 = (event) => {
    console.log(event.target.value);

    setEmail(event.target.value);
  };
  const handleNewPassword = (event) => {
    console.log(event.target.value);

    setNewPassword(event.target.value);
  };
  const handleRepeatPassword = (event) => {
    console.log(event.target.value);

    setRepeatPassword(event.target.value);
  };
  const handleSecurityClick = () => {
    setShowSecurity(true);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-5">
          <br />
          <br />
          <h1>Forget Password</h1>

          <div class="form-group">
            <input
              onChange={deviprapurna18}
              type="Email"
              class="form-control"
              placeholder=" Email"
              id="Em"
              disabled={showSecurity}
              onBlur={handleSecurityClick}
            />
          </div>
          {/* <button
            onClick={handleSecurityClick}
            type="Submit"
            class="btn btn-primary"
          >
            Submit
          </button> */}

          {showSecurity && <Security />}
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6 left-side-container-forgetPassword">
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
}
export default Forgetpassword;
