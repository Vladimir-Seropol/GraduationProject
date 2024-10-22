import style from "./style.module.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
  }

const ButtonDark : React.FC<ButtonProps> = ({ text, onClick }) => {

	return(
		<button className={style.button} onClick={onClick}>
			{text}
		</button>
	)
}


export default ButtonDark;