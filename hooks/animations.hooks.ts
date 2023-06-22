import { useEffect, useRef, useState } from "react";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const useComponentAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
  }, []);

  const fadeInAnim = (className: string, duration:number,yAxis?: number,xAxis?: number) => {
    gsap.from(className, {
      y: yAxis,
      x: xAxis,
      ease: Power2.easeInOut,
      duration: duration,
      opacity: 0,
    });
  };

  const homeAnim = (homeRef: any, textTitle: any) => {
    let textAnimation = gsap.timeline();
    let animationHero = gsap.timeline();

    let mySplitText = new SplitText(textTitle.current, { type: "lines" });
    let lines = mySplitText.lines;
    let ctx = gsap.context(() => {
      textAnimation.from(lines, {
        opacity: 0,
        y: -50,
        stagger: {
          each: 0.07,
        },
      });
    }, homeRef);

    return () => ctx.revert();
  };

  let tlMobile = useRef(gsap.timeline({ paused: true })).current;

  const toggleMobileNav = () => {
    tlMobile.reversed(!tlMobile.reversed());
  };

  const mobileNavAnimation = () => {
    tlMobile.to(".ul-menu", {
      duration: 1,
      opacity: 1,
      height: "100vh", // change this to 100vh for full-height menu
      ease: "expo.inOut",
    });
    tlMobile.from(
      ".li-menu",
      {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    tlMobile.reverse();
  };

  return { homeAnim, mobileNavAnimation, toggleMobileNav, fadeInAnim };
};

export default useComponentAnimations;
