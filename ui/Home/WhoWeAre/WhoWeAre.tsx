import React from 'react'
import { FormattedMessage } from 'react-intl'
import style from './who-we-are.module.scss'
import WhoweareAnim from './WhoweareAnim'
import Image from 'next/image';


interface WhoWeAreProps {
}

const WhoWeAre = ({}: WhoWeAreProps) => {
  return (
    <section className={style.whoweare} >
        <div className={style.content}>
          <div className={style.whoweare_image}>
            <WhoweareAnim />
          </div>
          <div className={style.whoweare_text} >
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.whoweare.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.whoweare.text' />
            </p>
          </div>
        </div>
      </section>
  )
}

export default WhoWeAre