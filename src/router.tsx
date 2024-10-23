import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import SneakerPage from "./pages/Sneaker";
import Basket from "./pages/CartPage/Basket";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: Loader,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "sneaker/:id", element: <SneakerPage /> },
			{ path: "basket", element: <Basket  /> },
			{ path: "*", element: <NotFound /> }
		]
	}

]);

export default router;
