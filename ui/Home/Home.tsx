import SEOHead from '@/components/SEOHead';
import { NextPage } from 'next';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import style from './home.module.scss'
import manHero from '../../assets/img/home_hero.png'
import city from '../../assets/img/home_whoweare.png'
import boylaptop from '../../assets/img/home_weoffer.png'
import factory from '../../assets/img/home_ourtechnology.png'
import girllaptop from '../../assets/img/home_experience.png'
import windows from '../../assets/img/home_dataoptimization.png'
import useComponentUtils from '@/hooks/component.hooks';
import HeroAnim from './Hero/HeroAnim';
import ButtonApp from '@/components/ButtonApp';
import WhoweareAnim from './WhoWeAre/WhoweareAnim';
import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import WeOffer from './WeOffer';


const Home: NextPage = () => {
  
  // const {homeAnim} = useComponentUtils();

  // const homeRef = useRef<null | HTMLDivElement>(null);
  // const whoText = useRef<null | HTMLDivElement>(null);
  // const whoweare = useRef<null | HTMLDivElement>(null);
  // const textTitle = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   homeAnim(homeRef,textTitle);
  // //   gsap.registerPlugin(ScrollTrigger);
  // // gsap.registerPlugin(SplitText);
  // //   let textAnimation = gsap.timeline();
  // //   let mySplitText = new SplitText(textTitle.current, { type: "lines" });
  // //   let lines = mySplitText.lines
  // //   let ctx = gsap.context(() => {
  // //     textAnimation.from(lines, {
  // //       opacity: 0,
  // //       y: -50,
  // //       stagger: {
  // //         each: 0.07
  // //       }
  // //     });

  // //   }, homeRef);

  // //   return () => ctx.revert();

  //  }, []);

   const onClick = () => {
    alert('hola')
   }

  return (
    <div className={style.home}>
      <SEOHead title='Definitio::Programmatic Mobile Advertising Agency' description='Here the SEO description of the page' />

      <Hero onClick={onClick}/>

      <WhoWeAre />
      <WeOffer/>

      {/* <section className={style.home_weoffer}>
        <div className={style.content}>
          <div className={style.home_weoffer__text}>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.weoffer.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.weoffer.text' />
            </p>
          </div>
          <div className={style.home_weoffer__image}>
            <Image src={boylaptop} alt={''} />
          </div>
        </div>
      </section>

      <section className={style.home_ourtechnology}>
        <div className={style.content}>
          <div className={style.home_ourtechnology__image}>
            <Image src={factory} alt={''} />
          </div>
          <div className={style.home_ourtechnology__text}>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.ourtechnology.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.ourtechnology.text' />
            </p>
          </div>
        </div>
      </section>

      <section className={style.home_experience}>
        <div className={style.content}>
          <div className={style.home_experience__text}>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.experience.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.experience.text' />
            </p>
          </div>
          <div className={style.home_experience__image}>
            <Image src={girllaptop} alt={''} />
          </div>
        </div>
      </section>

      <section className={style.home_dataoptimization}>
        <div className={style.content}>
          <div className={style.home_dataoptimization__image}>
            <Image src={windows} alt={''} />
          </div>
          <div className={style.home_dataoptimization__text}>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.dataoptimization.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.dataoptimization.text' />
            </p>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home;