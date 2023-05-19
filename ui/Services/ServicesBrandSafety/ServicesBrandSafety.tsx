import ButtonApp from "@/components/ButtonApp";
import useComponentUtils from "@/hooks/component.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import OurTechnologyAnim from "./DataOptimizationAnim";
import style from "./services-brand-safety.module.scss";
import gsap, { Power2 } from "gsap";

const ServicesBrandSafety = () => {
  // useEffect(() => {
  //   gsap.from(".data_windowBlue", {
  //     x: -20,
  //     ease: Power2.easeInOut,
  //     duration: 1.5,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology",
  //       scrub: 1,
  //       start: "top center",
  //       end: "top center"
  //     }
  //   });
  //   gsap.from(".data_window1", {
  //     x: 100,
  //     ease: Power2.easeInOut,
  //     duration: 1,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".data_window2", {
  //     x: 50,
  //     ease: Power2.easeInOut,
  //     duration: 1.5,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology_animation",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".data_window3", {
  //     y: -80,
  //     ease: Power2.easeInOut,
  //     duration: 2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology_animation",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".blueSpot", {
  //     scale: 0,
  //     ease: Power2.easeInOut,
  //     duration: 2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology_animation",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".gameSpot", {
  //     scale: 0,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology_animation",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".ourTechnologyText_animation", {
  //     x: 80,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".ourTechnology",
  //       start: "top center",
  //       end: "bottom center"
  //     }
  //   });
  // }, []);
  return (
    <section className={`${style.brandSafety} ourTechnology`}>
      <div className={`${style.content} ourTechnology_animation`}>
        <div className={style.brandSafety_image}>
          <OurTechnologyAnim />
        </div>
        <div className={`${style.brandSafety_text} ourTechnologyText_animation`}>
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
