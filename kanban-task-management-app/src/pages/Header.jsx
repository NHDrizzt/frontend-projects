import React from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';
import threeDots from '../assets/icon-vertical-ellipsis.svg';

const Header = () => {
    return (
        <header>
            <div className="flex shadow-xl py-7 pl-6 items-center justify-between border-b border-lightBlueish">
                <h1 className="text-3xl">Platform Lauch</h1>
                <div className="flex items-center">
                    <ButtonAddNewTask />
                    <div>
                        <img className="pl-6 pr-7 cursor-pointer" src={threeDots} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
