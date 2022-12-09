import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Products />,
      },
    ],
  },
]);

export default routes;
