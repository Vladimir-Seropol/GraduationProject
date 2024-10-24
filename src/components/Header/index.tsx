import Logo from "../Logo/Logo.tsx";
import style from "./style.module.css";
import { useIsMobile } from "../../hooks/index";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import Button from "../Buttons/ButtonRed/button.tsx";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { RootState } from "../../store/store.ts";
import { useSelector } from "react-redux";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsBasketOpen: () => void;
}

const Header: FC<IProps> = ({ isOpen, setIsOpen, setIsBasketOpen }) => {
  const basketLength = useSelector<RootState, number>(
    (state) => state.basket.data.length
  );
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
    setTimeout(() => {
      const element = document.getElementById('catalog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="wrapper">
      <header className={style.container}>
        <div className={style.nav}>
          <Logo />
          {isMobile ? <MobileMenu /> : <DesktopMenu />}

          <div onClick={() => setIsOpen()}>
         
            <button className={style.cart} onClick={() => setIsBasketOpen()} >
              Корзина <img src="src/images/basket.svg" alt="Basket" />
              <span className={style.counter}>{basketLength}</span>
            </button>
         </div>
        </div>

        <div className={style.info}>
          <b className={style.SneakMax}>SneakMax</b>
          <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <Button text="Перейти к покупкам" onClick={handleClick} />
        </div>
      </header>
    </div>
  );
};

export default Header;