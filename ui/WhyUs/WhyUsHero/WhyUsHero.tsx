import useComponentAnimations from "@/hooks/animations.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import HeroAnim from "./HeroAnim";
import style from "./whyus-hero.module.scss";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";

/**
 * Why Us hero section component
 */

const WhyUsHero = () => {
  const { homeAnim } = useComponentAnimations();

  const decoration = useRef<null | HTMLDivElement>(null);
  const textTitle = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    homeAnim(decoration, textTitle);
    gsap.from(".heroText_animation", {
      x: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0
    });
    gsap.to(".cube1", {
      y: -600,
      duration: 6,
      stagger: { each: 0.4, ease: Power2.easeInOut },
      scrollTrigger: {
        trigger: ".cube1",
        scrub: 1
      }
    });
    gsap.to(".cube2", {
      y: -100,
      duration: 5,
      stagger: { each: 0.4, ease: Power2.easeInOut },
      scrollTrigger: {
        trigger: ".cube2",
        scrub: 1
      }
    });
  }, []);

  return (
    <div className={`${style.hero} hero`}>
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={style.content}>
        <div className={style.hero_text}>
          <article>
            <h1 ref={textTitle}>
              <FormattedMessage
                id="page.whyus.hero.h1"
                values={{
                  span: (children) => <span>{children}</span>
                }}
              />
            </h1>
            <div className="heroText_animation">
              <FormattedMessage
                id="page.whyus.hero.text"
                values={{
                  b: (children) => <b>{children}</b>,
                  p: (children) => <p>{children}</p>
                }}
              />
            </div>
          </article>
        </div>
        <div className={style.hero_image}>
          <HeroAnim />
        </div>
      </div>
    </div>
  );
};

export default WhyUsHero;
