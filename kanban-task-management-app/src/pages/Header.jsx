import React, {useEffect, useRef, useState} from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';
import threeDots from '../assets/icon-vertical-ellipsis.svg';
import logoDark675 from '../assets/logo-dark.svg';
import logoDark375 from '../assets/logo-mobile.svg';
import chevronDown from '../assets/icon-chevron-down.svg';
import iconDropdown from '../assets/icon-board.svg';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import iconLightTheme from '../assets/icon-light-theme.svg';
import iconDarkTheme from '../assets/icon-dark-theme.svg';

const Header = () => {
    const [isScreenLarge, setIsScreenLarge] = useState(false);
    const dropdownRef = useRef(null);
    const dropDownOptions = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
    const handleDropdown = () => {
        dropdownRef.current.classList.toggle('hidden');
    };
    
    useEffect(() => {
        const handleResize = () => {
            setIsScreenLarge(window.innerWidth > 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <header className="flex border-b border-solid border-lightBlueish">
            <div className="flex py-5 px-4 md:py-7 md:px-6 md:border-r md:border-solid md:border-lightBlueish">
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
                    {/* Dropdown section */}
                    <div ref={dropdownRef} className="absolute hidden right-0 left-0 mx-auto z-10 mt-7 w-64 h-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" >
                        <div className="ml-6 py-4 text-veryLightGray font-bold font-plus-jakarta text-xs">
                            <p>ALL BOARDS (3)</p>
                        </div>
                        <div className="py-1 font-plus-jakarta text-veryLightGray" role="none">
                            {
                                dropDownOptions.map((el, index) => (
                                    <div key={ index } className="flex gap-x-2 ml-6 items-center">
                                        <img className="h-4" src={iconDropdown} alt=""/>
                                        <button className="block py-3.5 text-sm font-bold" role="menuitem" tabIndex="-1"
                                            id="menu-item-0">{el}</button>
                                    </div>
                                ))
                            }
                            <div className="flex gap-x-2 ml-6 items-center">
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#635FC7"/></svg>
                                <button className="py-3.5 text-sm font-bold text-darkPurple before:content-['+']" role="menuitem" tabIndex="-1" id="menu-item-0">
                                    Create New Board
                                </button>
                            </div>
                            <div className="w-60 h-12 mt-2 gap-x-5 mx-auto flex items-center justify-center bg-almostWhite">
                                <img src={iconLightTheme} alt="icon-light-theme"/>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-10 h-5 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:bg-darkPurple peer-checked:bg-darkPurple"></div>
                                </label>
                                <img src={iconDarkTheme} alt="icon-dark-theme"/>
                            </div>
                        </div>
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
