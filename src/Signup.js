import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Link, useHistory
} from "react-router-dom";
import './Signup.css';





function Signup() {
  const [firstName, setfirstName] = useState("")

  const [firstNameerror, setfirstNameerror] = useState("")
  const [lastName, setlastName] = useState("")


  const [lastNameerror, setlastNameerror] = useState("")
  const [Email, setEmail] = useState("")


  const [Emailerror, setEmailerror] = useState("")
  const [Password, setPassword] = useState("")


  const [Passworderror, setPassworderror] = useState("")
  const [repeatPassword, setrepeatPassword] = useState("")


  const [repeatPassworderror, setrepeatPassworderror] = useState("")
  let historyNew = useHistory();





  const Prapurna = (event) => {
    console.log(event.target.value);

    setfirstName(event.target.value);
  }
  const msss = () => {
    let isSign = true
    if (firstName === "") {
      console.log("firstName should not be empty")
      setfirstNameerror("firstName should not be empty")
      isSign = false

    }

    if (lastName === "") {
      console.log("lastName should not be empty")
      setlastNameerror("lastName should not be empty")
      isSign = false

    }
    if (Email === "") {
      console.log("Email should not be empty")
      setEmailerror("Email should not be empty")
      isSign = false

    }
    if (Password === "") {
      console.log("Password should not be empty")
      setPassworderror("Password should not be empty")
      isSign = false

    }
    if (repeatPassword === "") {
      console.log("repeatPassword should not be empty")
      setrepeatPassworderror("repeatPassword should not be empty")
      isSign = false

    }
    if (Password !== repeatPassword) {
      setrepeatPassworderror("Password and repeatPassword should be same")
      isSign = false

    }
    if (isSign === true) {
      historyNew.push('/Signin');

    }

  }
  const devi = (event) => {
    console.log(event.target.value);

    setlastName(event.target.value);
  }

  const deviprapurna18 = (event) => {
    console.log(event.target.value);

    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    console.log(event.target.value);

    setPassword(event.target.value);
  }
  const handlerepeatPassword = (event) => {
    console.log(event.target.value);

    setrepeatPassword(event.target.value);
  }
  const handleBlurFirstname=()=>{
    if (firstName === "") {
      console.log("firstName should not be empty")
      setfirstNameerror("firstName should not be empty")
      

    }
    else{
      setfirstNameerror("")

    }
    
  }
  
  const handleBlurLastname=()=>{
    if (lastName === "") {
      console.log("lastName should not be empty")
      setlastNameerror("lastName should not be empty")
      

    }
else{
  setlastNameerror("")

}

  }
  const handleBlurEmail=()=>{

    if (Email === "") {
      console.log("Email should not be empty")
      setEmailerror("Email should not be empty")
      

    }
    else{
      setEmailerror("")
    
    }
    
      }
      const handleBlurPassword=()=>{
        if (Password === "") {
          console.log("Email should not be empty")
          setPassworderror("Email should not be empty")
          
    
        }
        else{
          setPassworderror("")
        
        }
      }
      const handleBlurrepeatPassword=()=>{
        if (repeatPassword === "") {
          console.log("Email should not be empty")
          setrepeatPassworderror("Email should not be empty")
          
    
        }
        else{
          setrepeatPassworderror("")
        
        }
      }






  return (

    <div className="signUp">

      <div className="container-fluid">


        <div className="row">
          <div className="col-sm-7 left-side-container">
            <center> <h1 className="text">LEARNING PORTAL</h1></center>
          </div>
          <div className="col-sm-5"><br/>
          <div className="right-side-container">

          <div className="container">

<div className="row">
<div className="form-group">
<input onChange={Prapurna} onBlur={handleBlurFirstname} type="text" className="form-controls" placeholder="FirstName" id="Name" />
<p className="error-msg">{firstNameerror}</p>
</div>

<div className="form-group space">

<input onChange={devi} onBlur={handleBlurLastname} type="text" className="form-controls" placeholder="LastName" id="Name" />
<p className="error-msg">{lastNameerror}</p>

</div>

</div>
</div>


<div className="form-group">
<input onChange={deviprapurna18} onBlur={handleBlurEmail} type="email" className="form-control" placeholder=" Email" id="email" />
<p className="error-msg">{Emailerror}</p>

</div>
<div className="form-group">
<input onChange={handlePassword} onBlur={handleBlurPassword}type="password" className="form-control" placeholder=" Password" id="pwd" />
<p className="error-msg">{Passworderror}</p>

</div>
<div className="form-group">

<input onChange={handlerepeatPassword} onBlur={handleBlurrepeatPassword} type="password" className="form-control" placeholder="Repeat-password" id="rtpw" />
<p className="error-msg">{repeatPassworderror}</p>

</div>
{/* <div className="form-group form-check">
<label className="form-check-label">
<input className="form-check-input" type="checkbox"/> Remember me
</label> */}
{/* </div> */}
<div>
{/* <Link to="Signin"> */}
<button onClick={msss} type="signUp" className="btn btn-primary">Sign Up</button>
{/* </Link> */}
<br />

</div>

<br></br>
<span>Already have an account?</span> &nbsp;<span><Link to="Signin">Signin</Link></span><br/>

          </div>

          </div>
          </div>
    
    </div>
    </div>

  )
}
export default Signup