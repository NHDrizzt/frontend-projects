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
                    <SideBar/>
                    <div className="flex-1">
                        <ColumnField />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
