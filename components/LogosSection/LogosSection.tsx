import React from "react";
import style from "./logos-section.module.scss";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

interface LogosSectionProps {
  data: Array<any>;
  titleID: string;
}

const LogosSection = ({ data, titleID }: LogosSectionProps) => {
  return (
    <div className={style.logosSection}>
      <div className={style.content}>
        <h2 className="titleButton">
          <FormattedMessage id={titleID} />
        </h2>
        <div className={style.logos}>
          <ul>
            {data.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <div className={style.logos_single}>
                    <Image src={item.imgSrc} alt={item.name} width={100} height={20} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogosSection;
