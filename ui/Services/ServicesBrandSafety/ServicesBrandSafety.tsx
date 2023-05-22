import ButtonApp from "@/components/ButtonApp";
import useComponentUtils from "@/hooks/component.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import style from "./services-brand-safety.module.scss";
import gsap, { Power2 } from "gsap";
import ServicesBrandSafetyAnim from "./ServicesBrandSafetyAnim";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";

const ServicesBrandSafety = () => {
  useEffect(() => {
    gsap.from(".brandSafety_animation", {
      x: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".brandSafety",
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);
  return (
    <section className={`${style.brandSafety} brandSafety`}>
      <div className={`${style.cube1}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.content} brandSafety_animation`}>
        <div className={style.brandSafety_image}>
          <ServicesBrandSafetyAnim />
        </div>
        <div className={`${style.brandSafety_text} brandSafetyText_animation`}>
          <article>
            <h2 className="titleButton">
              <FormattedMessage id="page.services.brandSafety.title" />
            </h2>
            <div>
              <p>
                <FormattedMessage id="page.services.brandSafety.text" />
              </p>
              <ul>
                <FormattedMessage
                  id="page.services.brandSafety.list"
                  values={{
                    li: (children) => <li>{children}</li>
                  }}
                />
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesBrandSafety;
