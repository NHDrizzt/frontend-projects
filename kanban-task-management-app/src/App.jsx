import React, { useContext } from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';
import ColumnField from './pages/ColumnField.jsx';
import {DarkModeContext} from './context/DarkModeContext.jsx';
import {SideBarContext} from './context/SidebarContext.jsx';
import showSideBar from './assets/icon-show-sidebar.svg';

function App() {
    
    const { darkMode } = useContext(DarkModeContext);
    const { toggle, setToggle } = useContext(SideBarContext);
    
    return (
        <div className={`${darkMode ? 'dark' : ''} flex flex-col h-screen`}>
            <div className="flex flex-col dark:bg-mediumGray">
                <Header />
            </div>
            <div className="flex relative flex-1">
                <div className={`${toggle ? 'md:w-0' : ''} ${' hidden md:block md:border-r md:border-lightBlueish'}` }>
                    <SideBar/>
                </div>
                <div className={`${toggle ? 'left-0 bottom-0 mb-8 block' : 'left-[301px]  hidden'} ${'absolute flex items-center pl-[15px] h-12 w-[56px] bg-darkPurple rounded-tr-[100px] rounded-br-[100px] cursor-pointer'}`} onClick={() => { setToggle(!toggle); }}>
                    <img src={showSideBar} alt=""/>
                </div>
                <div className="w-full flex-grow grid place-items-center bg-almostWhite dark:bg-darkGray">
                    <ColumnField />
                </div>
            </div>
        </div>
        
        
    );
}

export default App;
