import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/root.jsx';
import DarkModeContextProvider from './context/DarkModeContextProvider.jsx';
import SideBarContextProvider from './context/SidebarContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <SideBarContextProvider>
                <RouterProvider router={router}/>
            </SideBarContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>,
);
