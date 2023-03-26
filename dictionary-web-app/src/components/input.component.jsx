import React from 'react';
import '../css/InputComponent.css'

const InputComponent = () => {
    return (
        <div>
            <label htmlFor='main-input'>
            <input id='main-input' className='main-input' type="text"/>
            
            </label>
        </div>
    );
};

export default InputComponent;
