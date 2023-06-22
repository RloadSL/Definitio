import React, { useState } from "react";
import "./hamburguer-button.module.scss";
import style from "./hamburguer-button.module.scss";

interface HamburguerButtonProps {
  onClick: Function
}

/**
 * Button component for the mobile menu
 * @returns 
 */

const HamburguerButton = ({ onClick }: HamburguerButtonProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  //console.log(buttonState)

  const handleClick = () => {
    setActive(prev => !prev);
    onClick();
  };

  return (
    <div className={style.hamburguerButton}>
      <button aria-hidden={true} onClick={handleClick} className={isActive ? style.open : ""}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburguerButton;
