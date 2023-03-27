import React from 'react';
import '../css/Footer.css'

const FooterComponent = () => {
    return (
        <div className='footer'>
            <h3>Source</h3>
            <div className="img-link">
                <a>https://en.wiktionary.org/wiki/keyboard</a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14">
                    <path fill="none"
                          stroke="#838383"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/>
                </svg>
            </div>
            
        </div>
    );
};

export default FooterComponent;
