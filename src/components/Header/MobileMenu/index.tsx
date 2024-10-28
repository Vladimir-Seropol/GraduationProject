import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import style from "./style.module.css";
import SwitchThem from "../../SwitchTheme";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import './transitions.css'; 

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = async (anchor: string) => {
    // Сначала закрываем меню
    setIsOpen(false);
  
  
    // Переходим на домашнюю страницу
    navigate('/');
  
    // Задержка перед прокруткой
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Задержка для плавного исчезновения
  };

  return (
    <div className={style.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div className={style.wrapper}>
          <nav>
            <SwitchThem />

            <a onClick={() => handleLinkClick('catalog')} className={style.link}>
              Каталог
            </a>
            <a onClick={() => handleLinkClick('about_us')}>
              О нас
            </a>
            <a onClick={() => handleLinkClick('selection')}>
              Подбор товара
            </a>
            <a onClick={() => handleLinkClick('team')}>
              Наша команда
            </a>
            <a onClick={() => handleLinkClick('payment')}>
              Доставка и оплата
            </a>
            <a onClick={() => handleLinkClick('contacts')}>
              Контакты
            </a>
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};