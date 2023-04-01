import React from 'react'
import style from './ourTechnology-anim.module.scss'
import Image from 'next/image';
import factory from '../../../../assets/img/home/our_technology/factory.svg'
import factoryPart from '../../../../assets/img/home/our_technology/factory_part.svg'
import robots from '../../../../assets/img/home/our_technology/robot.svg'
import gold from '../../../../assets/img/home/our_technology/gold.svg'
import shield from '../../../../assets/img/home/our_technology/shield.svg'
import stone from '../../../../assets/img/home/our_technology/stone.svg'


const OurTechnologyAnim = () => {
  return (
    <div className={style.wrapper}>
      <canvas width={640} height={715}/>
      <div className={`${style.factory} factory`}>
      <div className={style.factory_bg}>
        <Image src={factory} alt={''} />
      </div>
      <div className={style.factory_part}>
        <Image src={factoryPart} alt={''} />
      </div>
      <div className={style.gold}>
          <Image src={gold} alt={''} />
        </div>
      </div>
      <div className={`${style.stone1} stone1`}>
          <Image src={stone} alt={''} />
        </div> 
        <div className={`${style.stone2} stone2`}>
          <Image src={stone} alt={''} />
        </div>  
      <div className={`${style.robot1} robot1`}>
        <Image src={robots} alt={''} />
      </div>
      <div className={`${style.robot2} robot2`}>
        <Image src={robots} alt={''} />
      </div>

        <div className={`${style.technology_shield} technology_shield`}>
          <Image src={shield} alt={''} />
        </div> 
    </div>
  )
}

export default OurTechnologyAnim;

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