import { Component } from "react";
import avatar1 from "../assets/avatar1.jpg";
import "./Contact.css"
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-text">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4 p-3 ">
              <div className="container">
                <img
                  className="rounded-circle"
                  src={avatar1}
                  alt=""
                  srcset=""
                  style={{ width: "50%" }}
                />
                <h1>Name</h1>
                <h2>email</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur enim ut laudantium vero porro consequuntur
                  provident, praesentium omnis corrupti non laborum ratione
                  expedita accusantium quo sit deserunt atque fugiat? Voluptas.
                </p>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="container">
                <img
                  className="rounded-circle"
                  src={avatar1}
                  alt=""
                  srcset=""
                  style={{ width: "50%" }}
                />
                <h1>Name</h1>
                <h2>email</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur enim ut laudantium vero porro consequuntur
                  provident, praesentium omnis corrupti non laborum ratione
                  expedita accusantium quo sit deserunt atque fugiat? Voluptas.
                </p>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="container">
                <img
                  className="rounded-circle"
                  src={avatar1}
                  alt=""
                  srcset=""
                  style={{ width: "50%" }}
                />
                <h1>Name</h1>
                <h2>email</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur enim ut laudantium vero porro consequuntur
                  provident, praesentium omnis corrupti non laborum ratione
                  expedita accusantium quo sit deserunt atque fugiat? Voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
