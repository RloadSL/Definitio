import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import style from "./whyus-workwithus.module.scss";
import gsap, { Power2 } from "gsap";
import ServicesBrandSafetyAnim from "./WhyUsWorkWithUsAnim";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";
import WhyUsWorkWithUsAnim from "./WhyUsWorkWithUsAnim";
import RLDButton from "@/components/RLDButton";

const WhyUsWorkWithUs = () => {
  useEffect(() => {
    gsap.from(".workwithusText_animation", {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus_animation",
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);

  const onClick = () => {
    console.log('hola')
  }
  return (
    <section className={`${style.workwithus} workwithus`}>
      <div className={`${style.cube1}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.content} workwithus_animation`}>
        <div className={`${style.workwithus_text} workwithusText_animation`}>
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
          <div className={style.buttonBlock}>
          <RLDButton
            customClass="button button-primary"
            labelID="btn.label.workWithUs"
            onClick={onClick}
          />
        </div>
        </div>
        <div className={style.workwithus_image}>
          <WhyUsWorkWithUsAnim />
        </div>
      </div>
    </section>
  );
};

export default WhyUsWorkWithUs;
