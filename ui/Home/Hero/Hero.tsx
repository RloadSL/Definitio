import ButtonApp from '@/components/ButtonApp'
import useComponentAnimations from '@/hooks/animations.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './HeroAnim'
import style from './hero.module.scss'
import gsap, { Power2 } from 'gsap';


interface HeroProps {
  onClick: Function
}

const Hero = ({ onClick }: HeroProps) => {
  const { homeAnim } = useComponentAnimations();

  const homeRef = useRef<null | HTMLDivElement>(null);
  const whoText = useRef<null | HTMLDivElement>(null);
  const whoweare = useRef<null | HTMLDivElement>(null);
  const textTitle = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    homeAnim(homeRef,textTitle);
    gsap.from('.heroText_animation', {
      x: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
    });
  }, []);
  return (
    <main className={style.hero}>
      <div className={style.content}>
        <div className={style.hero_text}>
          <article>
            <h1 ref={textTitle}>
              <FormattedMessage
                id="page.home.top.h1"
                values={{
                  b: children => <span>{children}</span>
                }}
              />
            </h1>
            <div className='heroText_animation'>
              <p>
                <FormattedMessage id='page.home.top.text' />
              </p>
              <ButtonApp labelID='page.home.hero.button' onClick={onClick} />
            </div>

          </article>
        </div>
        <div className={style.hero_image}>
          <HeroAnim />
        </div>
      </div>
    </main>
  )
}

export default Hero