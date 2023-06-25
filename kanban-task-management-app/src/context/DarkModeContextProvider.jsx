import React, {useState} from 'react';
import {DarkModeContext} from './DarkModeContext.jsx';
import PropTypes from 'prop-types';

const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const values = {
        darkMode,
        setDarkMode
    };
    
    return (
        <DarkModeContext.Provider value={ values }>
            {children}
        </DarkModeContext.Provider>
        
    );
};

DarkModeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkModeContextProvider;
