import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./why-us.module.scss";
import ServicesOurTechnology from "./ServicesOurTechnology";
import ServicesProductsSolutions from "./ServicesProductsSolutions";
import ServicesBrandSafety from "./WhyUsWorkWithUs";
import Hero from "./WhyUsHero";
import RLDSEOTags from "@/components/RLDSEOTags";
import WhyUsHero from "./WhyUsHero";
import WhyUsWorkWithUs from "./WhyUsWorkWithUs";

/**
 * Why Us page structure component.
 */

const WhyUs: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={`${style.whyUs} whyUs`}>
      <RLDSEOTags title="Why Us" description=""/>
      <div className={style.whyUs_hero}>
        <WhyUsHero onClick={onClick} />
      </div>
      <div className="page_background2">
        <div className={style.whyUs_ourtechnology}>
          {/* <ServicesOurTechnology /> */}
          <WhyUsWorkWithUs/>
        </div>
        {/* <div className={style.services_productsolutions}>
          <ServicesProductsSolutions />
        </div>
        <div className={style.services_brandsafety}>
          <ServicesBrandSafety />
        </div> */}
      </div>

      <BottomSection />
    </div>
  );
};

export default WhyUs;
