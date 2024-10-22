import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import style from "./style.module.css";
import SwitchThem from "../../SwitchTheme";
import { Link } from "react-scroll";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <div className={style.wrapper}>
          <nav>
            <SwitchThem onClick={handleLinkClick} />

            <Link onClick={handleLinkClick}
              to="catalog"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
              Каталог
            </Link>
            <Link onClick={handleLinkClick}
              to="about_us"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
              О нас
            </Link>
            <Link onClick={handleLinkClick}
              to="selection"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
               Подбор товара
            </Link>
            <Link onClick={handleLinkClick}
              to="team"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
             Наша команда
            </Link>
            <Link onClick={handleLinkClick}
              to="payment"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
              Доставка и оплата
            </Link>

            <Link onClick={handleLinkClick}
              to="contacts"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className={style.link}
            >
              Контакты
            </Link>

            
          </nav>
        </div>
      )}
    </div>
  );
};
