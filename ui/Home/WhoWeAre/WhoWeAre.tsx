import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import style from "./who-we-are.module.scss";
import WhoweareAnim from "./WhoweareAnim";
import gsap, { Power2 } from "gsap";
import useComponentAnimations from "@/hooks/animations.hooks";

interface WhoWeAreProps {}

/**
 * Who we are section component
 * @returns
 */

const WhoWeAre = ({}: WhoWeAreProps) => {
  //configuration for scroll trigger
  const scrollTriggerConfig = {
    trigger: ".whoweare",
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
    gsap.from(".buildingTop", {
      y: 100,
      ease: Power2.easeInOut,
      duration: 2,
      scrollTrigger: getCustomConfig()
    });
    gsap.to(".building2", {
      y: -60,
      ease: Power2.easeInOut,
      duration: 1,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".building3", {
      y: 30,
      ease: Power2.easeInOut,
      duration: 1,
      scrollTrigger: getCustomConfig()
    });
    gsap.from(".dubri", {
      x: -80,
      opacity: 0,
      scrollTrigger: getCustomConfig({ trigger: ".dubri" })
    });
    gsap.from(".whoweareText_animation", {
      x: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".whoweare",
        start: "10% center",
        end: "20% center"
      }
    });
  }, []);

  return (
    <section className={`${style.whoweare} whoweare`}>
      <div className={style.content}>
        <div className={style.whoweare_image}>
          <WhoweareAnim />
        </div>
        <div className={`${style.whoweare_text} whoweareText_animation`}>
          <h2 className={style.titleButton}>
            <FormattedMessage id="page.home.whoweare.h2" />
          </h2>
          <p>
            <FormattedMessage
              id="page.home.whoweare.text"
              values={{
                b: (children) => <span>{children}</span>
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
