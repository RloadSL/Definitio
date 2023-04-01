import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import OurTechnologyAnim from './OurTechnologyAnim'
import style from './our-technology.module.scss'
import gsap, { Power2 } from 'gsap';

interface OurTechnologyProps {
}

const OurTechnology = ({ }: OurTechnologyProps) => {
  useEffect(() => {
    gsap.from('.factory', {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourtechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.technology_shield', {
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourtechnology_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    // gsap.from('.shield', {
    //   y: -120,
    //   ease: Power2.easeInOut,
    //   duration: 2,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".animation",
    //     scrub: 1,
    //     markers: true,
    //     start: "50px center",
    //     end: "400px center",
    //   },
    // });
    // gsap.from('.details', {
    //   y: 120,
    //   ease: Power2.easeInOut,
    //   duration: 2,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".animation",
    //     scrub: 1,
    //     markers: true,
    //     start: "50px 50%",
    //     end: "400px 90%",
    //   },
    // });
  }, [])

  return (
    <section className={style.ourtechnology}>
      <div className={`${style.content} ourtechnology_animation`}>
        <div className={style.ourtechnology_image}>
          <OurTechnologyAnim />
        </div>
        <div className={style.ourtechnology_text}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.ourtechnology.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.ourtechnology.text' />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default OurTechnology