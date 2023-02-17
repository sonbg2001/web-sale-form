import React from "react";
import Slider from "react-slick";

import "./Slider.scss";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider className="slider" {...settings}>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=468"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=468"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=468"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=468"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=468"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=468"
          alt=""
        />
      </div>
    </Slider>
  );
}
