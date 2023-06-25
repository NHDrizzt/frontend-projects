import React, {useState} from 'react';
import iconDropdown from '../../assets/icon-board.svg';
import ToggleDarkMode from './ToggleDarkMode.jsx';
import PropTypes from 'prop-types';

const DropdownSection = () => {
    const dropDownOptions = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
    const [isButtonFocused, setIsButtonFocused] = useState(false);
    const [clickedIndex, setClickedIndex] = useState();
    
    const handleButtonFocus = (index) => {
        setIsButtonFocused(true);
        setClickedIndex(index);
    };
    
    const handleButtonBlur = () => {
        setIsButtonFocused(false);
    };
    
    return (
        <>
            <div className="ml-6 py-4 text-veryLightGray font-bold font-plus-jakarta text-xs">
                <p>ALL BOARDS (3)</p>
            </div>
            <div className="py-1 font-plus-jakarta text-veryLightGray" role="none">
                {
                    dropDownOptions.map((el, index) => (
                        <div key={ index } className={`flex gap-x-2 pl-6 items-center ${isButtonFocused && index === clickedIndex ? 'h-12 w-[240px] text-white bg-darkPurple rounded-tr-[100px] rounded-br-[100px]' : ''}`}>
                            <img className="h-4" src={iconDropdown} alt=""/>
                            <button className="block py-3.5 text-sm font-bold " role="menuitem" tabIndex="-1" onFocus={ () => handleButtonFocus(index)} onBlur={handleButtonBlur}
                                id="menu-item-0">{el}</button>
                        </div>
                    ))
                }
                <div className="flex gap-x-2 ml-6 items-center">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#635FC7"/></svg>
                    <button className="py-3.5 text-sm font-bold text-darkPurple before:content-['+']" role="menuitem" tabIndex="-1" id="menu-item-0">
                        Create New Board
                    </button>
                </div>
                <ToggleDarkMode />
            </div>
        </>
    );
};

DropdownSection.propTypes = {
    dropdownRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

export default DropdownSection;
