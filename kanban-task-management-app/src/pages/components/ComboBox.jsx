import React, {useContext, useRef} from 'react';
import {ColumnContext} from '../../context/ColumnContext.jsx';

import chevronCustom from '../../assets/icon-chevron-down.svg';
import PropTypes from 'prop-types';
import {BoardContext} from '../../context/BoardContext.jsx';

const ComboBox = ({ selectedOption, setSelectedOption, onSelectionChange, currentSelectedValue }) => {

    const { currentBoard } = useContext(BoardContext);
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(event.target.value);
        onSelectionChange(selectedValue);
    };
    
    return (
        <>
            <select
                className="p-4 bg-white border border-lightGray border-opacity-25 w-full rounded-md appearance-none cursor-pointer dark:bg-mediumGray dark:border-lightMediumGray dark:border-opacity-25 dark:caret-white dark:text-white"
                value={currentSelectedValue ? currentSelectedValue : selectedOption}
                onChange={handleOptionChange}>
                {/*<option>Select an option</option>*/}
                {currentBoard.columns.map(({column}, index) => (
                    <option key={index} value={column}>
                        {column}
                    </option>
                ))}
            </select>
            <img className="absolute cursor-pointer bottom-0 right-0 mb-5 mr-4 w-[18px] pointer-events-none"
                src={chevronCustom} alt=""/>
        </>

    );
};

ComboBox.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func.isRequired,
};

export default ComboBox;
