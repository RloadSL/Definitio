import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import style from "./services.module.scss";
import ServicesOurTechnology from "./ServicesOurTechnology";
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
        <Hero onClick={onClick} />
      </div>
      <div className="page_background">
        <div className={style.services_ourtechnology}>
          <ServicesOurTechnology />
        </div>
        <div className={style.services_productsolutions}>
          <ServicesProductsSolutions />
        </div>
        <div className={style.services_brandsafety}>
          <ServicesBrandSafety />
        </div>
      </div>

      <BottomSection />
    </div>
  );
};

export default Services;
