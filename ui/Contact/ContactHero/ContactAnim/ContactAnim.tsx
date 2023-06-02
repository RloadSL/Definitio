import React, { useEffect } from "react";
import Image from "next/image";
import style from "./contact-anim.module.scss";
import mobile from "../../../../assets/img/contact/mobile.svg";
import girl from "../../../../assets/img/contact/girl.svg";
import boy from "../../../../assets/img/contact/boy.svg";
import bubble1 from "../../../../assets/img/contact/bubble1.svg";
import bubble2 from "../../../../assets/img/contact/bubble2.svg";
import window from "../../../../assets/img/contact/window.svg";
import blueIcon from "../../../../assets/img/contact/blueIcon.svg";
import circle from "../../../../assets/img/circle_l.svg";

import gsap, { Power2 } from "gsap";

/**
 * Component to handle the animated graphics of the section
*/

const ContactAnim = () => {
  useEffect(() => {
    gsap.from(".contactAnim_boy", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0
    });
    gsap.from(".contactAnim_girl", {
      x: -30,
      ease: Power2.easeInOut,
      duration: .6,
    });
    gsap.from(".contactAnim_mobile", {
      y: 40,
      ease: Power2.easeInOut,
      duration: .6,
      opacity: 0
    });
    gsap.from(".contactAnim_bubble1", {
      y: -50,
      ease: Power2.easeInOut,
      duration: .8,
      opacity: 0
    });
    gsap.from(".contactAnim_bubble2", {
      y: -50,
      ease: Power2.easeInOut,
      duration: .8,
      opacity: 0
    });
    gsap.from(".contactAnim_blueIcon", {
      y: -50,
      ease: Power2.easeInOut,
      duration: .8,
      opacity: 0
    });
  }, []);
  return (
    <div className={style.contactAnim}>
      <canvas width={818} height={578} />
      <div className={`${style.boy} contactAnim_boy`}>
        <Image src={boy} alt={""} />
      </div>
      <div className={`${style.girl} contactAnim_girl`}>
        <Image src={girl} alt={""} />
      </div>
      <div className={`${style.window} contactAnim_window`}>
        <Image src={window} alt={""} />
      </div>
      <div className={`${style.mobile} contactAnim_mobile`}>
        <Image src={mobile} alt={""} />
      </div>
      <div className={`${style.blueIcon} contactAnim_blueIcon`}>
        <Image src={blueIcon} alt={""} />
      </div>
      <div className={`${style.bubble1} contactAnim_bubble1`}>
        <Image src={bubble1} alt={""} />
      </div>
      <div className={`${style.bubble2} contactAnim_bubble2`}>
        <Image src={bubble2} alt={""} />
      </div>
      <div className={`${style.circle} circle`}>
        <Image src={circle} alt={""} />
      </div>
    </div>
  );
};

export default ContactAnim;
