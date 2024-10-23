import { useRef } from "react";
import style from "./style.module.css";
import Selection1 from "../Selection1/index.tsx";
import Selection2 from "../Selection2/index.tsx";
import Selection3 from "../Selection3/index.tsx";
import Selection4 from "../Selection4/index.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperRef } from "swiper/react"; // Импортируйте SwiperRef

const SectionSelection = () => {
  const swiperRef = useRef<SwiperRef | null>(null); // Указываем тип рефа как SwiperRef

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Используем swiper внутри swiperRef
    }
  };

  const handleButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0); // Возвращаемся к первому слайду
    }
  };

  return (
    <section className={style.wrapper} id="selection">
      <Swiper ref={swiperRef} className="my-swiper">
        <SwiperSlide>
          <Selection1 onNext={handleNextSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <Selection2 onNext={handleNextSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <Selection3 onNext={handleNextSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <Selection4 onButtonClick={handleButtonClick} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SectionSelection;