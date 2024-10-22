import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { createContext, useState } from 'react';



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





