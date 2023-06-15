import React from 'react';
import SideBarFooter from './components/SideBarFooter.jsx';
const SideBar = () => {
    return (
        <aside className="p-6 pr-20 border-r border-lightBlueish w-80">
            <div className="flex flex-col">
                <div className="flex flex-grow">
                    <h1 className="text-mediumGray opacity-90">ALL BOARDS</h1>
                </div>
                <SideBarFooter />
            </div>
        </aside>
    );
};

export default SideBar;
