import React, { useEffect } from "react";
import style from "./hero-anim.module.scss";
import Image from "next/image";
import girl from "../../../../assets/img/services/hero/girl.svg";
import boy from "../../../../assets/img/services/hero/boy.svg";
import arms from "../../../../assets/img/services/hero/arms.svg";
import yellowCircle from "../../../../assets/img/services/hero/yellowCircle.svg";
import yellowCube from "../../../../assets/img/services/hero/yellowCube.svg";
import blueCircle from "../../../../assets/img/services/hero/blueSpot.svg";
import bubble1 from "../../../../assets/img/services/hero/bubble1.svg";
import bubble2 from "../../../../assets/img/services/hero/bubble2.svg";
import circle from "../../../../assets/img/circle_b.svg";
import useComponentAnimations from "@/hooks/animations.hooks";

/**
 * Component to handle the animated graphics of the section
 * @returns
 */

const HeroAnim = () => {
  const { fadeInAnim } = useComponentAnimations();

  useEffect(() => {
    fadeInAnim(".boy, .arms", 0.8, 20);
    fadeInAnim(".girl", 1, -50);
    fadeInAnim(".bubble1", 1.2, -30);
    fadeInAnim(".bubble2", 1.2, -50);
    fadeInAnim(".yellowCircle", 1.2, -50);
    fadeInAnim(".yellowCube", 1.5, -70);
    fadeInAnim(".blueCircle", 1.5, -70);
  }, []);

  return (
    <div className={style.wrapper}>
      <canvas width={940} height={660} />
      <div className={`${style.boy} boy`}>
        <Image src={boy} alt={""} />
      </div>
      <div className={`${style.arms} arms`}>
        <Image src={arms} alt={""} />
      </div>
      <div className={`${style.girl} girl`}>
        <Image src={girl} alt={""} />
      </div>
      <div className={style.yellowCircle}>
        <Image src={yellowCircle} alt={""} />
      </div>
      <div className={`${style.yellowCube} yellowCube`}>
        <Image src={yellowCube} alt={""} />
      </div>
      <div className={`${style.blueCircle} blueCircle`}>
        <Image src={blueCircle} alt={""} />
      </div>
      <div className={`${style.bubble1} bubble1`}>
        <Image src={bubble1} alt={""} />
      </div>
      <div className={`${style.bubble2} bubble2`}>
        <Image src={bubble2} alt={""} />
      </div>
      <div className={`${style.circle} circle`}>
        <Image src={circle} alt={""} />
      </div>
    </div>
  );
};

export default HeroAnim;
