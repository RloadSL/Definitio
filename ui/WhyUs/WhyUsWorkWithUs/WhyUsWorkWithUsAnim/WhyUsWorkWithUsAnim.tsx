import React, { useEffect } from "react";
import style from "./whyusworkwithus-anim.module.scss";
import Image from "next/image";
import gsap, { Power2 } from "gsap";
import girl from "../../../../assets/img/whyus/workwithus/girl.svg";
import boy from "../../../../assets/img/whyus/workwithus/boy.svg";
import bubble from "../../../../assets/img/whyus/workwithus/bubble.svg";
import yellowCircle from "../../../../assets/img/whyus/workwithus/circle.svg";
import graphic from "../../../../assets/img/whyus/workwithus/graphic.svg";
import list from "../../../../assets/img/whyus/workwithus/list.svg";
import switcher from "../../../../assets/img/whyus/workwithus/switch.svg";
import window from "../../../../assets/img/whyus/workwithus/window.svg";
import circle from "../../../../assets/img/circle_b.svg";

const WhyUsWorkWithUsAnim = () => {
  useEffect(() => {
    gsap.from(".workwithus_girl", {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".workwithus_boy", {
      x: 100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".workwithus_graphic", {
      x: 50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".workwithus_list", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".workwithus_bubble", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".workwithus_window", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workwithus",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
  }, []);
  return (
    <div className={`${style.workwithus} workwithus`}>
      <canvas width={790} height={710} />
      <div className={`${style.workwithus_girl} workwithus_girl`}>
        <Image src={girl} alt={""} />
      </div>
      <div className={`${style.workwithus_boy} workwithus_boy`}>
        <Image src={boy} alt={""} />
      </div>
      <div className={`${style.workwithus_bubble} workwithus_bubble`}>
        <Image src={bubble} alt={""} />
      </div>
      <div className={`${style.workwithus_yellowCircle} workwithus_yellowCircle`}>
        <Image src={yellowCircle} alt={""} />
      </div>
      <div className={`${style.workwithus_graphic} workwithus_graphic`}>
        <Image src={graphic} alt={""} />
      </div>
      <div className={`${style.workwithus_list} workwithus_list`}>
        <Image src={list} alt={""} />
      </div>
      <div className={`${style.workwithus_switcher} workwithus_switcher`}>
        <Image src={switcher} alt={""} />
      </div>
      <div className={`${style.workwithus_window} workwithus_window`}>
        <Image src={window} alt={""} />
      </div>
      <div className={`${style.workwithus_circle} workwithus_window`}>
        <Image src={circle} alt={""} />
      </div>
    </div>
  );
};

export default WhyUsWorkWithUsAnim;