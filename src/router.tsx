import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import SneakerPage from "./pages/Sneaker";
// import Cart from "./pages/CartPage";
// import SectionAbout from "./components/SectionAbout";
// import Review from "./pages/Review";
// import SectionSneakers from "./components/SectionSneakers";
// import SectionAbout from "./components/SectionAbout";
// import SectionSelection from "./components/SectionSelection";
// import SectionTeams from "./components/SectionTeam";
// import SectionContacts from "./components/SectionContacts";
// import SectionForm from "./components/SectionForm";

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
			// { path: "cart", element: <Cart /> },
			{ path: "*", element: <NotFound /> }
		]
	}

]);

export default router;
