import React, { useState } from "react";
import style from "./services-slider.module.scss";
import "swiper/swiper-bundle.css";
// import icon1 from "../../../../assets/img/services/card_1.jpg";
// import icon2 from "../../../../assets/img/services/card_2.jpg";
// import icon3 from "../../../../assets/img/services/card_3.jpg";
// import icon4 from "../../../../assets/img/services/card_4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

interface ServicesSliderProps {}

const ServicesSlider = ({}: ServicesSliderProps) => {
  const [swiper, setSwiper] = useState<any>();

  return (
    <div className={style.slider}>
      <div className={style.slider_navigation}>
        <button className={style.slider_navigation__next} onClick={() => swiper.slideNext()}>
          <span className="only-readers">Next slide</span>
        </button>
        <button className={style.slider_navigation__prev} onClick={() => swiper.slidePrev()}>
          <span className="only-readers">Previous slide</span>
        </button>
      </div>
      <div className={style.slider_content}>
        <Swiper
          className="services-slider"
          spaceBetween={20}
          // centeredSlides={false}
          // loopedSlides={8}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={style.slide_card1}>
              <h3>
                <FormattedMessage id="page.services.productssolutions.card1.title" />
              </h3>
              <p>
                <FormattedMessage id="page.services.productssolutions.card1.text" />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide_card2}>
              <h3>
                <FormattedMessage id="page.services.productssolutions.card2.title" />
              </h3>
              <p>
                <FormattedMessage id="page.services.productssolutions.card2.text" />
              </p>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide_card3}>
              <h3>
                <FormattedMessage id="page.services.productssolutions.card3.title" />
              </h3>
              <p>
                <FormattedMessage id="page.services.productssolutions.card3.text" />
              </p>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide_card4}>
              <h3>
                <FormattedMessage id="page.services.productssolutions.card4.title" />
              </h3>
              <p>
                <FormattedMessage id="page.services.productssolutions.card4.text" />
              </p>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSlider;
