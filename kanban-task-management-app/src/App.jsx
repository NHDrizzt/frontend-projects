import React, { useContext } from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';
import ColumnField from './pages/ColumnField.jsx';
import {DarkModeContext} from './context/DarkModeContext.jsx';

function App() {
    
    const { darkMode } = useContext(DarkModeContext);
    
    return (
        <div className={`${darkMode && 'dark'}`}>
            <div className="flex flex-col h-screen dark:bg-mediumGray">
                <Header />
                <div className="flex h-screen">
                    <div className="hidden md:block md:border-r md:border-lightBlueish ">
                        <SideBar/>
                    </div>
                    <div className="w-full grid place-items-center bg-almostWhite dark:bg-darkGray">
                        <ColumnField />
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default App;
