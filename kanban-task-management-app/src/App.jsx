import React from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';
import ColumnField from './pages/ColumnField.jsx';

function App() {

    return (
        <div>
            <div className="flex flex-col h-screen">
                <Header/>
                <div className="flex h-screen">
                    <div className="hidden md:block">
                        <SideBar/>
                    </div>
                    <div className="w-full grid place-items-center bg-almostWhite">
                        <ColumnField />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
