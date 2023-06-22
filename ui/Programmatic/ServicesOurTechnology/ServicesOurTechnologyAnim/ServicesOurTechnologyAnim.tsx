import React, { useEffect } from 'react'
import style from './services-our-technology-anim.module.scss'
import Image from 'next/image';
import gsap, { Power2 } from "gsap";
import girl from '../../../../assets/img/services/our_technology/girl.svg'
import mobile1 from '../../../../assets/img/services/our_technology/mobile1.svg'
import mobile2 from '../../../../assets/img/services/our_technology/mobile2.svg'
import screen from '../../../../assets/img/services/our_technology/screen.svg'
import security from '../../../../assets/img/services/our_technology/security.svg'
import circle from '../../../../assets/img/circle_b.svg'


const ServicesOurTechnologyAnim = () => {
  useEffect(() => {
    gsap.from(".decorationWrapper_girl", {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".decorationWrapper",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".decorationWrapper_mobile1", {
      x: 100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".decorationWrapper",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".decorationWrapper_mobile2", {
      x: 50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".decorationWrapper",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".decorationWrapper_screen", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".decorationWrapper",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
    gsap.from(".decorationWrapper_security", {
      scale: 0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".decorationWrapper",
        scrub: 1,
        start: "50px center",
        end: "300px center"
      }
    });
  }, []);
  return (
    <div className={`${style.wrapper} decorationWrapper`}>
      <canvas width={820} height={635}/>
      <div className={`${style.decorationWrapper_girl} decorationWrapper_girl`}>
          <Image src={girl} alt={''} />
        </div> 
      <div className={`${style.decorationWrapper_mobile1} decorationWrapper_mobile1`}>
          <Image src={mobile1} alt={''} />
        </div> 
        <div className={`${style.decorationWrapper_mobile2} decorationWrapper_mobile2`}>
          <Image src={mobile2} alt={''} />
        </div> 
        <div className={`${style.decorationWrapper_screen} decorationWrapper_screen`}>
          <Image src={screen} alt={''} />
        </div> 
      <div className={`${style.decorationWrapper_security} decorationWrapper_security`}>
        <Image src={security} alt={''} />
      </div>
        <div className={style.circle}>
          <Image src={circle} alt={''} />
        </div>  
    </div>
  )
}

export default ServicesOurTechnologyAnim;