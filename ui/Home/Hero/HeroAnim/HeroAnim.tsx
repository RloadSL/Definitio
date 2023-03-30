import React from 'react'
import style from './hero-anim.module.scss'
import Image from 'next/image';
import manBody from '../../../../assets/img/home/hero/man_body.svg'
import manHead from '../../../../assets/img/home/hero/man_head.svg'
import circle from '../../../../assets/img/home/hero/circle.svg'
import mobile from '../../../../assets/img/home/hero/mobile.svg'
import graphic from '../../../../assets/img/home/hero/graphic.svg'

const HeroAnim = () => {
  
  return (
    <div className={style.wrapper}>
      <canvas width={725} height={655}/>
      <div className={`${style.man} man`}>
        <div className={style.man_head}>
          <div className={style.man_head__eyes}></div>
          <Image src={manHead} alt={''} />
        </div>
        <div className={style.man_body}>
          <Image src={manBody} alt={''} />
        </div>      
      </div>
      <div className={style.manBg_circle}>
          <Image src={circle} alt={''} />
        </div>
        <div className={style.manBg_mobile}>
          <Image src={mobile} alt={''} />
        </div>
        <div className={style.manBg_graphic}>
          <Image src={graphic} alt={''} />
        </div>
      {/* <div className={style.manBg}>

      </div> */}
    </div>
  )
}

export default HeroAnim;

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