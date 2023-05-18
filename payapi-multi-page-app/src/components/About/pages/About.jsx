import React from 'react';
import {Header} from "../../MainPage/Header/Header";
import Footer from "../../MainPage/Footer/Footer";
import ReadyToStart from "../../MainPage/AboutOurAdvantages/ReadyToStart";
import AboutContent from "../components/AboutContent";
import circle from '../../../assets/shared/desktop/bg-pattern-circle.svg';


const About = () => {
    return (
        <section className="about">
            <img className="circle-about" src={circle} alt=""/>
            <div className="wrapper">
                <Header/>
            </div>
            <AboutContent />
            <div className="wrapper">
                <ReadyToStart />
            </div>
            <Footer />
        </section>
    );
};

export default About;
