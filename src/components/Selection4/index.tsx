import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../App.tsx";
import style from "./style.module.css";
import Form from "../Form";

interface Selection4Props {
    onButtonClick: () => void;
}

const SectionSelection: React.FC<Selection4Props> = ({ onButtonClick }) => {
    const { theme } = useContext(ThemeContext)!;
    const [message, setMessage] = useState<string | null>(null);

    const backgroundStyle =
        theme === "dark"
            ? { background: "none" }
            : { background: "rgba(255, 244, 238, 1)" };

    const handleButtonClick = () => {
        console.log("Кнопка нажата!");
        setMessage("Данные успешно отправлены!");
        onButtonClick();
    };

    // Используем useEffect для задержки
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);

            // Очистка таймера при размонтировании компонента или изменении message
            return () => clearTimeout(timer);
        }
    }, [message]);

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
                            backgroundColor="rgba(219, 187, 169, 1)"
                            input={{
                                border: "rgba(219, 187, 169, 1)",
                                backgroundColor: ""
                            }}
                            onButtonClick={handleButtonClick}
                        />
                    </div>
                </div>
                {message && <p className={style.successMessage}>{message}</p>}
            </div>
        </section>
    );
};

export default SectionSelection;