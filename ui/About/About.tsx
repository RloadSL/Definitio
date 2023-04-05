import React from "react";
import BottomSection from "@/components/BottomSection";
import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import style from "./about.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonApp from "@/components/ButtonApp";
import AboutDecoration from "./AboutDecoration";

/**
 * About page structure component. Includes the SEO header and each of the sections that build the UI of the page
 * @returns
 */

const About: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={`${style.about} about`}>
      <SEOHead title="About" description="" />
      <div className="page_background">
        <div className={style.content}>
          <div className={style.about_info}>
            <article>
              <h1>
                <FormattedMessage id="page.about.h1" />
              </h1>
              <div className={style.about_info__text}>
                <FormattedMessage
                  id="page.about.text"
                  values={{
                    p: (children) => <p>{children}</p>
                  }}
                />
              </div>
              <ButtonApp labelID="btn.label.contact" onClick={onClick} />
            </article>
          </div>
          <div className={style.about_decoration}>
            <AboutDecoration />
          </div>
        </div>
        <div className={style.about_slider}></div>
      </div>
      <BottomSection />
    </div>
  );
};

export default About;
