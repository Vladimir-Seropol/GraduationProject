
import { Link } from "react-scroll";
import SwitchThem from "../../SwitchTheme";
import style from "./style.module.css";

export const DesktopMenu = () => {


  return (
    <>
      <SwitchThem />
      <nav>
        <Link
          to="catalog"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className={style.link}
        >
          Каталог
        </Link>
        <Link
          to="about_us"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className={style.link}
        >
          О нас
        </Link>

        <Link
          to="selection"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className={style.link}
        >
          Подбор товара
        </Link>
        <Link
          to="team"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className={style.link}
        >
          Наша команда
        </Link>
        <Link
          className={style.link}
          to={"payment"}
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          Доставка и оплата
        </Link>

        <Link
          className={style.link}
          to={"contacts"}
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          Контакты
        </Link>
        {/* <Link className={style.link} to={"/history"}>Корзина</Link> */}
      </nav>
    </>
  );
};
