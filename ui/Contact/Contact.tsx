import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";
import style from "./contact.module.scss";
import { FormattedMessage } from "react-intl";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../assets/img/cube.svg";
import city from "../../assets/img/contact/city.svg";
import RLDSEOTags from "@/components/RLDSEOTags";
import LogosSection from "@/components/LogosSection";
import partnersLogos from "data/partners.json";
import ContactHero from "./ContactHero";

/**
 * Contact page structure component.
 */

const Contact: NextPage = () => {
  useEffect(() => {
    gsap.from(".mail_text", {
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 1,
      scrollTrigger: {
        trigger: ".mail_text",
        scrub: 1,
        start: "top center",
        end: "top center"
      }
    });
    gsap.from(".mail_decoration", {
      y: 100,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mail_text",
        scrub: 1,
        start: "100px center",
        end: "bottom center"
      }
    });
  }, []);

  return (
    <div className={`${style.contact} contact`}>
      <RLDSEOTags title="Contact" description="" />
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={style.hero}>
        <ContactHero />
      </div>
      <div className={style.location}>
        <div className={style.location_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.806418136365!2d55.13535642652499!3d25.074549520348608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cab084c7aff%3A0xda9a9895b5c7a3d6!2s74%20Al%20Marsa%20St%20-%20Dubai%20Marina%20-%20Dubai%20-%20Emiratos%20%C3%81rabes%20Unidos!5e0!3m2!1ses!2ses!4v1687339937504!5m2!1ses!2ses"
            loading="lazy"
          />
        </div>
        <div className={style.location_info}>
          <article>
            <h2 className="titleButton">
              <FormattedMessage
                id="page.contact.h2"
                values={{
                  span: (children) => <span>{children}</span>
                }}
              />
            </h2>
            <p>
              <FormattedMessage
                id="page.contact.location.text"
                values={{
                  span: (children) => <span>{children}</span>
                }}
              />
            </p>
          </article>
        </div>
      </div>
      <div className={style.mail}>
        <div className={`${style.mail_text} mail_text`}>
          <h3>
            <FormattedMessage
              id="page.contact.h1"
              values={{
                span: (children) => <span>{children}</span>
              }}
            />
          </h3>
          <p>
            <FormattedMessage id="page.contact.email" />
          </p>
        </div>
        <div className={`${style.mail_decoration} mail_decoration`}>
          <Image src={city} alt={""} />
        </div>
      </div>
      {/* <div>
        <div className={style.content}>
          {partnersLogos.length !== 0 && <LogosSection data={partnersLogos} titleID="Trusted by" />}
        </div>
      </div> */}
      <BottomSection />
    </div>
  );
};

export default Contact;
