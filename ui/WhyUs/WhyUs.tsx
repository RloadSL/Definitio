import React from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./why-us.module.scss";
import RLDSEOTags from "@/components/RLDSEOTags";
import WhyUsHero from "./WhyUsHero";
import WhyUsWorkWithUs from "./WhyUsWorkWithUs";
import WhyUsLetsGetStarted from "./WhyUsLetsGetStarted";

/**
 * Why Us page structure component.
 */

const WhyUs: NextPage = () => {
  return (
    <div className={`${style.whyUs} whyUs`}>
      <RLDSEOTags title="Why Us" description="" />
      <div className={style.whyUs_hero}>
        <WhyUsHero />
      </div>
      <div className="page_background2">
        <div className={style.whyUs_letsGetStarted}>
          <WhyUsLetsGetStarted />
        </div>
        <div className={style.whyUs_workWithUs}>
          <WhyUsWorkWithUs />
        </div>
      </div>

      <BottomSection />
    </div>
  );
};

export default WhyUs;
