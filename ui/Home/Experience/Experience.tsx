import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import style from './experience.module.scss'
import ExperienceAnim from './ExperienceAnim'
import gsap, { Power2 } from 'gsap';


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
        trigger: ".experience_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
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
        trigger: ".experience_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
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
  }, [])

  return (
    <section className={style.experience}>
      <div className={`${style.content} experience_animation`}>
        <div className={style.experience_text}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.experience.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.experience.text' />
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