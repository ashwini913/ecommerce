import React, { useRef, useState, useEffect } from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

function MenuBar() {
  let [open, setOpen] = useState(false);
  let onclicked = (event) => {
    setOpen(!open);
  };
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      } else if (open) {
        setOpen(!open);
      }
    });
  }, [open]);
  let renderedList = () => {
    if (open) {
      return (
        <div className="menu">
          <Link to="/ecommerce">
            <p>Home</p>
          </Link>
          <Link to="/orders">
            <p>Orders</p>
          </Link>
          <Link to="/profile">
            <p>Profile</p>
          </Link>
        </div>
      );
    }
  };
  return (
    <div className="menubar">
      <div id={`${open ? "menu_bar_open" : "menu_bar_closed"}`}>
        {renderedList()}
      </div>
      <i
        ref={ref}
        id="button"
        className="ui big bars icon"
        onClick={onclicked}
      ></i>
    </div>
  );
}
export default MenuBar;
