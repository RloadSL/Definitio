import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import style from "./services.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonApp from "@/components/ButtonApp";
// import AboutDecoration from "./AboutDecoration";
import SliderApp from "@/ui/About/SliderApp";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../assets/img/cube.svg";
import OurTechnology from "./ServicesOurTechnology";
import ServicesOurTechnology from "./ServicesOurTechnology";
import RLDAccordion from "@/components/RLDAccordion";
import ServicesProductsSolutions from "./ServicesProductsSolutions";
import ServicesBrandSafety from "./ServicesBrandSafety";
import Hero from "./ServicesHero";

/**
 * Services page structure component. Includes the SEO header and each of the sections that build the UI of the page
 * @returns
 */

const Services: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={`${style.services} services`}>
      <SEOHead title="Services" description="" />
      <div className={style.services_hero}>
        <Hero onClick={onClick}/>
      </div>
      <div className={style.services_ourtechnology}>
        <ServicesOurTechnology/>
      </div>
      <div className={style.services_productsolutions}>
        <ServicesProductsSolutions/>
      </div>
      <div className={style.services_brandsafety}>
        <ServicesBrandSafety/>
      </div>

      <BottomSection />
    </div>
  );
};

export default Services;
