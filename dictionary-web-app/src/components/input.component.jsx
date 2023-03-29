import React, {useContext, useRef} from 'react';
import '../css/InputComponent.css'
import {ThemeContext} from "./theme.provider";
import Swal from "sweetalert2";

const InputComponent =  ({ inputFetch }) => {
    const [Theme] = useContext(ThemeContext)
    const inputValue = useRef(null)
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const value = inputValue.current.value.trim();
            if (value === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Input field cannot be empty!',
                })
                return;
            }
            inputFetch(value);
        }
    };
    
    return (
        <div className={!Theme ? 'darkmode-title' : 'lightmode-title'}>
            <label htmlFor='main-input'>
            <input id='main-input' className='main-input' ref={inputValue} onKeyDown={handleKeyDown} type="text" required/>
            </label>
        </div>
    );
};

export default InputComponent;
