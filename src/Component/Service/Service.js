import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, img } = props;
  return (
    <div className="shadow card">
      <div className="card-body">
        <div className="card-title h5">
          <img src={img} alt="service" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-title h5">
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
