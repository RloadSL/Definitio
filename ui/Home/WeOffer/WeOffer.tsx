import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './WeOfferAnim'
import style from './we-offer.module.scss'
import WeOfferAnim from './WeOfferAnim'
import gsap, { Power2 } from 'gsap';
import Image from 'next/image';
import cube1 from '../../../assets/img/cube.svg'



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
    gsap.from('.weofferText_animation', {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".weofferText_animation",
        start: "top center",
        end: "bottom center",
      },
    });
    // gsap.to('.cube1', {
    //   y: -600,
    //   duration: 6,
    //   stagger: { each: 0.4, ease: Power2.easeInOut },
    //   scrollTrigger: {
    //     trigger: ".cube1",
    //     // start: "top center",
    //     // end: "bottom center",
    //     scrub:1
    //   },
    // });
    // gsap.to('.cube2', {
    //   y: -100,
    //   duration: 5,
    //   stagger: { each: 0.4, ease: Power2.easeInOut },
    //   scrollTrigger: {
    //     trigger: ".cube2",
    //     // start: "top center",
    //     // end: "bottom center",
    //     scrub:1
    //   },
    // });
  }, [])

  return (
    <section className={style.weoffer}>
            <div className={`${style.cube1} cube1`}>
      <Image src={cube1} alt={''} />
      </div>
      <div className={`${style.cube2} cube2`}>
      <Image src={cube1} alt={''} />
      </div>
      <div className={`${style.content} animation`}>
        <div className={`${style.weoffer_text} weofferText_animation`}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.weoffer.h2' />
            </h2>
            <p>
              <FormattedMessage
                id="page.home.weoffer.text"
                values={{
                  b: children => <b>{children}</b>,
                  // p: children => <p>{children}</p>
                }}
              />
            </p>
            <p>
              {/*@MARIA OJO aqui tienes que ver como pasar el p al format text*/}
              <FormattedMessage
                id="page.home.weoffer.text2"
                values={{
                  b: children => <b>{children}</b>,
                  // p: children => <p>{children}</p>
                }}
              />
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