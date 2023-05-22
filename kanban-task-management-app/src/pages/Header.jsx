import React from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';

const Header = () => {
    return (
        <header>
            <div className="flex justify-between">
                <h1 className="text-3xl">Platform Lauch</h1>
                <ButtonAddNewTask />
            </div>
        </header>
    );
};

export default Header;
