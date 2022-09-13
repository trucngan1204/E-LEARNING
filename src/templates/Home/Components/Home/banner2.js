import React from "react";
import "./styles/carouselHome.css";
import { animated, useTrail } from "react-spring";
import ImgBanner from "./../../../../assets/images/2.jpg";
import { history } from "../../../../App";

export default function Banner2() {

  return (
    <div>
      <div className="flex-1 flex justify-center">
        <img
          src={ImgBanner}
          alt="banner"
          width="100%"
        />
      </div>
    </div>
  );
}
