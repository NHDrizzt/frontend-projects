import React, {useEffect, useRef, useState} from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';
import threeDots from '../assets/icon-vertical-ellipsis.svg';
import logoDark675 from '../assets/logo-dark.svg';
import logoDark375 from '../assets/logo-mobile.svg';
import chevronDown from '../assets/icon-chevron-down.svg';
import DropdownSection from './components/DropdownSection.jsx';
import useScreenSize from '../hooks/useScreenSize.jsx';

const Header = () => {
    const dropdownRef = useRef(null);
    const isScreenLarge = useScreenSize();

    const handleDropdown = () => {
        dropdownRef.current.classList.toggle('hidden');
    };
    
    
    return (
        <header className="flex border-b border-solid border-lightBlueish">
            <div className="flex py-5 px-4 md:px-[34px] md:w-[301px] md:items-center md:h-[97px] md:border-r md:border-solid md:border-lightBlueish md:dark:border-lightGray">
                <picture>
                    <source media='(min-width: 768px)' srcSet={logoDark675}/>
                    <img className="" src={logoDark375} alt=""/>
                </picture>
            </div>
            <div className="flex flex-auto min-w-[50%] md:px-6 items-center justify-between">
                <div className="relative">
                    <button className="flex gap-x-1 items-center text-lg w-fit font-plus-jakarta font-bold md:text-xl" aria-expanded="true" aria-haspopup="true" onClick={ handleDropdown } disabled={ isScreenLarge }>Platform Launch
                        <img className="w-3 h-2 mt-1 md:hid  den" src={chevronDown} alt=""/>
                    </button>
                    <div ref={dropdownRef} className={'absolute hidden right-0 left-0 mx-auto z-10 mt-7 w-64 h-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <DropdownSection />
                    </div>
                </div>
                <div className="flex items-center">
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
