import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from "./style.module.css";

interface SwitchThemeProps {
  onClick?: () => void; // Добавляем onClick как опциональный пропс
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ onClick }) => {
  const currentTheme = useContext(ThemeContext);

  const handleClick = () => {
    if (currentTheme?.theme === "dark") {
      currentTheme.setTheme("light");
    } else {
      currentTheme?.setTheme("dark");
    }
    
    // Вызываем переданный onClick, если он есть
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={style.theme_switch}>
      <div onClick={handleClick}>
        {currentTheme?.theme === "dark" ? "Light" : "Dark"} 
      </div>
    </div>
  );
};

export default SwitchTheme;