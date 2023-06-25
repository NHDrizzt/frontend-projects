import React from 'react';
import {DropdownContext} from './DropdownContext.jsx';
import PropTypes from 'prop-types';

const DropdownContextProvider = ({ children }) => {
    
    const values = {
    
    };
    
    return (
        <DropdownContext.Provider value={ values }>
            { children }
        </DropdownContext.Provider>
    );
};

DropdownContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DropdownContextProvider;
