// import { useState } from "react";
// import Cards from "../Cards";
// import Search from "../Search";
// import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../../App.tsx";
import ButtonLght from "../Buttons/ButtonLight/button.tsx";
import style from "./style.module.css";

// import CardsSneaker from "../CardsSneaker";
//import theme from "../../components/SwitchTheme";


const SectionSelection = ({ onNext }: { onNext: () => void }) => {
  const { theme } = useContext(ThemeContext)!;
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  
  return (
    <section className={style.wrapper} id="selection">
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Мы подберем идеальную пару для вас</h2>
          <p className={style.description}>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
          </p>
        </div>
        <span className={style.span}>Уточните какие-либо моменты</span>
        <div className="carousel">
  <div className={style.selection}>
       <textarea  name="#" id="" placeholder="Введите сообщение"></textarea>
        </div>

        <div className={style.step}>
          <span className={style.counter}>3 из 3</span>
          <ButtonLght
            text="Следующий шаг"
            onClick={onNext} 
          />
        </div>

        </div>
      
      </div>
    </section>
  );
};

export default SectionSelection;
