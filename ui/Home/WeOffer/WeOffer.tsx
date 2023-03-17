import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './HeroAnim'
import style from './we-offer.module.scss'

interface WeOfferProps {
}

const WeOffer = ({ }: WeOfferProps) => {
  return (
    <main className={style.weoffer}>
      <div className={style.content}>
        <div className={style.weoffer_text}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.ourtechnology.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.ourtechnology.text' />
            </p>
          </article>
        </div>
        <div className={style.weoffer_image}>
          {/* <HeroAnim /> */}
        </div>
      </div>
    </main>
  )
}

export default WeOffer