import React from 'react';
import {Header} from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import ReadyToStart from "../MainPage/AboutOurAdvantages/ReadyToStart";
import PartnerIcons from "./PartnerIcons";
import ContactContent from "./components/ContactContent";
import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';

const Contact = () => {
    return (
        <section className="contact-page">
            <Header/>
            <img className="circle-contact" src={circle} alt=""/>
            <div className="contact-wrap-desktop">
                <div className="wrapper-form">
                    <ContactContent />
                </div>
                <div className="contact-text">
                    <h4>Join the thousands of innovators already building with us</h4>
                    <PartnerIcons />
                </div>
            </div>
            
            
       
            <div className="wrapper">
                <ReadyToStart />
            </div>
            <Footer/>
        </section>

    );
};

export default Contact;
