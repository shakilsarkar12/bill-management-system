import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import BillsPrrovider from "./Context/BillsProvider/BillsPrrovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BillsPrrovider>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </AuthProvider>
      </BillsPrrovider>
  </StrictMode>
);
