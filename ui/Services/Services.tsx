import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./services.module.scss";
import ServicesOurTechnology from "./ServicesOurTechnology";
import ServicesProductsSolutions from "./ServicesProductsSolutions";
import ServicesBrandSafety from "./ServicesBrandSafety";
import ServicesHero from "./ServicesHero";
import RLDSEOTags from "@/components/RLDSEOTags";

/**
 * Services page structure component.
 */

const Services: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={`${style.services} services`}>
      <RLDSEOTags title="Services" description=""/>
      <div className={style.services_hero}>
        <ServicesHero onClick={onClick} />
      </div>
      <div className="page_background2">
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
