import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText';

const useComponentAnimations = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
  }, []);

  const homeAnim = (homeRef:any,textTitle:any) => {
    let textAnimation = gsap.timeline();
    let animationHero = gsap.timeline();

    let mySplitText = new SplitText(textTitle.current, { type: "lines" });
    let lines = mySplitText.lines
    let ctx = gsap.context(() => {
      textAnimation.from(lines, {
        opacity: 0,
        y: -50,
        stagger: {
          each: 0.07
        }
      });
      animationHero.to(".man", {
        y: -400,
        // ease: Power2.easeInOut,
        duration: 10,
        opacity:0,
        // scrollTrigger: {
        //   // trigger: ".csic-section-science",
        //   // yPercent: -40,
        //   scrub: 1,
        //   // markers: true,
        // },
      });



    }, homeRef);

    return () => ctx.revert();
  }

  let tlMobile = useRef(gsap.timeline({paused: true})).current;

  const toggleMobileNav = () => {
    tlMobile.reversed(!tlMobile.reversed());
  }

  const mobileNavAnimation = () => {
    tlMobile.to('.ul-menu', {
      duration: 1,
      opacity: 1,
      height: '100vh', // change this to 100vh for full-height menu
      ease: 'expo.inOut',
    })
    tlMobile.from('.li-menu', {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut',
    }, "-=0.5");
    
    console.log('entro',tlMobile.reverse())
    tlMobile.reverse();
  }

  return { homeAnim, mobileNavAnimation,toggleMobileNav }
}

export default useComponentAnimations;