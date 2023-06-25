import React from 'react';
import ToggleDarkMode from './ToggleDarkMode.jsx';
import hideSideBar from '../../assets/icon-hide-sidebar.svg';
import PropTypes from 'prop-types';
const SideBarFooter = ({ toggle, setToggle }) => {
    return (
        <footer className={`${toggle ? 'opacity-0' : ''}`}>
            <button className="flex items-center ml-2 gap-x-2 pt-[30px]" onClick={ () => setToggle(!toggle) }>
                <img src={hideSideBar} alt=""/>
                <p className="font-plus-jakarta font-bold text-veryLightGray text-[15px]">Hide side bar</p>
            </button>
        </footer>
    );
};

SideBarFooter.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
};

export default SideBarFooter;
