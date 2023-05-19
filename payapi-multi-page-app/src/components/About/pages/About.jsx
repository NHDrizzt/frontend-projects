import React from 'react';
import {Header} from "../../MainPage/Header/Header";
import Footer from "../../MainPage/Footer/Footer";
import ReadyToStart from "../../MainPage/AboutOurAdvantages/ReadyToStart";
import AboutContent from "../components/AboutContent";


const About = () => {
    return (
        <section className="about">
            <div className="">
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
