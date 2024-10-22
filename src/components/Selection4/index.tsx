import { useContext } from "react";
import { ThemeContext } from "../../App.tsx";
import style from "./style.module.css";
import Form from "../Form";

const SectionSelection = () => {
  const { theme } = useContext(ThemeContext)!;
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  return (
    <section className={style.wrapper} id="selection">
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Ваша подборка готова!</h2>
          <p className={style.description}>
            Оставьте свои контактные данные, чтобы мы могли отправить подготовленный для вас каталог
          </p>
        </div>
        <div className="carousel">
          <div className={style.selection}>
            <Form
              text={"Получите подборку подходящих для вас моделей на почту"}
              title={"Получить предложение"}
              phoneInputProps={{ type: "email", placeholder: "E-mail" }}
              backgroundColor="rgba(219, 187, 169, 1)" // Убрана точка с запятой
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSelection;