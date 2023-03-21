import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './WeOfferAnim'
import style from './we-offer.module.scss'
import WeOfferAnim from './WeOfferAnim'

interface WeOfferProps {
}

const WeOffer = ({ }: WeOfferProps) => {
  return (
    <section className={style.weoffer}>
      <div className={style.content}>
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
          <WeOfferAnim/>
        </div>
      </div>
    </section>
  )
}

export default WeOffer