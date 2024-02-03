import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Assignments from "./Pages/Assignments";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/assignments",
    element: <Assignments />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <div className="flex items-center flex-col">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
  // </Provider>
);
