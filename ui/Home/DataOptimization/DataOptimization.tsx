import ButtonApp from '@/components/RLDButton'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import DataOptimizationAnim from './DataOptimizationAnim'
import style from './data-optimization.module.scss'
import gsap, { Power2 } from 'gsap';

interface DataOptimizationProps {
}

const DataOptimization = ({ }: DataOptimizationProps) => {
  useEffect(() => {
    gsap.from('.data_windowBlue', {
      x: -20,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataoptimization",
        scrub: 1,
        start: "top center",
        end: "top center",
      },
    });
    gsap.from('.data_window1', {
      x:100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataoptimization",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.data_window2', {
      x:50,
      ease: Power2.easeInOut,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataOptimization_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.data_window3', {
      y:-80,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataOptimization_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.blueSpot', {
      scale:0,
      ease: Power2.easeInOut,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataOptimization_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.gameSpot', {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataOptimization_animation",
        scrub: 1,
        start: "50px center",
        end: "300px center",
      },
    });
    gsap.from('.dataoptimizationText_animation', {
      x: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dataoptimization",
        start: "top center",
        end: "bottom center",
      },
    });
  }, [])
  return (
    <section className={`${style.dataoptimization} dataoptimization`}>
      <div className={`${style.content} dataOptimization_animation`}>
        <div className={style.dataoptimization_image}>
          <DataOptimizationAnim />
        </div>
        <div className={`${style.dataoptimization_text} dataoptimizationText_animation`}>
          <article>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.dataoptimization.h2' />
            </h2>
            <p>
              <FormattedMessage
                id="page.home.dataoptimization.text"
                values={{
                  b: children => <span>{children}</span>,
                }}
              />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DataOptimization