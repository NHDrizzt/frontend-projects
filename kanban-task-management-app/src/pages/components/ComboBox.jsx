import React, {useContext} from 'react';
import {ColumnContext} from '../../context/ColumnContext.jsx';

import chevronCustom from '../../assets/icon-chevron-down.svg';
import PropTypes from 'prop-types';

const ComboBox = ({ selectedOption, setSelectedOption }) => {

    const { columnFields } = useContext(ColumnContext);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <>
            <select className="p-4 bg-white border border-lightGray border-opacity-25 w-full appearance-none cursor-pointer" value={selectedOption} onChange={handleOptionChange}>
                <option>Select an option</option>
                {columnFields.map(({column}, index) => (
                    <option key={index} value={column}>
                        {column}
                    </option>
                ))}
            </select>
            <img className="absolute cursor-pointer bottom-0 right-0 mb-5 mr-4 w-[18px]" src={chevronCustom} alt=""/>
        </>

    );
};

ComboBox.propTypes = {
    setSelectedOption: PropTypes.func.isRequired,
};

export default ComboBox;
