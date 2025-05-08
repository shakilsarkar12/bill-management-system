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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Component/Loader/Loader";
import Settings from "../Component/Settings/Settings";

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
        element: (
          <PrivateRoute>
            <Bill />
          </PrivateRoute>
        ),
        loader: () => fetch("/bills.json"),
        id: "bills",
        hydrateFallbackElement: <Loader />,
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
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/profile/dashboard",
            Component: Dashboard,
          },
          {
            path: "/profile/myprofile",
            Component: MyProfile,
          },
          {
            path: "/profile/paymenthistory",
            element: <div>pyament history</div>,
          },
          {
            path: "/profile/notifications",
            element: <div>notifications</div>,
          },
          {
            path: "/profile/settings",
            Component: Settings,
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
