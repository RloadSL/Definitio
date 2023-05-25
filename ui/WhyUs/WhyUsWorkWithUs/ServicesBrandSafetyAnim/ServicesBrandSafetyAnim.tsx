import React, { useEffect } from 'react'
import style from './services-brand-safety-anim.module.scss'
import Image from 'next/image';
import gsap, { Power2 } from "gsap";
import girl from '../../../../assets/img/services/brand_safety/girl.svg'
import cloud from '../../../../assets/img/services/brand_safety/cloud.svg'
import code from '../../../../assets/img/services/brand_safety/code.svg'
import lock from '../../../../assets/img/services/brand_safety/lock.svg'
import screen from '../../../../assets/img/services/brand_safety/screen.svg'
import security from '../../../../assets/img/services/brand_safety/security.svg'
import circle from '../../../../assets/img/circle.svg'


const ServicesBrandSafetyAnim = () => {
  useEffect(() => {
    gsap.from(".bransafetyAnim_girl", {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".bransafetyAnim_code", {
      x: 100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".bransafetyAnim_cloud", {
      x: 50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".bransafetyAnim_lock", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".bransafetyAnim_security", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".bransafetyAnim_screen", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bransafetyAnim",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
  }, []);
  return (
    <div className={`${style.wrapper} bransafetyAnim`}>
      <canvas width={655} height={565}/>
      <div className={`${style.girl} bransafetyAnim_girl`}>
          <Image src={girl} alt={''} />
        </div> 
      <div className={`${style.code} bransafetyAnim_code`}>
          <Image src={code} alt={''} />
        </div> 
        <div className={`${style.cloud} bransafetyAnim_cloud`}>
          <Image src={cloud} alt={''} />
        </div> 
        <div className={`${style.lock} bransafetyAnim_lock`}>
          <Image src={lock} alt={''} />
        </div> 
      <div className={`${style.screen} bransafetyAnim_screen`}>
        <Image src={screen} alt={''} />
      </div>
      <div className={`${style.security} bransafetyAnim_security`}>
        <Image src={security} alt={''} />
      </div> 
    </div>
  )
}

export default ServicesBrandSafetyAnim;

 // gsap.from(
      //   textSpan.current,
      //   {
      //     opacity: 0,
      //     y: -50,
      //     stagger: 0.05,
      //   }
      // );

      // let textAnimation = gsap.timeline();
      //   textAnimation.from(textSpan.current, {
      //     opacity: 0,
      //     y: -50,
      //    stagger: { 
      //     each: 0.07 
      //    }
      //   });

    

      // gsap.from(
      //   whoText.current,
      //   {
      //     opacity: 0,
      //     y: -50,
      //     scrollTrigger: {
      //       trigger: whoweare.current,
      //       start: "top 30%",
      //       end: "bottom center",
      //     },
      //   }
      // );
      
     //}, homeRef);

     //return () => ctx.revert();
    //}