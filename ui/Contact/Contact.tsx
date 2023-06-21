import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./contact.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonApp from "@/components/RLDButton";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../assets/img/cube.svg";
import RLDSEOTags from "@/components/RLDSEOTags";
import ContactAnim from "./ContactHero/ContactAnim/ContactAnim";
import LogosSection from "@/components/LogosSection";
import partnersLogos from "data/partners.json";
import ContactHero from "./ContactHero";

/**
 * Contact page structure component.
 */

const Contact: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={`${style.contact} contact`}>
      <RLDSEOTags title="Contact" description="" />
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={style.hero}>
        <ContactHero />
      </div>
      <div className={style.map}>
        
      </div>
      <div>
        <div className={style.content}>
          {partnersLogos.length !== 0 && (
            <LogosSection data={partnersLogos} titleID="Trusted by" />
          )}
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default Contact;
