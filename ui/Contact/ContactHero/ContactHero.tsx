import useComponentAnimations from "@/hooks/animations.hooks";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import ContactAnim from "./ContactAnim";
import style from "./contact-hero.module.scss";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";

/**
 * Contact hero section component
 * @returns
 */

const ContactHero = () => {
  return (
    <div className={`${style.hero} hero`}>
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={style.content}>
        <div className={style.hero_text}>
          <article>
            <h1>
              {" "}
              <FormattedMessage
                id="page.contact.h1"
                values={{
                  span: (children) => <span>{children}</span>
                }}
              />
            </h1>
            <p>
              <FormattedMessage id="page.contact.text" />
            </p>
          </article>
        </div>
        <div className={style.hero_image}>
          <ContactAnim />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
