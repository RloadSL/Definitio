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

      <Hero onClick={onClick} />

      <WhoWeAre />
      <WeOffer />
      <OurTechnology/>
      <Experience />
      <DataOptimization />

    <BottomSection/>
  
    </div>
  )
}

export default Home;