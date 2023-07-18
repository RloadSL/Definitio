import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import style from "./we-offer.module.scss";
import WeOfferAnim from "./WeOfferAnim";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";

interface WeOfferProps {}

/**
 * We Offer hero section component
 * @returns
 */

const WeOffer = ({}: WeOfferProps) => {
  //configuration for scroll trigger
  const scrollTriggerConfig = {
    trigger: ".weoffer",
    scrub: 1,
    start: "10% center",
    end: "20% center"
  };

  const getDefaultConfig = () => {
    return scrollTriggerConfig;
  };

  const getCustomConfig = (options?: any) => {
    let customConfig = getDefaultConfig();
    return { ...customConfig, options };
  };

  useEffect(() => {
    gsap.from(".boy", {
      y: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".window", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".shield", {
      y: -120,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".details", {
      y: 120,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".weofferText_animation", {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".weoffer",
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);

  return (
    <section className={`${style.weoffer} weoffer`}>
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.content} animation`}>
        <div className={`${style.weoffer_text} weofferText_animation`}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id="page.home.weoffer.h2" />
            </h2>
            <FormattedMessage
              id="page.home.weoffer.text"
              values={{
                b: (children) => <span>{children}</span>,
                p: (children) => <p>{children}</p>
              }}
            />
          </article>
        </div>
        <div className={style.weoffer_image}>
          <WeOfferAnim />
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
