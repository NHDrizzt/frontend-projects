import React, {useContext, useRef} from 'react';
import '../css/InputComponent.css'
import {ThemeContext} from "./theme.provider";

const InputComponent =  ({ inputFetch }) => {
    const [Theme] = useContext(ThemeContext)
    const inputValue = useRef(null)
    
    return (
        <div className={!Theme ? 'darkmode-title' : 'lightmode-title'}>
            <label htmlFor='main-input'>
            <input id='main-input' className='main-input' ref={inputValue} onKeyDown={inputFetch} type="text"/>
            </label>
        </div>
    );
};

export default InputComponent;
