import React, {useContext} from 'react';
import SideBarFooter from './components/SideBarFooter.jsx';
import DropdownSection from './components/DropdownSection.jsx';
import {SideBarContext} from '../context/SidebarContext.jsx';

const SideBar = () => {
    const { toggle, setToggle } = useContext(SideBarContext);
    
    return (
        <aside className={`${toggle ? ' -translate-x-[300px]' : ''} ${'w-[300px]'}`}>
            <div className={`${toggle ? 'hidden' : ''} ${'px-[10px] mt-[15px]'}`}>
                <DropdownSection />
            </div>
            <div className="absolute left-6 bottom-0 mb-8">
                <SideBarFooter toggle={ toggle } setToggle={ setToggle } />
            </div>
        </aside>
    );
};

export default SideBar;
