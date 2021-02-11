import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Security.css";

function Security() {
  const [Email, setEmail] = useState("");
  const [Emailerror, setEmailerror] = useState("");

  const [NewPassword, setNewPassword] = useState("");

  const [NewPassworderror, setNewPassworderror] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");

  const [RepeatPassworderror, setRepeatPassworderror] = useState("");
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
  return (
    <div className="row">
      <div className="col">
        <div class="form-group">
          <div class="form-group">
            <br />
            <br />
            <label for="sel1">
              <h1>Security question</h1>
            </label>
            <select class="form-control" id="sel1">
              <option>who is your favourite hero?</option>
              <option>what is your favourite food?</option>
              <option>whats your 1st school?</option>
              <option>what is your native place?</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder=" Security Answer"
              id="SQ"
            />
          </div>
        </div>
        <Link to="Reset">
          <button type="Submit" class="btn btn-primary">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Security;
