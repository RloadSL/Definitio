import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import OurTechnologyAnim from './OurTechnologyAnim'
import style from './our-technology.module.scss'

interface OurTechnologyProps {
}

const OurTechnology = ({ }: OurTechnologyProps) => {
  return (
    <section className={style.ourtechnology}>
      <div className={style.content}>
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