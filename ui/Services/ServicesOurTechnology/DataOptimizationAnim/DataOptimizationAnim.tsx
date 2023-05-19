import React from 'react'
import style from './dataOptimization-anim.module.scss'
import Image from 'next/image';
import circle from '../../../../assets/img/home/data_optimization/circle.svg'
import blueSpot from '../../../../assets/img/home/data_optimization/blue_spot.svg'
import yellowSpot from '../../../../assets/img/home/data_optimization/yellow_spot.svg'
import mobiles from '../../../../assets/img/home/data_optimization/mobiles.svg'
import window from '../../../../assets/img/home/data_optimization/window.svg'
import window1 from '../../../../assets/img/home/data_optimization/data_window1.svg'
import window2 from '../../../../assets/img/home/data_optimization/data_window2.svg'
import window3 from '../../../../assets/img/home/data_optimization/data_window3.svg'
import gameSpot from '../../../../assets/img/home/data_optimization/game.svg'



const DataOptimizationAnim = () => {
  return (
    <div className={style.wrapper}>
      <canvas width={640} height={485}/>
      <div className={`${style.data_windowBlue} data_windowBlue`}>
          <Image src={window} alt={''} />
        </div> 
      <div className={`${style.data_window1} data_window1`}>
          <Image src={window1} alt={''} />
        </div> 
        <div className={`${style.data_window2} data_window2`}>
          <Image src={window2} alt={''} />
        </div> 
        <div className={`${style.data_window3} data_window3`}>
          <Image src={window3} alt={''} />
        </div> 
        <div className={style.circle}>
          <Image src={circle} alt={''} />
        </div>  
      <div className={style.mobiles}>
        <Image src={mobiles} alt={''} />
      </div>
      <div className={`${style.blueSpot} blueSpot`}>
        <Image src={blueSpot} alt={''} />
      </div>
       <div className={style.yellowSpot}>
          <Image src={yellowSpot} alt={''} />
        </div> 
        <div className={`${style.gameSpot} gameSpot`}>
          <Image src={gameSpot} alt={''} />
        </div> 
    </div>
  )
}

export default DataOptimizationAnim;

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