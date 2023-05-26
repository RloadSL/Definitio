import React from 'react'
import style from './weoffer-anim.module.scss'
import Image from 'next/image';
import boy from '../../../../assets/img/home/we_offer/boy.svg'
import circle from "../../../../assets/img/circle_b.svg";
import shield from '../../../../assets/img/home/we_offer/shield.svg'
import graphic from '../../../../assets/img/home/we_offer/graphic.svg'
import details from '../../../../assets/img/home/we_offer/small_details.svg'

const WeOfferAnim = () => {
  return (
    <div className={style.wrapper}>
      <canvas width={858} height={569}/>
      <div className={`${style.boy} boy`}>
        <Image src={boy} alt={''} />
      </div>
      <div className={style.boyBg_circle}>
        <Image src={circle} alt={''} />
      </div>
       <div className={`${style.boyBg_shield} shield`}>
          <Image src={shield} alt={''} />
        </div>
        <div className={`${style.boyBg_window} window`}>
          <Image src={graphic} alt={''} />
        </div>
        <div className={`${style.boyBg_details} details`}>
          <Image src={details} alt={''} />
        </div>
    </div>
  )
}

export default WeOfferAnim;

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