import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { add_address } from "../actions/index";
import history from "../history";
import "./Address.css";

function CheckOut({ user }) {
  let [modalopen, setModalOpen] = useState(false);
  let [address, setAddress] = useState(JSON.stringify({}));
  let [name, setName] = useState("");
  let [doorno, setDoorNo] = useState("");
  let [street, setStreet] = useState("");
  let [place, setPlace] = useState("");
  let [pincode, setPincode] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    if (modalopen) {
      document.body.style.overflow = "hidden";
    }
    if (!modalopen) {
      document.body.style.overflow = "scroll";
    }
  }, [modalopen]);

  const addAddress = () => {
    setModalOpen(!modalopen);
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") setName(value);
    if (name === "doorno") setDoorNo(value);
    if (name === "street") setStreet(value);
    if (name === "place") setPlace(value);
    if (name === "pincode") setPincode(value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };
  let formValues = {
    name: name,
    doorno: doorno,
    street: street,
    place: place,
    pincode: pincode,
  };
  const submitHandle = (event) => {
    event.preventDefault();
    let address = user.Address;
    address.push(formValues);
    dispatch(add_address(user, address));
    history.push("/checkout");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };
  const addresslist = () => {
    if (user.Address.length > 0) {
      return user.Address.map((add, i) => {
        return (
          <div className="each" key={add.doorno}>
            <input
              className="radiobtn"
              type="radio"
              value={JSON.stringify(add)}
              checked={address === JSON.stringify(add)}
              onChange={onAddressChange}
            ></input>
            <div>
              <p>{`${add.name},${add.doorno}`}</p>
              <p>{`${add.street},${add.place} ,${add.pincode}`}</p>
            </div>
          </div>
        );
      });
    } else {
      return "please provide an address";
    }
  };
  return (
    <div className="checkout">
      <div className="content">
        <div className="addresslist">
          <form onSubmit={onSubmit}>
            {addresslist()}
            {console.log(JSON.parse(address))}
            <button>continue</button>
          </form>
        </div>
        <button className="modalbutton" onClick={addAddress}>
          Add address
        </button>
      </div>
      <div
        className="overlay"
        style={{
          display: modalopen ? "block" : "none",
        }}
      ></div>
      <div className={`${modalopen ? "modalopen" : "modalclosed"}`}>
        <i id="close" onClick={addAddress} className="ui times icon"></i>
        <form className="addressform" onSubmit={submitHandle}>
          <h5>Add Address</h5>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
          ></input>
          <input
            type="text"
            name="doorno"
            placeholder="door-no"
            onChange={handleChange}
            value={doorno}
          ></input>
          <input
            type="text"
            name="street"
            value={street}
            onChange={handleChange}
            placeholder="street and locality"
          ></input>
          <input
            type="text"
            name="place"
            value={place}
            onChange={handleChange}
            placeholder="town/city"
          ></input>
          <input
            type="text"
            name="pincode"
            value={pincode}
            onChange={handleChange}
            placeholder="pincode"
          ></input>
          <button className="submit" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user.user };
};
export default connect(mapStateToProps, { add_address })(CheckOut);
