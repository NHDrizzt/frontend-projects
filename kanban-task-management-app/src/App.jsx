import React, { useContext } from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';
import ColumnField from './pages/ColumnField.jsx';
import {DarkModeContext} from './context/DarkModeContext.jsx';
import {SideBarContext} from './context/SidebarContext.jsx';


function App() {
    
    const { darkMode } = useContext(DarkModeContext);
    const { toggle } = useContext(SideBarContext);
    
    return (
        <div className={`${darkMode ? 'dark' : ''} flex flex-col h-screen`}>
            <div className="flex flex-col dark:bg-mediumGray">
                <Header />
            </div>
            <div className="flex relative flex-1">
                <div className={`${toggle ? 'md:w-0' : ''} ${' hidden md:block md:border-r md:border-lightBlueish dark:bg-mediumGray md:dark:border-lightGray'}` }>
                    <SideBar/>
                </div>
                <ColumnField />
            </div>
        </div>
        
        
    );
}

export default App;
