import React, { useState } from "react";
import style from "./rld-accordion.module.scss";
import { FormattedMessage } from "react-intl";

interface RLDAccordionProps {
  titleID: string;
  children: JSX.Element;
  accordionClass: string;
}

/** Accordion component, this component only renders one accordion Item, if you want to 
 * @param titleID ID for JSON translations
 * @param accordionClass Global class for custom css
 * @returns 
 */

const RLDAccordion = ({ titleID, accordionClass, children }: RLDAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !isOpen);
  };

  return (
    <div
      className={`${style.RLDAccordion} ${accordionClass} ${isOpen && style.active} ${isOpen && 'item-active'}`}
      onClick={toggle}
      aria-expanded={isOpen}
    >
      <div className={`${style.RLDAccordion_title} ${accordionClass}_header`}>
        <span className={`${accordionClass}_header-text`}>
          <FormattedMessage id={titleID}/>
        </span>
      </div>
      <div className={`${style.RLDAccordion_content} ${accordionClass}_content`}>{children}</div>
    </div>
  );
};

export default RLDAccordion;
