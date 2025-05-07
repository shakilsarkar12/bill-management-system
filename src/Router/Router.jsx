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
import Dashboard from "../Component/Dashboard/Dashboard";
import MyProfile from "../Component/MyProfile/MyProfile";

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
        children: [
          {
            path: "/profile/dashboard",
            Component: Dashboard,
          },
          {
            path: "/profile/my-profile",
            Component: MyProfile,
          },
          {
            path: "/profile/payment-history",
            element: <div>pyament history</div>,
          },
          {
            path: "/profile/notifications",
            element: <div>notifications</div>,
          },
          {
            path: "/profile/settings",
            element: <div>setting</div>,
          },
          {
            path: "/profile/help",
            element: <div>help</div>,
          },
        ],
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
