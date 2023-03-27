import React from 'react';
import '../css/Description.css'

const DescriptionComponent = () => {
    return (
        <>
            <div className="line"></div>
            <div className='description-section'>
                <h3>noun</h3>
                <div className="meaning-description">
                    <h4>Meaning</h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="synonymus">
                    <p>Synonyms</p>
                    <span>eletronic keyboard</span>
                </div>
            </div>
            <div className="line"></div>
            <div className='description-section'>
                <h3>verb</h3>
                <div className="meaning-description">
                    <h4>Meaning</h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="synonymus">
                    <p>Synonyms</p>
                    <span>eletronic keyboard</span>
                </div>
            </div>
        </>
    );
};

export default DescriptionComponent;
