import React, {useContext} from 'react';
import hideSideBar from '../../assets/icon-hide-sidebar.svg';
import {SideBarContext} from '../../context/SidebarContext.jsx';
const SideBarFooter = () => {
    const { toggle, setToggle } = useContext(SideBarContext);
    
    return (
        <footer className={`${toggle ? 'opacity-0' : ''} ${''}`}>
            <button className="flex items-center ml-2 gap-x-2" onClick={ () => setToggle(!toggle) }>
                <img src={hideSideBar} alt=""/>
                <p className="font-plus-jakarta font-bold text-veryLightGray text-[15px]">Hide Sidebar</p>
            </button>
        </footer>
    );
};

export default SideBarFooter;
