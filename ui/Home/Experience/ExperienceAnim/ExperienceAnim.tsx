import React from 'react'
import style from './experience-anim.module.scss'
import Image from 'next/image';
import girl from '../../../../assets/img/home/experience/girl.svg'
import bubble1 from '../../../../assets/img/home/experience/bubble1.svg'
import bubble2 from '../../../../assets/img/home/experience/bubble2.svg'
import circle from '../../../../assets/img/circle_l.svg'
import graphic from '../../../../assets/img/home/experience/graphic.svg'
import mobile from '../../../../assets/img/home/experience/mobile.svg'
import people from '../../../../assets/img/home/experience/people.svg'
import window from '../../../../assets/img/home/experience/window.svg'


const ExperienceAnim = () => {
  return (
    <div className={style.wrapper}>
      <canvas width={670} height={615}/>
      <div className={`${style.girl} girl`}>
        <Image src={girl} alt={''} />
      </div>
       <div className={style.circle}>
        <Image src={circle} alt={''} />
      </div>
       <div className={`${style.bubble1} bubble1`}>
          <Image src={bubble1} alt={''} />
        </div>
        <div className={`${style.bubble2} bubble2`}>
          <Image src={bubble2} alt={''} />
        </div>
        <div className={`${style.graphic} graphic`}>
          <Image src={graphic} alt={''} />
        </div>
        <div className={`${style.exp_window} exp_window`}>
          <Image src={window} alt={''} />
        </div>
        <div className={style.mobile}>
          <Image src={mobile} alt={''} />
        </div>
        <div className={`${style.people} people`}>
          <Image src={people} alt={''} />
        </div>
    </div>
  )
}

export default ExperienceAnim;

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