import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import Service from "../Service/Service";
import bike from "../../urban-riders/images/Frame.png";
import car from "../../urban-riders/images/Frame-2.png";
import bus from "../../urban-riders/images/Frame-1.png";
import metro from "../../urban-riders/images/Group.png";

const Home = () => {
  return (
   
     

      <div className="container services">

        <div className="row justify-content-around">
          <div className="col-8 col-sm-11  bannerTitle">
            <h1 className="bannerTitle">Enjoy our services</h1>
          </div>
        </div>
     
        <div className="row">
         
          <Link className="col-md-3 my-3" to={"/destination/bike"}>
            <Service name="Bike" img={bike}></Service>
          </Link>
          <Link className="col-md-3 my-3" to={"/destination/car"}>
            <Service name="car" img={car}></Service>
          </Link>
          <Link className="col-md-3 my-3" to={"/destination/bus"}>
            <Service name="Bus" img={bus}></Service>
          </Link>
          <Link className="col-md-3 my-3" to={"/destination/metro"}>
            <Service name="Metro" img={metro}></Service>
          </Link>
        </div>
      </div>
   
  );
};

export default Home;
