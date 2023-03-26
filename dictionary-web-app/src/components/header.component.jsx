import React, {useContext, useEffect, useRef, useState} from 'react';
import '../css/Header.css'
import iconBook from '../assets/images/logo.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'
import {ThemeContext} from "./theme.provider";


const HeaderComponent = () => {
    const [Theme, setTheme] = useContext(ThemeContext)
    const [Font, setFont] = useState('Sans Serif')
    const inputRef = useRef(null)
    
    useEffect(() => {
        setTheme(!Theme)
    }, []);
    
    const toggleDarkmode = () => {
        
        const darkTheme = document.querySelector('.darktheme-checkbox');
    
        if (darkTheme.checked) {
            const divCard = document.querySelector('.section-dropdown');
            divCard.classList.remove('card-light')
            divCard.classList.add('card-dark')
            document.body.style.color = 'white'
        } else {
            const divCard = document.querySelector('.section-dropdown');
            divCard.classList.remove('card-dark')
            divCard.classList.add('card-light')
            document.body.style.color = ''
        }
        
        setTheme(!Theme)
        !Theme ? document.body.style.backgroundColor = '#FFF' : document.body.style.backgroundColor = '#050505'
    }
    
    function toggleSansSerifFont() {
        document.body.style.fontFamily = 'Sans Serif'
        setFont('Sans Serif')
    }
    
    function toggleSerifFont() {
        document.body.style.fontFamily = 'IBM Plex Serif'
        setFont('Serif')
    }
    
    function toggleMonoFont() {
        document.body.style.fontFamily = 'Roboto Mono'
        setFont('Mono')
    }
    
    return (
        <div className='header'>
            <img src={iconBook} alt="iconbook"/>
            <div className="container-font-theme">
                <div className="font-block">
                    <div className="change-font">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                        <label className="for-dropdown" htmlFor="dropdown">{Font}  <img src={arrowDown} alt=""/> </label>
                        <div className="card-light section-dropdown">
                            <div className="section-container">
                                <input className="sub sans-serif" ref={inputRef} onClick={toggleSansSerifFont} type="checkbox" id="sans-serif" name="dropdown-sub"/>
                                <label className="sub sans-serif" htmlFor="sans-serif">Sans Serif</label>
                                <input className="sub serif" onClick={toggleSerifFont} type="checkbox" id="serif" name="dropdown-sub"/>
                                <label className="sub serif" htmlFor="serif">Serif</label>
                                <input className="sub mono" onClick={toggleMonoFont} type="checkbox" id="mono" name="dropdown-sub"/>
                                <label className="sub mono" htmlFor="mono">Mono</label>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <span className='risk'>|</span>
                <div className="toggle">
                    <label for="darktheme-checkbox">
                        <input className="darktheme-checkbox" id="darktheme-checkbox" type="checkbox" onChange={toggleDarkmode}/>
                        <span className="check"></span>
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="22" height="22"
                         viewBox="0 0 22 22">
                        <path fill="none"
                              stroke={Theme ? '#838383' : '#A445ED'}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
