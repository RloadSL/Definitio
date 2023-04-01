import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import style from './who-we-are.module.scss'
import WhoweareAnim from './WhoweareAnim'
import Image from 'next/image';
import gsap from 'gsap';


interface WhoWeAreProps {
}

const WhoWeAre = ({}: WhoWeAreProps) => {

  useEffect(() => {
      gsap.from('.building', {
        y: -80,
        // ease: Power2.easeInOut,
        // duration: 1,
        // opacity: 0,
        scrollTrigger: {
          trigger: ".building",
          // yPercent: -40,
          scrub: 1,
        },
      });
  }, [])
  
  return (
    <section className={style.whoweare} >
        <div className={style.content}>
          <div className={style.whoweare_image}>
            <WhoweareAnim />
          </div>
          <div className={style.whoweare_text} >
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.whoweare.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.whoweare.text' />
            </p>
          </div>
        </div>
      </section>
  )
}

export default WhoWeAre