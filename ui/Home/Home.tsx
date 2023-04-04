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
import ContactForm from '@/components/ContactForm/ContactForm';
import OurTechnology from './OurTechnology';
import Experience from './Experience';
import DataOptimization from './DataOptimization';
import BottomSection from '@/components/BottomSection';



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

      <div className={style.hero_container}>
<Hero onClick={onClick} />

</div>
      {/* <div className={`${style.colorShadow} ${style.colorShadow_1}`}></div>
      <div className={`${style.colorShadow} ${style.colorShadow_2}`}></div>
      <div className={`${style.colorShadow} ${style.colorShadow_3}`}></div>
      <div className={`${style.colorShadow} ${style.colorShadow_4}`}></div>
      <div className={`${style.colorShadow} ${style.colorShadow_5}`}></div> */}
      <div className={style.bg}>
      <div className={style.whoweare_container}>
        <WhoWeAre />
      </div>
      <div className={style.weoffer_container}>
        <WeOffer />
      </div>
      <div className={style.ourtechnology_container}>
        <OurTechnology />
      </div>

      <div className={style.experience_container}>

        <Experience />
      </div>
      <div className={style.dataoptimization_container}>
        <DataOptimization />
      </div>
      </div>
      

      <BottomSection />

    </div>
  )
}

export default Home;