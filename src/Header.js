import React from "react";
import { Link } from "react-router-dom";
import Explore from "./Explore";

function Header() {
  return (
    <div>
      <div class="pos-f-t">
        {/* <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div> */}

        <nav class="navbar navbar-dark bg-primary">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="header-title">LEARNING PORTAL</div>
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
        </nav>
      </div>
    </div>
  );
}
export default Header;
