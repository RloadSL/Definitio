import React, { useState, useEffect } from "react";
import "./hamburguer-button.module.scss";
import style from "./hamburguer-button.module.scss";

interface HamburguerButtonProps {
  onClick: Function
}

/**
 * Button component for the mobile menu
 * @returns 
 */

const HamburguerButton = ({ onClick, isActive }: { onClick: Function , isActive:boolean}) => {
  
  return (
    <div className={style.hamburguerButton}>
      <button aria-hidden={true} onClick={()=>onClick()} className={isActive ? style.open : ""}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburguerButton;
