import style from "./style.module.css";


interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
  }

const ButtonRed : React.FC<ButtonProps> = ({ text, onClick }) => {

	return(
		<button className={style.button} onClick={onClick}>
			{text}
		</button>
	)
}

export default ButtonRed;