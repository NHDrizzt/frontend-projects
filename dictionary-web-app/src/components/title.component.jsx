import React from 'react';
import iconPlayButton from '../assets/images/icon-play.svg'
import '../css/TittleComponent.css'

const TitleComponent = () => {
    return (
        <div className='title-container'>
            <div className="main-text">
                <h1>keyboard</h1>
                <h3>/kibod/</h3>
            </div>
            <div className="image-button">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="75"
                     height="75"
                     viewBox="0 0 75 75">
                    <g fill="#A445ED" fillRule="evenodd">
                        <circle cx="37.5" cy="37.5" r="37.5" opacity="0.25"/>
                        <path d="M29 27v21l21-10.5z" fill=""/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TitleComponent;
