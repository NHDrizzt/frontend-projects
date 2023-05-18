import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/Error-page";
import router from "./Routes/root";

const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={routes} errorElement={<ErrorPage/>}/>
);
