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
    gsap.from('.ourtechnologyText_animation', {
      x: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourtechnology",
        start: "top center",
        end: "bottom center",
      },
    });
  }, [])

  return (
    <section className={`${style.ourtechnology} ourtechnology`}>
      <div className={`${style.content} ourtechnology_animation`}>
        <div className={style.ourtechnology_image}>
          <OurTechnologyAnim />
        </div>
        <div className={`${style.ourtechnology_text} ourtechnologyText_animation`}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.ourtechnology.h2' />
            </h2>
            <p>
              <FormattedMessage
                id="page.home.ourtechnology.text"
                values={{
                  b: children => <b>{children}</b>,
                }}
              />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default OurTechnology