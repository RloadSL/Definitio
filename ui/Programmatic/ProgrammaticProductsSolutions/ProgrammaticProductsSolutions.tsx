import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import style from "./programmatic-products-solutions.module.scss";
import gsap, { Power2 } from "gsap";
import ServicesSlider from "./ServicesSlider";
import Link from "next/link";

const ProgrammaticProductsSolutions = () => {
  useEffect(() => {
    gsap.from(".productSolutions_text", {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".productSolutions",
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);
  return (
    <section className={`${style.productSolutions} productSolutions`}>
      <div className={`${style.content} productSolutions_animation`}>
        <div className={`${style.productSolutions_text} productSolutions_text`}>
          <article>
            <h2 className="titleButton">
              <FormattedMessage id="page.services.productssolutions.title" />
            </h2>
            <div>
              <FormattedMessage
                id="page.services.productssolutions.text"
                values={{
                  p: (children) => <p>{children}</p>
                }}
              />
            </div>
          </article>
          <div className={style.buttonBlock}>
            <Link className="button button-primary" href="/contact">
              <span>
                <FormattedMessage id="btn.label.getInTouch" />
              </span>
            </Link>
          </div>
        </div>
        <div className={`${style.productSolutions_slider} ourTechnologyText_animation`}>
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};

export default ProgrammaticProductsSolutions;
