import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import DataOptimizationAnim from './DataOptimizationAnim'
import style from './data-optimization.module.scss'

interface DataOptimizationProps {
}

const DataOptimization = ({ }: DataOptimizationProps) => {
  return (
    <section className={style.dataoptimization}>
      <div className={style.content}>
        <div className={style.dataoptimization_image}>
          <DataOptimizationAnim />
        </div>
        <div className={style.dataoptimization_text}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.dataoptimization.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.dataoptimization.text' />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DataOptimization