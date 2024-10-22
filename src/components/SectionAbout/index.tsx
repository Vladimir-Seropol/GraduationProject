// import { useState } from "react";
// import Cards from "../Cards";
// import Search from "../Search";
import style from "./style.module.css";
// import CardsSneaker from "../CardsSneaker";
//import theme from "../../components/SwitchTheme";

const SectionAbout = () => {
  //   const [filterValue, setFilterValue] = useState("");
  return (
    <section id="about_us">
      <div className="wrapper">
        <div className={style.imeges}>
          <img src="src/images/figure.png" alt="" />
        </div>

        <div className={style.container}>
          <div className={style.info}>
            <h2 className={style.title} >Пара слов о нас</h2>
            <p className={style.description}>
              Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
              спорт мы можем менять жизни. В том числе с помощью воодушевляющих
              историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
            </p>
            <span className={style.span}>
              <img src="src/images/Line_6.png" alt="" />
              SneakMax
            </span>
          </div>

          <img src="src/images/Mask_Group.png" alt="" />
        </div>
      </div>
    </section>

  );
};

export default SectionAbout;
