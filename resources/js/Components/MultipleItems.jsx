import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anais from '../../img/Anais.jpg';
import antonio from '../../img/Antonio.jpg';
import armand from '../../img/Armand.jpg';
import aubin from '../../img/Aubin.jpg';
import axel from '../../img/Axel.jpg';
import benjamin from '../../img/Benjamin.jpg';
import clarisse from '../../img/Clarisse.jpg';
import florian from '../../img/Florian.jpg';
import mathis from '../../img/Mathis.jpg';

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots",
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="mb-20">
        <div>
          <img className="w-[95%] h-full object-cover rounded-md relative" src={anais} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Anaïs</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={antonio} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Antonio</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={armand} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Armand</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={aubin} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Aubin</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={axel} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Axel</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={benjamin} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Benjamin</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={clarisse} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Clarisse</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={florian} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Florian</p>
            <p className="">Bénévole</p>
          </div>
        </div>
        <div>
          <img className="w-[95%] h-full object-cover rounded-md" src={mathis} alt="" />
          <div className="flex flex-col gap-x-2 px-2 mt-1 items-center">
            <p className="uppercase text-3xl  font-bold text-yellow">Mathis</p>
            <p className="">Bénévole</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;