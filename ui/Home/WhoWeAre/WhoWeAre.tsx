import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import style from './who-we-are.module.scss'
import WhoweareAnim from './WhoweareAnim'
import Image from 'next/image';
import gsap, {Power2} from 'gsap';
import useComponentAnimations from '@/hooks/animations.hooks';


interface WhoWeAreProps {
}

const WhoWeAre = ({}: WhoWeAreProps) => {

  useEffect(() => {
      gsap.from('.buildingTop', {
        y: 100,
        ease: Power2.easeInOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".buildingTop",
          scrub: 1,
          start: "top 70%",
          end: "bottom 80%",
        },
      });
      gsap.to('.building2', {
        y: -60,
        ease: Power2.easeInOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".building2",
          scrub: 1,
          start: "top 70%",
          end: "bottom 80%",
        },
      });
      gsap.from('.building3', {
        y: 30,
        ease: Power2.easeInOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".building2",
          scrub: 1,
          start: "top 70%",
          end: "bottom 80%",
        },
      });
      gsap.from('.whoweareText_animation', {
        x: 80,
        opacity: 0,
        scrollTrigger: {
          trigger: ".whoweareText_animation",
          start: "top center",
          end: "bottom center",
        },
      });
      gsap.from('.dubri', {
        x: -80,
        opacity: 0,
        scrollTrigger: {
          trigger: ".dubri",
          start: "top 70%",
          end: "bottom 80%",
          scrub:1
        },
      });
  }, [])
  
  return (
    <section className={style.whoweare} >
        <div className={style.content}>
          <div className={style.whoweare_image}>
            <WhoweareAnim />
          </div>
          <div className={`${style.whoweare_text} whoweareText_animation`} >
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.whoweare.h2' />
            </h2>
            <p>
              <FormattedMessage
                id="page.home.whoweare.text"
                values={{
                  b: children => <span>{children}</span>
                }}
              />
            </p>
          </div>
        </div>
      </section>
  )
}

export default WhoWeAre