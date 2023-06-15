import React from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';
import threeDots from '../assets/icon-vertical-ellipsis.svg';
import logoDark675 from '../assets/logo-dark.svg';
import logoDark375 from '../assets/logo-mobile.svg';
import chevronDown from '../assets/icon-chevron-down.svg';

const Header = () => {
    
    
    
    return (
        <header className="flex border-b border-solid border-lightBlueish">
            <div className="flex py-5 px-4 md:py-7 md:px-6 md:border-r md:border-solid md:border-lightBlueish">
                <picture>
                    <source media='(min-width: 768px)' srcSet={logoDark675}/>
                    <img className="" src={logoDark375} alt=""/>
                </picture>
            </div>
            <div className="flex flex-auto min-w-[50%] md:px-6 items-center justify-between">
                <div className="flex gap-x-2 items-center ">
                    <h1 className="text-lg font-plus-jakarta font-bold md:text-3xl">Platform Launch</h1>
                    <img className="w-2.5 h-2.5 md:hidden" src={chevronDown} alt=""/>
                </div>
                <div className="flex items-center">
                    {/*<MobileButtonAddNewTask />*/}
                    <ButtonAddNewTask />
                    <div>
                        <img className="px-3 h-4 md:pl-6 md:pr-7 md:h-6 cursor-pointer" src={threeDots} alt=""/>
                    </div>
                </div>
            </div>
         
        </header>
    );
};

export default Header;
