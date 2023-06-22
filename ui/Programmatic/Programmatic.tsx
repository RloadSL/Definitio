import React from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./programmatic.module.scss";
import ProgrammaticBrandSafety from "./ProgrammaticBrandSafety";
import ProgrammaticHero from "./ProgrammaticHero";
import RLDSEOTags from "@/components/RLDSEOTags";
import partnersLogos from "data/partners.json";
import LogosSection from "@/components/LogosSection";
import ProgrammaticOurTechnology from "./ProgrammaticOurTechnology";
import ProgrammaticProductsSolutions from "./ProgrammaticProductsSolutions";

/**
 * Programmatic page structure component.
 */

const Programmatic: NextPage = () => {
  return (
    <div className={`${style.services} services`}>
      <RLDSEOTags title="Programmatic" description="" />
      <div className={style.services_hero}>
        <ProgrammaticHero />
      </div>
      <div className="page_background2">
        <div className={style.services_ourtechnology}>
          <ProgrammaticOurTechnology />
        </div>
        <div className={style.services_productsolutions}>
          <ProgrammaticProductsSolutions />
        </div>
        <div className={style.services_brandsafety}>
          <ProgrammaticBrandSafety />
        </div>
        {partnersLogos.length !== 0 && (
          <LogosSection data={partnersLogos} titleID="page.services.partners.title" />
        )}
      </div>
      <BottomSection />
    </div>
  );
};

export default Programmatic;
