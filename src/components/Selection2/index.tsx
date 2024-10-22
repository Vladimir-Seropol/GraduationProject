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

  // Состояние для чекбоксов
  //   const [filters] = useState({
  //     all: true,
  //     completed: false,
  //     incomplete: false,
  //   });
  // const handleFilterChange = () => {
  // const newFilters = { all: false, completed: false, incomplete: false, [filter]: !filters[filter] };
  // setFilters(newFilters);
  //   const [filterValue, setFilterValue] = useState("");
  return (
    <section className={style.wrapper} id="selection">
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Мы подберем идеальную пару для вас</h2>
          <p className={style.description}>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
          </p>
        </div>
        <span className={style.span}>Какой тип кроссовок рассматриваете?</span>
        <div className="carousel">

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                менее 36
              </label>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                36-38
              </label>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                39-41
              </label>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                42-44
              </label>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                45 и больше
              </label>
             
            </div>
  <div className={style.selection}>
          <div className={style.sneakers}>
            <img src="  src/images/Rectangle_45.png" alt="" />

            
          </div>

        </div>

        <div className={style.step}>
          <span className={style.counter}>2 из 3</span>
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
