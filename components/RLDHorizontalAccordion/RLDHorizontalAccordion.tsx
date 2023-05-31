import React, { useEffect, useRef, useState } from "react";
import style from "./rld-horizontal-accordion.module.scss";
import { FormattedMessage } from "react-intl";
import gsap, { Power2 } from "gsap";
import Image from "next/image";

interface RLDHorizontalAccordionCardProps {
  item: any;
  handleClick: Function;
  isActive: string;
  number:any
}

/**
Rload Horizontal Accordion Card
* @param item Item to render
* @param handleClick Function to control on click actions
* @param isActive Item that is active in each moment
* @param number Number to render from index
*/

const RLDHorizontalAccordionCard = ({
  item,
  handleClick,
  isActive,
  number
}: RLDHorizontalAccordionCardProps) => {
  const cardAnim = useRef(null);
  const pAnim = useRef(null);
  const mq = gsap.matchMedia();

  useEffect(() => {
    if (isActive === item.title) {
      mq.add("(max-width: 1079px)", () => {
        gsap.to(cardAnim.current, {
          height: "100%"
        });
        gsap.to(pAnim.current, {
          opacity: 1,
          height: "100%"
        });
      });
      mq.add("(min-width: 1080px)", () => {
        gsap.to(cardAnim.current, {
          width: "100%",
          duration:0.5
        });
        gsap.to(pAnim.current, {
          opacity: 1,
          delay: 0.5
        });
      });
    } else {
      mq.add("(max-width: 1079px)", () => {
        gsap.to(pAnim.current, {
          opacity: 0,
          height: 0
        });
        gsap.to(cardAnim.current, {
          height: "0%",
          delay: 0.8
        });
      });
      mq.add("(min-width: 1080px)", () => {
        gsap.to(cardAnim.current, {
          width: "30%"
        });
        gsap.to(pAnim.current, {
          opacity: 0,
          height: 0
        });
      });
    }
  }, [isActive]);

  return (
    <div
      onClick={() => handleClick(item.title)}
      ref={cardAnim}
      className={`${style.horizontalAccordion_card} ${
        isActive === item.title ? `${style.active} open` : "closed"
      }`}
    >
       <header className={style.header}>
          <div className={style.header_icon}>
            <Image src={item.icon} alt=""/>
          </div>
          <div className={style.header_number}>
            {`0${number}`}
          </div>
        </header>
      <div className={style.horizontalAccordion_card__content}>
       
        <h3>
          <FormattedMessage id={item.title} />
        </h3>
        <p ref={pAnim}>
          <FormattedMessage
            id={item.text}
            values={{
              span: (children) => <span>{children}</span>
            }}
          />
        </p>
      </div>
    </div>
  );
};

interface RLDHorizontalAccordionProps {
  cards: Array<any>;
}

/**
Rload Horizontal Accordion Component 
* @param cards Array of objects with the text IDS that must be rendered
*/

const RLDHorizontalAccordion = ({ cards }: RLDHorizontalAccordionProps) => {
  const [isActive, setActive] = useState(cards[0].title);
  return (
    <div className={style.horizontalAccordion}>
      {cards.map((item: any, index: number) => {
        return (
          <RLDHorizontalAccordionCard
            handleClick={setActive}
            item={item}
            key={index}
            isActive={isActive}
            number={index + 1}
          />
        );
      })}
    </div>
  );
};

export default RLDHorizontalAccordion;
