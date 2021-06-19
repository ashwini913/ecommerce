import { React, useState } from "react";
import { set_account } from "../actions/index";
import { connect } from "react-redux";
import "./SetAccount.css";

const SetAccount = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const err = { name: "", email: "", password: "" };
  const [errors, setErrors] = useState(err);
  const onSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: name,
      email: email,
      password: password,
      cart: props.cart,
      orders: [],
      Address: [],
    };
    if (
      errors.name.length === 0 &&
      errors.email.length === 0 &&
      errors.password.length === 0
    ) {
      props.set_account(formValues);
    }
  };
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let e = errors;
    switch (name) {
      case "name":
        e.name =
          value.length < 3
            ? "Name should contain atleast three characters"
            : "";
        break;
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        );
        e.email =
          value.match(validEmailRegex) == null ? "email is invalid" : "";
        break;
      case "password":
        e.password =
          value.length < 6 ||
          value.length > 8 ||
          (value.match(/\d/g) || []).length < 2
            ? "password should contain min 6 chars and max 8 char including 2 digits"
            : "";
        break;
      default:
        break;
    }
    setErrors(e);
    name === "name"
      ? setName(value)
      : name === "password"
      ? setPassword(value)
      : setEmail(value);
  };
  return (
    <div className="form">
      <form className="formcontainer" onSubmit={onSubmit}>
        <p>Sign-up</p>
        <label>Enter Name</label>
        <br></br>
        <input
          name="name"
          onChange={handleChange}
          value={name}
          className="form1"
        ></input>
        <p className="errors">{errors.name}</p>
        <label>Enter email</label>
        <br></br>
        <input
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
          className="form1"
        ></input>
        <p className="errors">{errors.email}</p>
        <label>Enter password</label>
        <br></br>
        <input
          name="password"
          onChange={handleChange}
          value={password}
          className="form1"
        ></input>
        <p className="errors">{errors.password}</p>
        <button className="submit">create an account</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, { set_account })(SetAccount);
