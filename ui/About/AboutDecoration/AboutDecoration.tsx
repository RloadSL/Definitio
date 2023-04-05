import React from "react";
import Image from "next/image";
import style from "./about-decoration.module.scss";
import blueSpot from "../../../assets/img/about/blue_spot.svg";
import boyGirl from "../../../assets/img/about/boy_girl.svg";
import city from "../../../assets/img/about/city2.svg";
import yellowSpot from "../../../assets/img/about/yellow_spot.svg";
import window from "../../../assets/img/about/window.svg";
import mobile from "../../../assets/img/about/mobile.svg";

interface AboutDecorationProps {}

/**
 * Component to handle the animated graphics of the section
 * @returns 
 */

const AboutDecoration = ({}: AboutDecorationProps) => {
  return (
    <div className={style.wrapper}>
      <canvas width={770} height={740} />
      <div className={style.blueSpot}>
        <Image src={blueSpot} alt={""} />
      </div>
      <div className={style.boyGirl}>
        <Image src={boyGirl} alt={""} />
      </div>
      <div className={style.city}>
        <Image src={city} alt={""} />
      </div>
      <div className={`${style.mobile} mobile`}>
        <Image src={mobile} alt={""} />
      </div>
      <div className={`${style.yellowSpot} graphic`}>
        <Image src={yellowSpot} alt={""} />
      </div>
      <div className={`${style.window} game`}>
        <Image src={window} alt={""} />
      </div>
    </div>
  );
};

export default AboutDecoration;
