import React, { useEffect, useState } from "react";
import style from "./cookie-advicer.module.scss";
import CookieSwitcher from "./CookieSwitcher";
import { deleteCookie, removeCookies } from "cookies-next";
import Link from "next/link";

interface CookieAdvicerProps {
  cookies_items: COOKIES_ITEMS;
}

export interface COOKIES_ITEMS {
  social: { item: string; description: string }[];
  advertising: { item: string; description: string }[];
  analytics: { item: string; description: string }[];
  personalized: { item: string; description: string }[];
}

type cookies_keys = "social" | "advertising" | "analytics" | "personalized";

const CookieAdvicer = ({ cookies_items }: CookieAdvicerProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState<Boolean>(false);
  const [isAdviceOpen, setIsAdviceOpen] = useState<Boolean>(true);
  const [switcherState, setSwitcherState] = useState<any>({
    social: true,
    advertising: true,
    analytics: true,
    personalized: true
  });

  useEffect(() => {
    localStorage.setItem("switcherState", JSON.stringify(switcherState));
  }, [switcherState]);

  useEffect(() => {
    const stSwitcherState = localStorage.getItem("switcherState");

    if (stSwitcherState) {
      setSwitcherState(JSON.parse(stSwitcherState));
      handleConfirmation(JSON.parse(stSwitcherState));
    }
  }, []);

  /**
   * Open cookie's modal configurator
   */
  const handlePreferences = () => {
    setIsVisibleModal(true);
  };
  /**
   * Accept all cookies
   */
  const handleAcceptClose = () => {
    setIsAdviceOpen(false);
    localStorage.setItem("cookies_compliance", "accepted");
  };
  /**
   * Save the client's cookie configuration
   */
  const handleConfirmation = (stSwitcherState?: any, closeModal?: boolean) => {
    closeModal && setIsAdviceOpen(false);

    const state = stSwitcherState || switcherState;

    Object.keys(state).forEach((keys) => {
      if (!state[keys]) {
        cookies_items[keys as cookies_keys].forEach((cookie) => {
          deleteCookie(cookie.item);
        });
      }
    });
  };
  /**
   * Remove non necessary cookies
   */
  const handleReject = () => {
    setIsAdviceOpen(false);
    Object.values(cookies_items).forEach((value) => {
      value.forEach((cookie: any) => {
        removeCookies(cookie.item);
      });
    });
  };

  const handleToggle = (switcherState: any) => {
    setSwitcherState((prev: any) => ({ ...prev, ...switcherState }));
  };
  return (
    isAdviceOpen && (
      <div className={style.cookieAdvicer}>
        <div
          className={style.cookieAdvicer_banner}
          style={isVisibleModal ? { display: "none" } : { display: "block" }}
        >
          <div className={style.content}>
            <p>
              We use our own and third-party cookies and similar technologies to improve our site,
              analyze our traffic, provide features for social networks and personalize content and
              advertising based on your browsing habits, which you accept by clicking the Accept
              button. More information about our{" "}
              <Link href={"/privacy-policy"}> Cookie Policy</Link>
            </p>
            <div className={style.actions}>
              <button
                className={style.button_transparent}
                type="button"
                onClick={handlePreferences}
              >
                Manage preferences
              </button>
              <button className={style.button_primary} type="button" onClick={handleAcceptClose}>
                Accept and confirm
              </button>
            </div>
          </div>
        </div>
        {isVisibleModal && (
          <div className={style.cookieAdvicer_modal}>
            <button className={style.close} type="button" onClick={() => setIsVisibleModal(false)}>
              <span className="only-readers">cerrar</span>
            </button>
            <div className={style.content}>
              <h3>Privacy preferences</h3>
              <p>
                When you visit any website, it may obtain or save information in your browser,
                usually through the use of cookies. This information may be about you, your
                preferences or your device, and is mainly used for you to the site works as
                expected. Usually the information does not directly identify you, but may provide
                you with a more personalized web experience. Given that we respect your right to
                privacy, you can choose not to allow us to use certain cookies. Click on the headers
                of each category to learn more and change our default settings. However, the
                blocking of Some types of cookies may affect your experience on the site and the
                services we can offer.
              </p>
              <div className={style.cookieInfo}>
                <div className={style.cookieInfo_block}>
                  <div className={style.top}>
                    <h4>Strictly necessary</h4>
                    <CookieSwitcher
                      handleToggle={handleToggle}
                      isDisabled={true}
                      inputName="necessary"
                    />
                  </div>
                  <p>
                    These cookies are strictly necessary for the operation of the Website. They
                    allow the User to navigate through the Website as well as the use of the
                    different options and services that the Website offers. Without them, certain
                    features of the Website would not operate correctly.
                  </p>
                </div>
                <div className={style.cookieInfo_block}>
                  <div className={style.top}>
                    <h4>Analytics</h4>
                    <CookieSwitcher handleToggle={handleToggle} inputName="analytics" />
                  </div>
                  <p>
                    These third-party cookies store information about how Users interact with the
                    content of the Website, about its origin, about the browser they are using and
                    the time they spend on each page, among other information. They are used to
                    measure audiences and to compile statistics.
                  </p>
                </div>
                <div className={style.cookieInfo_block}>
                  <div className={style.top}>
                    <h4>Social networks</h4>
                    <CookieSwitcher handleToggle={handleToggle} inputName="social" />
                  </div>
                  <p>
                    These third-party cookies store information about how Users interact with the
                    content of the Website, about its origin, about the browser they are using and
                    the time they spend on each page, among other information. They are used to
                    measure audiences and to compile statistics.
                  </p>
                </div>
                <div className={style.cookieInfo_block}>
                  <div className={style.top}>
                    <h4>Personalized advertising</h4>
                    <CookieSwitcher handleToggle={handleToggle} inputName="advertising" />
                  </div>
                  <p>
                    These third-party cookies store behavioral information of the User, obtained
                    from the analysis of their browsing habits, and allow us or third parties to
                    display advertising according to the User&apos;s behavior and interests, or
                    track the behavior and effectiveness of advertising campaigns.
                  </p>
                </div>
                <div className={style.cookieInfo_block}>
                  <div className={style.top}>
                    <h4>Personalization cookies</h4>
                    <CookieSwitcher handleToggle={handleToggle} inputName="personalized" />
                  </div>
                  <p>
                    These cookies collect information about the way in which Users use the Website
                    and remember it to allow the User to access the Website in such a way that the
                    User&apos;s experience is unique for him and different from that of other Users.
                  </p>
                </div>
              </div>

              <div className={style.actions}>
                <button
                  className={style.button_transparent}
                  type="button"
                  onClick={() => handleReject()}
                >
                  Reject all
                </button>
                <button
                  className={style.button_primary}
                  type="button"
                  onClick={() => {
                    handleConfirmation(null, true);
                    handleAcceptClose();
                  }}
                >
                  Confirm preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default CookieAdvicer;
