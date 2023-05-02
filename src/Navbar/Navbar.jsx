import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fs-5">
            <div class="container">
            <a class="navbar-brand" href="#">SARAN</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0 text-center">
                <Link to="/"><li class="nav-item">
                  <a class="nav-link" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                </li></Link>
                
                <Link to="/awards">
                    <li class="nav-item">
                      <a class="nav-link blank" href="#">
                        Awards
                      </a>
                    </li>
                  </Link>
                <Link to="/contact">
                    <li class="nav-item">
                      <a class="nav-link blank" href="#">
                        Contact
                      </a>
                    </li>
                  </Link>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">Action 1</a>
                    <a class="dropdown-item" href="#">Action 2</a>
                  </div>
                </li>
              </ul>
              <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-2 p-1 m-3" type="text" placeholder="Search"/>
                <button class="btn btn-outline-light my-3 my-sm-3" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />

      </>
    );
  }
}

export default Navbar;
