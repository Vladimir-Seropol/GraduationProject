import { Link } from 'react-router-dom';
import style from './style.module.css'


const Logo = () => {
	return (
		<Link to={"/"} className={style.logo}>
		<span>SneakMax</span>
		</Link>
	);
};

export default Logo;
