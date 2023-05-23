import { NextPage } from "next";
import React from "react";
import style from "./home.module.scss";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WeOffer from "./WeOffer";
import OurTechnology from "./OurTechnology";
import Experience from "./Experience";
import DataOptimization from "./DataOptimization";
import BottomSection from "@/components/BottomSection";
import RLDSEOTags from "@/components/RLDSEOTags";

/**
 * Home page structure component
 */

const Home: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={style.home}>
      <RLDSEOTags
        title="Definitio::Programmatic Mobile Advertising Agency"
        description="Here the SEO description of the page"
      />
      <div className={style.hero_container}>
        <Hero onClick={onClick} />
      </div>
      <div className="page_background">
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
  );
};

export default Home;
