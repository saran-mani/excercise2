import { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
      
        <div className="container my-5">
          <footer className="text-center text-black">
            <div className="container">
              <section className="mt-5">
                <div className="row text-center d-flex justify-content-center pt-5">
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weigth-bold">
                      <a href="#" className="text-black">
                        About Us
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weigth-bold">
                      <a href="#" className="text-black">
                        Contact
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weigth-bold">
                      <a href="#" className="text-black">
                        Awards
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weigth-bold">
                      <a href="#" className="text-black">
                        Help
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-2">
                    <h6 className="text-uppercase font-weigth-bold">
                      <a href="#" className="text-black">
                        Products
                      </a>
                    </h6>
                  </div>
                </div>
              </section>
              <hr className="my-5" />
              <section className="mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Similique tenetur, est commodi ut nostrum labore ea facere
                      possimus unde eligendi sit eius eveniet porro aliquam
                      doloribus dolore, voluptas neque accusantium.
                    </p>
                  </div>
                </div>
              </section>
              <section className="text-center mb-5">
              <a href="" class="text-black me-4">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="text-black me-4">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="text-black me-4">
                  <i class="fab fa-google"></i>
                </a>
                <a href="" class="text-black me-4">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="text-black me-4">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="text-black me-4">
                  <i class="fab fa-github"></i>
                </a>
              </section>
            </div>
            <div className="text-center p3">
                Copyright: Saran Codes
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Nav;
