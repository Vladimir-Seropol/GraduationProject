import './App.css';
//import Header from './components/Header';
//import Card from './components/Card';
//import allBeans from './data/beans.json';
//import Cards from './components/Cards';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { createContext, useState } from 'react';
//import Counter from './components/Counter';
//import Example from './components/Example';
//import Example_1 from './components/Example';
//import Title from './components/Title';
//import Buttons from './components/Buttons';


type ContextType = {
	theme: string,
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<
	ContextType | null>(null);




function App() {
	const [theme, setTheme] = useState('light');


	return (
		<div className={`"container" ${theme}`}>
			<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>

				<RouterProvider router={router} />

			</ThemeContext.Provider>
		</div>
	);
}

export default App;





