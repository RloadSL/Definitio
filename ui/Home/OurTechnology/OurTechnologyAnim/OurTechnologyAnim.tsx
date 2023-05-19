import React, { useEffect } from "react";
import style from "./ourTechnology-anim.module.scss";
import Image from "next/image";
import factory from "../../../../assets/img/home/our_technology/factory.svg";
import factoryPart from "../../../../assets/img/home/our_technology/factory_part.svg";
import robots from "../../../../assets/img/home/our_technology/robot.svg";
import gold from "../../../../assets/img/home/our_technology/gold.svg";
import shield from "../../../../assets/img/home/our_technology/shield.svg";
import stone from "../../../../assets/img/home/our_technology/stone.svg";
import gsap, { Power2 } from "gsap";

const OurTechnologyAnim = () => {
  useEffect(() => {
    gsap.from(".factory", {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourtechnology",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".technology_shield", {
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourtechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <canvas width={640} height={715} />
      <div className={`${style.factory} factory`}>
        <div className={style.factory_bg}>
          <Image src={factory} alt={""} />
        </div>
        <div className={style.factory_part}>
          <Image src={factoryPart} alt={""} />
        </div>
        <div className={style.gold}>
          <Image src={gold} alt={""} />
        </div>
      </div>
      <div className={`${style.stone1} stone1`}>
        <Image src={stone} alt={""} />
      </div>
      <div className={`${style.stone2} stone2`}>
        <Image src={stone} alt={""} />
      </div>
      <div className={`${style.robot1} robot1`}>
        <Image src={robots} alt={""} />
      </div>
      <div className={`${style.robot2} robot2`}>
        <Image src={robots} alt={""} />
      </div>

      <div className={`${style.technology_shield} technology_shield`}>
        <Image src={shield} alt={""} />
      </div>
    </div>
  );
};

export default OurTechnologyAnim;
