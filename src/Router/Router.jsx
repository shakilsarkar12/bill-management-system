import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Bill from "../Pages/Bill/Bill";
import Profile from "../Pages/Profile/Profile";
import Auth from "../Pages/Auth/Auth";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import BillDetails from "../Pages/BillDetails/BillDetails";
import Categories from "../Component/Categories/Categories";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/bills",
        Component: Bill,
        loader: () => fetch("/bills.json"),
        id: "bills",
        hydrateFallbackElement: <div>Loading.....</div>,
        children: [
          {
            path: "/bills/:id",
            Component: Categories,
          },
        ],
      },
      {
        path: "/billdetails/:id",
        Component: BillDetails,
        loader: () => fetch("/bills.json"),
        hydrateFallbackElement: <div>Loading.....</div>,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/auth",
        Component: Auth,
        children: [
          {
            path: "/auth/signin",
            Component: SignIn,
          },
          {
            path: "/auth/signup",
            Component: SignUp,
          },
        ],
      },
    ],
  },
]);
