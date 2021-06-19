import React, { useEffect, useState } from "react";
import { get_user, signIn } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import history from "../history";
import { Link } from "react-router-dom";
import "./GetUser.css";

const GetUser = ({ cart, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token || !user) {
      return "no one logged in";
    } else {
      dispatch(get_user());
    }
  }, [token]);
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
    setTimeout(() => {
      history.push("/signin");
    }, 200);
    dispatch(get_user());
    console.log("form2", formData);
    setTimeout(() => {
      history.push("/");
    }, 500);
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
        <button>SignIn</button>
        <div></div>
        {console.log("user", user)}
        <Link to="/setaccount">New Account?</Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user.user, cart: state.cart };
};
export default connect(mapStateToProps, { get_user, signIn })(GetUser);
