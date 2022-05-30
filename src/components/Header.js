import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar light className=" navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <NavbarBrand href="/">
                <img
                  src="pic/logo.png"
                  height="30"
                  width="41"
                  alt="R istorante Con Fusion"
                />
                <span>fxh</span>
              </NavbarBrand>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/home">
                    <span className="fa fa-home fa-lg"></span>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/photo">
                    Photo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
