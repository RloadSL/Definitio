import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import style from './experience.module.scss'
import ExperienceAnim from './ExperienceAnim'

interface ExperienceProps {
}

const Experience = ({ }: ExperienceProps) => {
  return (
    <section className={style.experience}>
      <div className={style.content}>
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