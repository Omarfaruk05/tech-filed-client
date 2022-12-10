import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import ReadingHistory from "../pages/ReadingHistory/ReadingHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/reading-history",
        element: <ReadingHistory />,
      },
    ],
  },
]);

export default routes;
