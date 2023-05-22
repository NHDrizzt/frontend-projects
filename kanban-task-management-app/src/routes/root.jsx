import {createBrowserRouter} from 'react-router-dom';
import App from '../App.jsx';
import React from 'react';
import ErrorPage from '../errors/error-page.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ''
            }
        ]
    },
]);
