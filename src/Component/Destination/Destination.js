import React, { useState } from "react";
import { useParams } from "react-router";
import bike from "../../urban-riders/images/Frame.png";
import car from "../../urban-riders/images/Frame-2.png";
import bus from "../../urban-riders/images/Frame-1.png";
import metro from "../../urban-riders/images/Group.png";
import Ride from "../Ride/Ride";
import Map from "../../Map/Map";

const Destination = () => {
  const { services } = useParams();
  const fakedata = [
    {
      name: "bike",
      img: bike,
      price: "$100",
    },
    {
      name: "car",
      img: car,
      price: "120",
    },
    {
      name: "bus",
      img: bus,
      price: "$50",
    },
    {
      name: "metro",
      img: metro,
      price: "$30",
    },
  ];
  const vhicals = fakedata.find((vh) => services === vh.name);
  console.log(vhicals);

  const [passenger, setPassenger] = useState({
    date: "",
    from: "",
    to: "",
    img: "",
  });
  const [submit, setSubmit] = useState({
    isSubmit: true,
  });
  const { date, from, to, img, price } = submit;

  const handleBlur = (event) => {
    const newPassenger = { ...passenger };
    newPassenger[event.target.name] = event.target.value;
    setPassenger(newPassenger);
  };
  const handleSubmit = (event) => {
    if (passenger.date && passenger.from && passenger.to) {
      const submitInfo = { ...passenger };
      submitInfo.isSubmit = false;
      submitInfo.img = vhicals.img;
      submitInfo.price = vhicals.price;
      submitInfo.vhname = vhicals.name;
      setSubmit(submitInfo);
    }

    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="row justify-content-around">
        {submit.isSubmit ? (
          <div className="col-11 col-md-6 col-lg-4 mt-5 m-2 border border-secondary rounded p-2">
            <form onSubmit={handleSubmit} className="from-control" action="">
              <label className="h5 ml-1">Date:</label>
              <input
                className="form-control from-group"
                type="date"
                name="date"
                id=""
                onBlur={handleBlur}
                required
              />
              <label className="h5 ml-1">From:</label>
              <input
                className="form-control from-group"
                type="text"
                placeholder="choose destination"
                name="from"
                id=""
                onBlur={handleBlur}
                required
              />
              <label className="h5 ml-1">To:</label>
              <input
                className="form-control from-group"
                type="text"
                placeholder="choose destination"
                name="to"
                id=""
                onBlur={handleBlur}
                required
              />
              <input
                className="form-control from-group mt-4 btn-danger"
                type="submit"
                value="submit"
                id=""
                required
              />
            </form>
          </div>
        ) : (
          <div className="col-xm-4 col-md-4 mt-5 m-2 border border-secondary rounded p-3">
            <div className="shadow card bg-danger mb-2 p-2 ml-1 ">
              <h3>Date:{date}</h3>
              <h4>From:{from}</h4>
              <h4>To:{to}</h4>
            </div>

            <Ride
              name={vhicals.name}
              date={date}
              from={from}
              to={to}
              img={img}
              price={price}
            ></Ride>
            <Ride
              name={vhicals.name}
              date={date}
              from={from}
              to={to}
              img={img}
              price={price}
            ></Ride>
            <Ride
              name={vhicals.name}
              date={date}
              from={from}
              to={to}
              img={img}
              price={price}
            ></Ride>
          </div>
        )}
        <div className="col-xs-12  col-md-8 col-lg-7  text-center mt-5  rounded p-3">
          <Map></Map>
        </div>
    
      </div>
    </div>
  );
};

export default Destination;
