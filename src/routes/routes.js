import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllProduct from "../pages/Dashboard/AllProduct";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
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
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <AllProduct />,
          },
          {
            path: "/dashboard/add-product",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/update-product",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

export default routes;
