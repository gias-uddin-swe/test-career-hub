import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JObDetails from "./components/JobDetails/JObDetails";
import AuthProvider from "./Hook/AuthProvider";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import PrivateRoute from "./utility/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // warning: only load the data you need. do not load all the data
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JObDetails></JObDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/jobs.json"), // do not load all data. load only what you need
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
