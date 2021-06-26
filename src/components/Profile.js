import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import "./Profile.css";

const Profile = ({ user }) => {
  const log_out = () => {
    localStorage.clear();
    window.location.reload();
  };
  if (user) {
    const addressList = () => {
      return user.Address.map((add, i) => {
        return (
          <div className="addlist" key={i}>
            <p>{`${add.name} ,Door-No:${add.doorno}`}</p>
            <p>{`${add.street} ,${add.place} ,${add.pincode}`}</p>
            <span className="cancel_container">
              <button className="cancel_btn">cancel</button>
            </span>
            <span className="edit_container">
              <button className="edit_btn">edit</button>
            </span>
          </div>
        );
      });
    };
    return (
      <div className="profile">
        <div className="profileContainer">
          <p>Name:{user.name}</p>
          <p>Email:{user.email}</p>
          <p>Address:</p>
          <div>{addressList()}</div>
          <div>
            <button className="logout" onClick={log_out}>
              logOut
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="nouser">
      <Link to="/signin">
        <button className="login">login</button>
      </Link>
      <p>you have to login to view profile</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(Profile);
