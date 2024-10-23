import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import SneakerPage from "./pages/Sneaker";
import BasketList from "./pages/CartPage/BasketList";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: Loader,
		children: [
			{ path: "/", element: <Home /> },
			// {path: "#catalog",element: <SectionSneakers />},
			{ path: "sneaker/:id", element: <SneakerPage /> },
			// { path: "#about_us", element: <SectionAbout /> },
			// {path: "#selection",element: <SectionSelection />},
			// {path: "#team",element: <SectionTeams />},
			// {path: "#payment",element: <SectionForm />},     
			// {path: "#contacts",element: <SectionContacts />},
			// {path: "#review",element: <Review />},
			{ path: "basket", element: <BasketList /> },
			{ path: "*", element: <NotFound /> }
		]
	}

]);

export default router;
