import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { passengerContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
const Header = () => {
  const [loggedInPassenger, setLoggedInPassenger] = useContext(
    passengerContext
  );
  const hangleSignOut =()=>{
    firebase.auth().signOut().then((res) => {
        const userSignOut = {
            name : '',
            email : ''


        }
        setLoggedInPassenger(userSignOut)
       
      }).catch((error) => {
        // An error happened.
      });
      sessionStorage.removeItem('token')
  }

  return (
    <nav class=" container navbar navbar-expand-lg navbar-light ">
      <Link to={"/home"}>
        <span className="brand">Uber</span>
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Link class="nav-link" to={"/home"}>
          Home
        </Link>

       

        <Link class="nav-link" to={"/blog"}>
          Blog
        </Link>
        {loggedInPassenger.email && (
          <a href  className=" nav-link border border-primary rounded">Hi {loggedInPassenger.name}</a>
        )}

        {(loggedInPassenger.email  || sessionStorage.getItem('token')) ? (
          <Link class="nav-link" to={"/login"}>
            <button onClick={hangleSignOut} className="btn btn-danger">Log out</button>
          </Link>
        ) : (
          <Link class="nav-link" to={"/login"}>
            <button className="btn btn-secondary">Log in</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
