import React from 'react';

import AboutText from "./AboutText";

const AboutContent = (props) => {
    return (
        <div className="about-content-container">
            <div className="wrap-about-text">
                <h3>We empower innovators by delivering access to the financial system</h3>
            </div>
            <AboutText/>
        </div>
    )
};

export default AboutContent;
