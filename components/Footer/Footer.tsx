import React from "react";
import Image from "next/image";
import style from "./footer.module.scss";
import logo from "../../assets/img/logo.svg";
import Link from "next/link";

/**
 * Footer component of our website, includes social networks and links to legal texts
 */

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_content__top}>
          <div className={style.footer_logo}>
            <Image src={logo} alt={"Definitio logo"} />
          </div>
          <div className={style.footer_rload}>
            Design and development by <Link href='https://rload.es/' target="_blank">Rload</Link>
          </div>
          <div className={style.footer_social}>
            <ul>
              <li>
                <Link href={"https://www.linkedin.com/company/definitio/"} target="_blank">LinkedIn</Link>
              </li>
              <li>
                <Link href={"https://www.facebook.com/profile.php?id=100086211502275"} target="_blank">Facebook</Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/definitio.co/"} target="_blank">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_content__bottom}>
          <div className={style.footer_legal}>
            <ul>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/legal-notice"}>Legal Notice</Link>
              </li>
              {/* <li>
                <Link href={"#"}>Cookie Policy</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
