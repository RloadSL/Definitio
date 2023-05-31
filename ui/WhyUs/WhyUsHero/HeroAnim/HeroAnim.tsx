import React, { useEffect } from "react";
import style from "./hero-anim.module.scss";
import Image from "next/image";
import manBody from "../../../../assets/img/whyus/hero/man_body.svg";
import manHead from "../../../../assets/img/whyus/hero/man_head.svg";
import simplifyIcon from "../../../../assets/img/whyus/simplify.svg";
import deliverIcon from "../../../../assets/img/whyus/deliver.svg";
import protectIcon from "../../../../assets/img/whyus/protect.svg";
import optimizeIcon from "../../../../assets/img/whyus/optimize.svg";
import circle from "../../../../assets/img/circle.svg";
import useComponentAnimations from "@/hooks/animations.hooks";
import gsap, { Power2 } from "gsap";
import { FormattedMessage } from "react-intl";

/**
 * Component to handle the animated graphics of the section
 * @returns
 */

const HeroAnim = () => {
  useEffect(() => {
    gsap.from(".man", {
      ease: Power2.easeInOut,
      duration: 0.5,
      opacity: 0
    });

    gsap.from(".icon", {
      scale: 0,
      ease: Power2.easeInOut,
      stagger: {
        each: 0.2
      }
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <canvas width={720} height={750} />
      <div className={`${style.man} man`}>
        <div className={style.man_head}>
          <Image src={manHead} alt={""} />
        </div>
        <div className={style.man_body}>
          <Image src={manBody} alt={""} />
        </div>
      </div>
      <div className={`${style.simplify} simplify`}>
        <Image src={simplifyIcon} alt={""} className="icon" />
        <span className={style.label}>
          <FormattedMessage id="page.whyus.hero.iconLabel1" />
        </span>
      </div>
      <div className={`${style.deliver} deliver`}>
        <Image src={deliverIcon} alt={""} className="icon" />
        <span className={style.label}>
          <FormattedMessage id="page.whyus.hero.iconLabel2" />
        </span>
      </div>
      <div className={`${style.optimize} optimize`}>
        <Image src={optimizeIcon} alt={""} className="icon" />
        <span className={style.label}>
          <FormattedMessage id="page.whyus.hero.iconLabel3" />
        </span>
      </div>
      <div className={`${style.protect} protect`}>
        <Image src={protectIcon} alt={""} className="icon" />
        <span className={style.label}>
          <FormattedMessage id="page.whyus.hero.iconLabel4" />
        </span>
      </div>
      <div className={`${style.circle} circle`}>
        <Image src={circle} alt={""} />
      </div>
    </div>
  );
};

export default HeroAnim;
