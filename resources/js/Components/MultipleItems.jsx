import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dotsClass: "slick-dots",
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="mb-20">
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
        <div>
          <div className="w-[95%] h-[35vh] bg-yellow mx-auto">

          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;