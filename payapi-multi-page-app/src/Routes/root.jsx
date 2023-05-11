import App from "../App";
import ErrorPage from "../components/Error-page";
import Pricing from "../components/PrincingPage/Pricing";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import React from "react";

const router = [
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
];

export default router;
