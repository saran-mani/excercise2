import { Component } from "react";
import car1 from "../assets/carr.png";
import car2 from "../assets/car2.png"
import "./Home.css";
import "../common.css";
import food1 from "../assets/food.jpg";
export class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-light p-3">
              <img src={car1} style={{ width: "100%" }} alt="" srcset="" />
            </div>
            <div className="col-sm-6  text-dark p-3 fs-3 text-break">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitr
              possimus consequatur totam magni autem? Quidem nihil saepe quos in
              exercitationem delectus modi rem, veritatis quas architecto ex
              harum soluta cum? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dicta tenetur, doloremque temporibus voluptatum
              debitis labore iure porro veritatis nam architecto magni quibusdam
              sint eum et quae, corrupti vel, eveniet dolorum!
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6  text-dark p-3 fs-3 text-break">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              possimus consequatur totam magni autem? Quidem nihil saepe quos in
              exercitationem delectus modi rem, veritatis quas architecto ex
              harum soluta cum? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dicta tenetur, doloremque temporibus voluptatum
              debitis labore iure porro veritatis nam architecto magni quibusdam
              sint eum et quae, corrupti vel, eveniet dolorum!
            </div>{" "}
            <div className="col-sm-6 text-light p-3">
              <img src={car2} style={{ width: "100%" }} alt="" srcset="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
