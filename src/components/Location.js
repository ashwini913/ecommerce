import React, { useState } from "react";
import "./Location.css";
function Location() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let onClicked = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const Modal = () => {
    if (modalIsOpen) {
      return (
        <div className="modal">
          <div className="heading">Choose a location</div>
          <form>
            <label></label>
            <input
              className="location_input"
              type="text"
              style={{
                outline: "none",
                border: "1px solid black",
                marginTop: "30px",
                width: "50%",
                marginLeft: "35px",
              }}
            ></input>
          </form>
        </div>
      );
    } else return "";
  };
  return (
    <div>
      <div onClick={onClicked} className="location" style={{ fontSize: "7px" }}>
        pin
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
}
export default Location;
