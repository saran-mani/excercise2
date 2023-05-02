import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              SARAN
            </a>
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end bg-dark text-white"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  SARAN
                </h5>
                <button
                  type="button"
                  class="btn-close light text-reset bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body text-center fs-5">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                 
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Awards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
