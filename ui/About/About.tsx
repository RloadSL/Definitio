import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./about.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonApp from "@/components/RLDButton";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../assets/img/cube.svg";
import RLDSEOTags from "@/components/RLDSEOTags";
import AboutSlider from "./AboutSlider";
import AboutAnim from "./AboutAnim";
import Link from "next/link";

/**
 * About page structure component.
 */

const About: NextPage = () => {
  useEffect(() => {
    gsap.from(".title", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0
    });
    gsap.from(".text", {
      y: -40,
      ease: Power2.easeInOut,
      duration: 0.6,
      opacity: 0
    });
  }, []);

  return (
    <div className={`${style.about} about`}>
      <RLDSEOTags title="About" description="" />
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div>
        <div className={style.content}>
          <div className={style.about_info}>
            <article>
              <h1 className="title">
                <FormattedMessage id="page.about.h1" />
              </h1>
              <div className={`${style.about_info__text} text`}>
                <FormattedMessage
                  id="page.about.text"
                  values={{
                    i: (children) => <i>{children}</i>,
                    p: (children) => <p>{children}</p>
                  }}
                />
              </div>
            </article>
            <Link className="button button-line" href="/contact">
              <span>
                <FormattedMessage id="btn.label.contact" />
              </span>
            </Link>
          </div>
          <div className={style.about_decoration}>
            <AboutAnim />
          </div>
        </div>
        <div className={style.about_slider}>
          <AboutSlider />
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default About;
