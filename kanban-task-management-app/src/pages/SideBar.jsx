import React, {useState} from 'react';
import SideBarFooter from './components/SideBarFooter.jsx';
import showSideBar from '../assets/icon-show-sidebar.svg';
import DropdownSection from './components/DropdownSection.jsx';

const SideBar = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <aside className={`${toggle ? 'w-0' : ''} ${'relative w-[300px] transition-all duration-500'}`}>
            <div className={`${!toggle ? 'hidden' : ''} ${'absolute top-[60rem] right-[-56px]  flex items-center pl-[15px] h-12 w-[56px] bg-darkPurple rounded-tr-[100px] rounded-br-[100px] cursor-pointer'}`} onClick={() => { setToggle(!toggle); }}>
                <img src={showSideBar} alt=""/>
            </div>
            <div className="">
                <div className={`${toggle ? 'hidden' : ''} ${'px-[10px] mt-[15px]'}`}>
                    <DropdownSection />
                </div>
                <div className="absolute left-6 top-[60rem]">
                    <SideBarFooter toggle={ toggle } setToggle={ setToggle } />
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
