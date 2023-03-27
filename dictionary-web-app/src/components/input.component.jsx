import React, {useContext} from 'react';
import '../css/InputComponent.css'
import {ThemeContext} from "./theme.provider";

const InputComponent =  () => {
    const [Theme, setTheme] = useContext(ThemeContext)
    console.log(Theme)
    
    return (
        <div className={!Theme ? 'darkmode-title' : 'lightmode-title'}>
            <label htmlFor='main-input'>
            <input id='main-input' className='main-input' type="text"/>
            </label>
        </div>
    );
};

export default InputComponent;
