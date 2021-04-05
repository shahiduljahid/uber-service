import React from 'react';
import './Ride.css'

const Ride = (props) => {
    const { img, price ,name } = props
    return (
        <div className="shadow card mb-2 ">
            <div className="d-flex justify-content-between rounded align-items-center p-2  mt-2">

                <img className="rideImg" src={img} alt="service" />
                <h5 className="name">{name}</h5>
                <h5>{price}</h5>
            </div>

        </div>


    );
};

export default Ride;