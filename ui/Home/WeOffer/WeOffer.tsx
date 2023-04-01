import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './WeOfferAnim'
import style from './we-offer.module.scss'
import WeOfferAnim from './WeOfferAnim'
import gsap, { Power2 } from 'gsap';


interface WeOfferProps {
}

const WeOffer = ({ }: WeOfferProps) => {

  useEffect(() => {
    gsap.from('.boy', {
      y: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.window', {
      y: -80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.shield', {
      y: -120,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".animation",
        scrub: 1,
        start: "50px center",
        end: "400px center",
      },
    });
    gsap.from('.details', {
      y: 120,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".animation",
        scrub: 1,
        start: "50px 50%",
        end: "400px 90%",
      },
    });
  }, [])

  return (
    <section className={style.weoffer}>
      <div className={`${style.content} animation`}>
        <div className={style.weoffer_text}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.weoffer.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.weoffer.text' />
            </p>
          </article>
        </div>
        <div className={style.weoffer_image}>
          <WeOfferAnim />
        </div>
      </div>
    </section>
  )
}

export default WeOffer