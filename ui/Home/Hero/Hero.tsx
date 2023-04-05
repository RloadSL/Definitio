import ButtonApp from "@/components/ButtonApp";
import useComponentAnimations from "@/hooks/animations.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import HeroAnim from "./HeroAnim";
import style from "./hero.module.scss";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";

interface HeroProps {
  onClick: Function;
}

/**
 * Home hero section component
 * @returns
 */

const Hero = ({ onClick }: HeroProps) => {
  const { homeAnim } = useComponentAnimations();

  const homeRef = useRef<null | HTMLDivElement>(null);
  const textTitle = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    homeAnim(homeRef, textTitle);
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
    <main className={`${style.hero} hero`}>
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
                id="page.home.hero.h1"
                values={{
                  b: (children) => <span>{children}</span>
                }}
              />
            </h1>
            <div className="heroText_animation">
              <p>
                <FormattedMessage id="page.home.hero.text" />
              </p>
              <ButtonApp labelID="page.home.hero.button" onClick={onClick} />
            </div>
          </article>
        </div>
        <div className={style.hero_image}>
          <HeroAnim />
        </div>
      </div>
    </main>
  );
};

export default Hero;
