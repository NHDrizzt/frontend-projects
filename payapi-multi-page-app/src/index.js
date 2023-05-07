import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/Error-page";
import Pricing from "./components/PrincingPage/Pricing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "pricing",
        element: <Pricing />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "contact",
        element: <Contact />
    }
])

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} errorElement={<ErrorPage/>}/>
);
