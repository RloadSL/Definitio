import ButtonApp from '@/components/RLDButton'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import style from './experience.module.scss'
import ExperienceAnim from './ExperienceAnim'
import gsap, { Power2 } from 'gsap';
import Image from 'next/image';
import cube1 from '../../../assets/img/cube.svg'




interface ExperienceProps {
}

const Experience = ({ }: ExperienceProps) => {
  useEffect(() => {
    gsap.from('.girl', {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        scrub: 1,
        start: "top center",
        end: "top center",
      },
    });
    gsap.from('.bubble1', {
      x:100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.bubble2', {
      x:50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.exp_window', {
      y:-80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        scrub: 1,
        start: "top center",
        end: "top center",
      },
    });
    gsap.from('.people', {
      scale:0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.experienceText_animation', {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        start: "top center",
        end: "top center",
      },
    });
  }, [])

  return (
    <section className={`${style.experience} experience`}>
            <div className={`${style.cube1} cube1`}>
      <Image src={cube1} alt={''} />
      </div>
      <div className={`${style.cube2} cube2`}>
      <Image src={cube1} alt={''} />
      </div>
      <div className={`${style.content} experience_animation`}>
        <div className={`${style.experience_text} experienceText_animation`}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.experience.h2' />
            </h2>
            <p>
              <FormattedMessage
                id="page.home.experience.text"
                values={{
                  b: children => <b>{children}</b>,
                }}
              />
            </p>
          </article>
        </div>
        <div className={style.experience_image}>
          <ExperienceAnim/>
        </div>
      </div>
    </section>
  )
}

export default Experience