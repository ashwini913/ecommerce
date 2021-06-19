import React from "react";
import "./Banner.css";

function Orders() {
  let images = [
    "https://ssl.quiksilver.com/static/RV/default/category-assets/experiences/2019/hero-carousel/img/singles/us/2021/us/0515-New-Arrivals-D2-Carousel-Desktop-1440x614.jpg",
    "https://3.bp.blogspot.com/-8tMA3K0zpeI/WpaWV2iqb8I/AAAAAAAABY4/fkKAinXuViMi2cPIezvvG4l203baewErACLcBGAs/s1600/Get%2BBest%2BOnline%2BShopping%2BOffers%2Band%2BDeals.jpg",
    "https://cdn.shopify.com/s/files/1/0491/3607/4912/collections/IMG_9372_large.jpg?v=1613342275",
    "https://m.media-amazon.com/images/S/aplus-media/vc/5b436c7b-b24f-4dc3-a391-47e3c096e4a1.__CR0,0,1914,592_PT0_SX970_V1___.png",
  ];
  return (
    <div className="img-slider">
      <div className="imgslides">
        <input type="radio" name="radio btn" id="radio1"></input>
        <input type="radio" name="radio btn" id="radio2"></input>
        <input type="radio" name="radio btn" id="radio3"></input>
        <input type="radio" name="radio btn" id="radio4"></input>
        <div className="slide " id="first">
          <img src={images[0]} alt=""></img>
        </div>
        <div className="slide">
          <img src={images[1]} alt=""></img>
        </div>
        <div className="slide">
          <img src={images[2]} alt=""></img>
        </div>
        <div className="slide">
          <img src={images[3]} alt=""></img>
        </div>
        <div className="navigation-auto">
          <div className="auto-btn"></div>
          <div className="auto-btn"></div>
          <div className="auto-btn"></div>
          <div className="auto-btn"></div>
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </div>
  );
}
export default Orders;
