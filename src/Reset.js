import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Reset.css';


function Reset(){
    const [Email, setEmail] = useState("")
    const [Emailerror, setEmailerror] = useState("")

    const [NewPassword, setNewPassword] = useState("")


    const [NewPassworderror, setNewPassworderror] = useState("")
    const [RepeatPassword, setRepeatPassword] = useState("")
  
  
    const [RepeatPassworderror, setRepeatPassworderror] = useState("")
const handleClick = ()=>{
    if (Email === "") {
        console.log("Email should not be empty")
        setEmailerror("Email should not be empty")

        if (NewPassword !== RepeatPassword) {
            setNewPassworderror("Password and NewPassword should be same")
    }
}
}
const deviprapurna18 = (event) => {
    console.log(event.target.value);

    setEmail(event.target.value);
  }
  const handleNewPassword = (event) => {
    console.log(event.target.value);

    setNewPassword(event.target.value);
  }
  const handleRepeatPassword = (event) => {
    console.log(event.target.value);

    setRepeatPassword(event.target.value);
  }
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm-5">

<form action="/action_page.php">

<h1>Reset Password</h1>

<div className="form-group">
    
        <input onChange={handleNewPassword} type="password" className="form-control" placeholder=" NewPassword" id="pwd" />
        <p className="error-msg">{NewPassworderror}</p>

      </div>
      <div className="form-group">

        <input onChange={handleRepeatPassword} type="password" className="form-control" placeholder="Repeat-password" id="rtpw" />
        <p className="error-msg">{RepeatPassworderror}</p>
</div>
<Link to="Reset"><button type="Submit" class="btn btn-primary">Submit</button></Link>

</form>

        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6 left-side-container-forgetPassword">
            <div className="img">

            </div>

        </div>
        </div>
        </div>
    )
}
export default Reset