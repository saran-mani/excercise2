import { Component } from "react";
import car1 from "../assets/carr.png";
import car2 from "../assets/car2.png"
import "./Home.css";
export class Home extends Component {
  state = {};
  render() {
    return (
      <div className="saran-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-light p-3">
              <img src={car1} style={{ width: "100%" }} alt="" srcset="" />
            </div>
            <div id="text" className="col-sm-6  text-dark p-3 fs-3 text-break text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitr
              possimus consequatur totam magni autem? Quidem nihil saepe quos in
              exercitationem delectus modi rem, veritatis quas architecto ex
              harum soluta cum? 
            </div>
          </div>
          <div className="row">
            <div id="text" className="col-sm-6  text-dark p-3 fs-3 text-break">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              possimus consequatur totam magni autem? Quidem nihil saepe quos in
              exercitationem delectus modi rem, veritatis quas architecto ex
              harum soluta cum?
            </div>{" "}
            <div className="col-sm-6 text-light p-3">
              <img src={car2} style={{ width: "100%" }} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
