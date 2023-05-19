import ButtonApp from "@/components/ButtonApp";
import useComponentUtils from "@/hooks/component.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import OurTechnologyAnim from "./DataOptimizationAnim";
import style from "./services-our-technology.module.scss";
import gsap, { Power2 } from "gsap";
import RLDAccordion from "@/components/RLDAccordion";


interface ServicesOurTechnologyProps {}

const ServicesOurTechnology = ({}: ServicesOurTechnologyProps) => {
  useEffect(() => {
    gsap.from(".data_windowBlue", {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".data_window1", {
      x: 100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".data_window2", {
      x: 50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".data_window3", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".blueSpot", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".gameSpot", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".ourTechnologyText_animation", {
      x: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourTechnology",
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);
  return (
    <section className={`${style.ourTechnology} ourTechnology`}>
      <div className={`${style.content} ourTechnology_animation`}>
        <div className={style.ourTechnology_image}>
          <OurTechnologyAnim />
        </div>
        <div className={`${style.ourTechnology_text} ourTechnologyText_animation`}>
          <article>
            <h2 className="titleButton">
              <FormattedMessage id="page.home.ourtechnology.h2" />
            </h2>
            <div>
              <FormattedMessage
                id="page.services.ourtechnology.text"
                values={{
                  p: (children) => <p>{children}</p>
                }}
              />
            </div>
          </article>
          <RLDAccordion
            titleID="page.services.ourtechnology.tab1.title"
            accordionClass="accordion-1"
          >
            <p className={style.accordion_text}>
              <FormattedMessage id="page.services.ourtechnology.tab1.text" />
            </p>
          </RLDAccordion>
          <RLDAccordion
            titleID="page.services.ourtechnology.tab2.title"
            accordionClass="accordion-2"
          >
            <p className={style.accordion_text}>
              <FormattedMessage id="page.services.ourtechnology.tab2.text" />
            </p>
          </RLDAccordion>
          <RLDAccordion
            titleID="page.services.ourtechnology.tab3.title"
            accordionClass="accordion-3"
          >
            <p className={style.accordion_text}>
              <FormattedMessage id="page.services.ourtechnology.tab3.text" />
            </p>
          </RLDAccordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesOurTechnology;
