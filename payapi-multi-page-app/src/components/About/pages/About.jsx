import React from 'react';
import {Header} from "../../MainPage/Header/Header";
import Footer from "../../MainPage/Footer/Footer";
import ReadyToStart from "../../MainPage/AboutOurAdvantages/ReadyToStart";
import AboutContent from "../components/AboutContent";
import circle from '../../../assets/shared/desktop/bg-pattern-circle.svg';


const About = () => {
    return (
        <section className="about">
            <div className="">
                <Header/>
            </div>
            <img className="circle-about" src={circle} alt=""/>
            <AboutContent />
            <div className="wrapper">
                <ReadyToStart />
            </div>
            <Footer />
        </section>
    );
};

export default About;
