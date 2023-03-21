// Header.js

import React from "react";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

const HeaderTheme = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className='content-header'>
            <h1>TODO</h1>
            <img
                onClick={toggleDarkMode}
                src={isDarkMode ? iconSun : iconMoon}
                alt=""
            />
        </header>
    );
};

export default HeaderTheme;
