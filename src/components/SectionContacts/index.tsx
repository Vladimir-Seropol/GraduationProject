import { useContext } from "react";
import YandexMap from "../YandexMap";
import style from "./style.module.css";
import { ThemeContext } from "../../App";

const SectionContacts = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(243, 246, 246, 1)" };

  return (
    <section className={style.wrapper} style={backgroundStyle} id="contacts">
      <div className={style.container}>
        <h2>Контакты</h2>

        <div className={style.contacts}>
          <div className={style.contact}>
            <h3>Главный офис </h3>
            <div className={style.tooltip}>
              <img src="src/assets/Tooltip.png" alt="Tooltip" />
            </div>
            <p>
              <a href="tel:+78007898989">+7 800 789 89 89</a>
            </p>
            <p className={style.text}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </p>
            <h3>Отдел продаж </h3>
            <p>
              <a href="tel:+78007898989">+7 800 789 89 89</a>
            </p>
            <p className={style.text}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </p>
            <div className={style.social_media}>
              <img src="src/assets/VK.svg" alt="icon VK" />
              <img src="src/assets/Instagram.svg" alt="icon Instagram" />
            </div>
          </div>

          <div className={style.map}>
            <YandexMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
