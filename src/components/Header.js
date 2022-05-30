import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar light className=" navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavbarBrand href="/home">
                <img
                  src="pic/logo.png"
                  height="30"
                  width="41"
                  alt="R istorante Con Fusion"
                />
                <span>fxh</span>
              </NavbarBrand>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    <span className="fa fa-home fa-lg"></span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    <span className="fa fa-info"> </span>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/photo">
                    <span className="fa fa-camera"> </span>
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
