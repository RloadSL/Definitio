import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import style from "./whyus-letsgetstarted.module.scss";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../../assets/img/cube.svg";
import deliverIcon from "../../../assets/img/whyus/deliver.svg";
import optimizeIcon from "../../../assets/img/whyus/optimize.svg";
import protectIcon from "../../../assets/img/whyus/protect.svg";
import simplifyIcon from "../../../assets/img/whyus/simplify.svg";
import RLDHorizontalAccordion from "@/components/RLDHorizontalAccordion";
import RLDButton from "@/components/RLDButton";

const WhyUsLetsGetStarted = () => {
  const horizontalAccordionCards = [
    {
      title: "page.whyus.getStarted.card1.title",
      text: "page.whyus.getStarted.card1.text",
      icon: simplifyIcon
    },
    {
      title: "page.whyus.getStarted.card2.title",
      text: "page.whyus.getStarted.card2.text",
      icon: protectIcon
    },
    {
      title: "page.whyus.getStarted.card3.title",
      text: "page.whyus.getStarted.card3.text",
      icon: deliverIcon
    },
    {
      title: "page.whyus.getStarted.card4.title",
      text: "page.whyus.getStarted.card4.text",
      icon: optimizeIcon
    }
  ];

  const onClick = () => {
    console.log("hola");
  };

  return (
    <section className={`${style.letsGetStarted} letsGetStarted`}>
      <div className={`${style.cube1}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2}`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={style.content}>
        <div className={style.buttonBlock}>
          <RLDButton
            customClass="button button-primary"
            labelID="btn.label.getStarted"
            onClick={onClick}
          />
        </div>
        <div className={style.accordion}>
          <RLDHorizontalAccordion cards={horizontalAccordionCards} />
        </div>
      </div>
    </section>
  );
};

export default WhyUsLetsGetStarted;
