import React from 'react';
import './App.css';
import Header from './pages/Header.jsx';
import SideBar from './pages/SideBar.jsx';

function App() {

    return (
        <div>
            <div className="flex">
                <SideBar/>
                <Header/>
            </div>
        </div>
    );
}

export default App;
