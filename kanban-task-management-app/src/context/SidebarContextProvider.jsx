import React, {useState} from 'react';
import {SideBarContext} from './SidebarContext.jsx';
import PropTypes from 'prop-types';

const SideBarContextProvider = ({ children }) => {
    
    const [toggle, setToggle] = useState(false);
    
    const values = {
        toggle,
        setToggle
    };
    
    return (
        <SideBarContext.Provider value={ values }>
            { children }
        </SideBarContext.Provider>
    );
};

SideBarContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SideBarContextProvider;
