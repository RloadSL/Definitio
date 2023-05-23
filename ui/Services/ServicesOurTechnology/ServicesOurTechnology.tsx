import ButtonApp from "@/components/ButtonApp";
import useComponentUtils from "@/hooks/component.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import cube1 from "../../../assets/img/cube.svg";
import style from "./services-our-technology.module.scss";
import gsap, { Power2 } from "gsap";
import RLDAccordion from "@/components/RLDAccordion";
import ServicesOurTechnologyAnim from "./ServicesOurTechnologyAnim";
import Image from "next/image";

interface ServicesOurTechnologyProps {}

const ServicesOurTechnology = ({}: ServicesOurTechnologyProps) => {
  const onClick = () => console.log("click");

  useEffect(() => {
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
      <div className={`${style.cube1}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.content} ourTechnology_animation`}>
        <div className={style.ourTechnology_image}>
          <ServicesOurTechnologyAnim />
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
          <div className={style.buttonBlock}>
            <ButtonApp
              customClass="button button-primary"
              labelID="btn.label.getStarted"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOurTechnology;
