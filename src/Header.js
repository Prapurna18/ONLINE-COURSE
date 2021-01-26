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
              <a href="#">Brand</a>
            </div>
          </div>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Courses</a>
          </li>
          <li>
            <a href="#events">About Us</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li class="dropdown">
            <a href="#works" class="dropdown-toggle" data-toggle="dropdown">
              Works <span class="caret"></span>
            </a>
            <ul class="dropdown-menu animated fadeInLeft" role="menu">
              <div class="dropdown-header">Dropdown heading</div>
              <li>
                <a href="#pictures">Pictures</a>
              </li>
              <li>
                <a href="#videos">Videeos</a>
              </li>
              <li>
                <a href="#books">Books</a>
              </li>
              <li>
                <a href="#art">Art</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#followme">Follow me</a>
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
          <div className="mr-auto">
            <Explore />
          </div>
          <div className="float-right">
            <Link to="/Signin">
              <button type="Signin" class="btn btn-primary">
                SIGNIN
              </button>
            </Link>
          </div>
          <div className="float-right">
            <Link to="/Home">
              <button type="Home" class="btn btn-primary">
                HOME
              </button>
            </Link>
          </div>
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
