import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import style from "./whyus-workwithus.module.scss";
import gsap, { Power2 } from "gsap";
import ServicesBrandSafetyAnim from "./WhyUsWorkWithUsAnim";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";
import WhyUsWorkWithUsAnim from "./WhyUsWorkWithUsAnim";

const WhyUsWorkWithUs = () => {
  // useEffect(() => {
  //   gsap.from(".brandSafety_animation", {
  //     x: 80,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".brandSafety",
  //       start: "top center",
  //       end: "bottom center"
  //     }
  //   });
  // }, []);
  return (
    <section className={`${style.brandSafety} brandSafety`}>
      <div className={`${style.cube1}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.content} brandSafety_animation`}>
        <div className={`${style.brandSafety_text} brandSafetyText_animation`}>
          <article>
            <h2 className="titleButton">
              <FormattedMessage id="page.whyus.workwithus.h2" />
            </h2>
            <div>
              <FormattedMessage
                id="page.whyus.workwithus.text"
                values={{
                  b: (children) => <b>{children}</b>,
                  p: (children) => <p className="hola">{children}</p>
                }}
              />
            </div>
          </article>
        </div>
        <div className={style.brandSafety_image}>
          <WhyUsWorkWithUsAnim />
        </div>
      </div>
    </section>
  );
};

export default WhyUsWorkWithUs;
