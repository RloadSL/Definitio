import SEOHead from '@/components/SEOHead';
import { NextPage } from 'next';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import style from './home.module.scss'
import manHero from '../../assets/img/home_hero.png'
import city from '../../assets/img/home_whoweare.png'
import boylaptop from '../../assets/img/home_weoffer.png'
import factory from '../../assets/img/home_ourtechnology.png'
import girllaptop from '../../assets/img/home_experience.png'
import windows from '../../assets/img/home_dataoptimization.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const homeRef = useRef<null | HTMLDivElement>(null);
  const circle = useRef<null | HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        circle.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: circle.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        }
      );
      
    }, homeRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className={style.home} ref={homeRef}>
      <SEOHead title='Definitio::Programmatic Mobile Advertising Agency' description='Here the SEO description of the page' />

      <main className={style.home_hero}>
        <div className={style.content}>
          <div className={style.home_hero__text}>
            <h1>
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
          </div>
          <div className={style.home_hero__image}>
            <Image src={manHero} alt={''} />
          </div>
        </div>
      </main>

      <section className={style.home_whoweare}>
        <div className={style.content}>
          <div className={style.home_whoweare__image}>
            <Image src={city} alt={''} />
          </div>
          <div className={style.home_whoweare__text} ref={circle}>
            <h2 className={style.titleButton}>
              <FormattedMessage id='page.home.whoweare.h2' />
            </h2>
            <p>
              <FormattedMessage id='page.home.whoweare.text' />
            </p>
          </div>
        </div>
      </section>

      <section className={style.home_weoffer}>
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
      </section>
    </div>
  )
}

export default Home;