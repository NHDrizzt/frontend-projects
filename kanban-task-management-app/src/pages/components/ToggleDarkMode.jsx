import React, {useContext} from 'react';
import iconLightTheme from '../../assets/icon-light-theme.svg';
import iconDarkTheme from '../../assets/icon-dark-theme.svg';
import {DarkModeContext} from '../../context/DarkModeContext.jsx';
import useScreenSize from '../../hooks/useScreenSize.jsx';
import PropTypes from 'prop-types';
import SideBarFooter from './SideBarFooter.jsx';

const ToggleDarkMode = ({ toggle }) => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const isScreenLarger = useScreenSize();
    
    
    return (
        <div className={`${isScreenLarger && !toggle ? 'absolute left-6 top-[57rem]': ''} ${'w-60 h-12 mt-2 gap-x-5 mx-auto flex items-center justify-center bg-almostWhite dark:bg-darkGray rounded-md'}`}>
            <img src={iconLightTheme} alt="icon-light-theme"/>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={ () => setDarkMode(!darkMode)}/>
                <div className="w-10 h-5 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all bg-darkPurple peer-checked:bg-darkPurple"></div>
            </label>
            <img src={iconDarkTheme} alt="icon-dark-theme"/>
        </div>
    );
};

ToggleDarkMode.propTypes = {
    toggle: PropTypes.bool.isRequired,
};

export default ToggleDarkMode;
