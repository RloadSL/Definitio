import ButtonApp from '@/components/ButtonApp'
import useComponentUtils from '@/hooks/component.hooks'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import HeroAnim from './HeroAnim'
import style from './hero.module.scss'

interface HeroProps {
  onClick: Function
}

const Hero = ({onClick }: HeroProps) => {
  const {homeAnim} = useComponentUtils();

  const homeRef = useRef<null | HTMLDivElement>(null);
  const whoText = useRef<null | HTMLDivElement>(null);
  const whoweare = useRef<null | HTMLDivElement>(null);
  const textTitle = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    homeAnim(homeRef,textTitle);
  //   gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(SplitText);
  //   let textAnimation = gsap.timeline();
  //   let mySplitText = new SplitText(textTitle.current, { type: "lines" });
  //   let lines = mySplitText.lines
  //   let ctx = gsap.context(() => {
  //     textAnimation.from(lines, {
  //       opacity: 0,
  //       y: -50,
  //       stagger: {
  //         each: 0.07
  //       }
  //     });

  //   }, homeRef);

  //   return () => ctx.revert();

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
            <p>
              <FormattedMessage id='page.home.top.text' />
            </p>
            <ButtonApp labelID='Yalla!' onClick={onClick} />
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