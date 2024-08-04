import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddProductPage from "./pages/AddProductPage";

export const ROUTES = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/add-product",
            element: <AddProductPage />
        }
    ]
)