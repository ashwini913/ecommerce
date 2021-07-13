import React, { useEffect, useState } from "react";
import { signIn } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import history from "../history";
import { Link } from "react-router-dom";
import "./GetUser.css";

const GetUser = ({ cart, user, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    name === "email" ? setEmail(value) : setPassword(value);
  };
  let formData = {
    email: email,
    password: password,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData));
  };

  return (
    <div className="form2" onSubmit={onSubmit}>
      <form className="formcontainer1">
        <label>Enter Email</label>
        <input
          onChange={handleChange}
          value={email}
          name="email"
          className="form3"
        ></input>
        <label>Enter password</label>
        <input
          name="password"
          onChange={handleChange}
          value={password}
          className="form3"
        ></input>
        <button className="signInBtn">SignIn</button>
        <div></div>
        {console.log("user", user)}
        <div style={{ color: "red" }}>{error.signinerror}</div>
        <Link to="/setaccount">New Account?</Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user.user, cart: state.cart, error: state.error };
};
export default connect(mapStateToProps, { signIn })(GetUser);
