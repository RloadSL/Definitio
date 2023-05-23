import React, { useState } from "react";
import style from "./rld-accordion.module.scss";
import { FormattedMessage } from "react-intl";

interface RLDAccordionProps {
  titleID: string;
  children: JSX.Element;
  customClass?: string;
}

/** Accordion component, this component only renders one accordion Item, if you want to 
 * @param titleID ID for JSON translations
 * @param customClass Global class for custom css
 */

const RLDAccordion = ({ titleID, customClass, children }: RLDAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !isOpen);
  };

  return (
    <div
      className={`${style.RLDAccordion} ${customClass} ${isOpen && style.active} ${isOpen && 'item-active'}`}
      onClick={toggle}
      aria-expanded={isOpen}
    >
      <div className={`${style.RLDAccordion_title} ${customClass}_header`}>
        <span className={`${customClass}_header-text`}>
          <FormattedMessage id={titleID}/>
        </span>
      </div>
      <div className={`${style.RLDAccordion_content} ${customClass}_content`}>{children}</div>
    </div>
  );
};

export default RLDAccordion;
