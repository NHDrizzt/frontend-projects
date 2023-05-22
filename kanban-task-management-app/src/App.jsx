import React from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';
import ColumnField from './pages/ColumnField.jsx';

function App() {

    return (
        <div>
            <div className="flex">
                <SideBar/>
                <div className="flex-1 flex-col">
                    <Header/>
                    <ColumnField />
                </div>
               
            </div>
        </div>
    );
}

export default App;
