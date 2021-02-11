import React from "react";
import { Link } from "react-router-dom";
import Explore from "./Explore";
import "./Header.css";

function Header(props) {
  return (
    <div id="wrapper">
      <div class="overlay"></div>
      <nav
        class="navbar navbar-inverse fixed-top"
        id="sidebar-wrapper"
        role="navigation"
      >
        <ul class="nav sidebar-nav">
          <div class="sidebar-header">
            <div class="sidebar-brand">
              <a href="#">LEARNING PORTAL</a>
            </div>
          </div>
          <li class="three line font">
            <a href="#home">Home</a>
          </li>
          <li class="three line font">
            <Link to="/Course">Course</Link>
          </li>
          <li class="three line font">
            <a href="#events">About Us</a>
          </li>
          <li class="three line font">
            <a href="#team">Become an Instructor</a>
          </li>

          <li class="three line font">
            <a href="#services">Account</a>
          </li>
          <li class="three line font">
            <a href="#contact">Contact me</a>
          </li>
        </ul>{" "}
      </nav>
      <div id="page-content-wrapper">
        <div className="tabs-container">
          <button
            type="button"
            class="hamburger animated fadeInLeft is-closed"
            data-toggle="offcanvas"
          >
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
          </button>
          <div className="explore-memu mr-auto">
            <Explore />
          </div>

          <div className="float-right">
            <Link to="/Home">
              <button type="Home" class="btn btn-primary">
                HOME
              </button>
            </Link>
          </div>
          {props.userDetails ? (
            <div className="float-right">
              <Link to="/Signin">
                <button
                  onClick={() => props.setuserDetails(null)}
                  type="logout"
                  class="btn btn-primary"
                >
                  LOGOUT
                </button>
              </Link>
            </div>
          ) : (
            <div className="float-right">
              <Link to="/Signin">
                <button type="Signin" class="btn btn-primary">
                  SIGNIN
                </button>
              </Link>
            </div>
          )}
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
