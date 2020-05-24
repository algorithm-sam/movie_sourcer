import React from "react";
import "./Hero.css";
import { StackedPosters } from "../StackedPosters";
const Hero = () => {
  return (
    <div className="hero-component bg-black text-white">
      <div className="container py-4 mx-auto flex flex-col lg:flex-row justify-between items-center content-center h-full">
        <div className="w-full text-center order-2 lg:order-1 lg:text-left lg:w-1/2 advert flex flex-col lg:justify-evenly h-full">
          <h1 className="text-2xl lg:text-4xl font-bold">Movie Sourcer</h1>
          <p className="lg:text-2xl text-lg font-semibold">
            Your Number One Stop to get the latest and trending movies. Need
            real time update about the release time of your favorite movie? We
            got you covered
          </p>
        </div>

        <div className="w-full lg:popular-posters lg:w-1/2 lg:order-2 order-1 text-center">
          <StackedPosters />
        </div>
      </div>
    </div>
  );
};

export default Hero;
