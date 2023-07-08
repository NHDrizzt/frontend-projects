import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/root.jsx';
import DarkModeContextProvider from './context/DarkModeContextProvider.jsx';
import SideBarContextProvider from './context/SidebarContextProvider.jsx';
import ColumnContextProvider from './context/ColumnContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <SideBarContextProvider>
                <ColumnContextProvider>
                    <RouterProvider router={router}/>
                </ColumnContextProvider>
            </SideBarContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>,
);
