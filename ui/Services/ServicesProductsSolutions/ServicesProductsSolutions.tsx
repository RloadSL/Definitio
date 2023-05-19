import ButtonApp from "@/components/ButtonApp";
import useComponentUtils from "@/hooks/component.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import style from "./services-products-solutions.module.scss";
import gsap, { Power2 } from "gsap";
import SliderApp from "@/ui/About/SliderApp";
import ServicesSlider from "./ServicesSlider";

interface ServicesProductsSolutionsProps {}

const ServicesProductsSolutions = ({}: ServicesProductsSolutionsProps) => {
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
  //       trigger: ".dataOptimization_animation",
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
  //       trigger: ".dataOptimization_animation",
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
  //       trigger: ".dataOptimization_animation",
  //       scrub: 1,
  //       start: "50px center",
  //       end: "300px center"
  //     }
  //   });
  //   gsap.from(".gameSpot", {
  //     scale: 0,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".dataOptimization_animation",
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
    <section className={`${style.productSolutions} dataOptimization`}>
      <div className={`${style.content} dataOptimization_animation`}>
        <div className={style.productSolutions_image}>{/* <OurTechnologyAnim /> */}anima</div>
        <div className={`${style.productSolutions_text} ourTechnologyText_animation`}>
          <ServicesSlider/>
        </div>
      </div>
    </section>
  );
};

export default ServicesProductsSolutions;
