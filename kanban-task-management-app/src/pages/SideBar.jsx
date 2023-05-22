import React from 'react';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';
const SideBar = () => {
    return (
        <aside className="p-8 pr-20 border-solid border-2 border-lightBlueish">
            <img src={logoDark} alt=""/>
            <div className="mt-14">
                <h1 className="text-mediumGray opacity-90">ALL BOARDS</h1>
            </div>
        </aside>
    );
};

export default SideBar;
